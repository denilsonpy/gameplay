import React, { useState, useEffect } from "react";
import { Fontisto } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { BorderlessButton } from "react-native-gesture-handler";
import * as Linking from "expo-linking";
import {
  ImageBackground,
  Text,
  Alert,
  View,
  FlatList,
  Share,
  Platform,
} from "react-native";

import { styles } from "./styles";
import BannerImg from "../../assets/banner.png";
import { theme } from "../../global/styles/theme";

import { Header } from "../../components/Header";
import { Member, MemberProps } from "../../components/Member";
import { ListHeader } from "../../components/ListHeader";
import { Background } from "../../components/Background";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";
import { AppointmentProps } from "../../components/Appointment";
import { Load } from "../../components/Load";
import { api } from "../../services/api";

type Params = {
  guildSelected: AppointmentProps;
};

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
};

export function AppointmentDetails() {
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
  const [loading, setLoading] = useState(true);

  const route = useRoute();
  const { guildSelected } = route.params as Params;

  async function fetchGuildWidget() {
    try {
      const response = await api.get(
        `/guilds/${guildSelected.guild.id}/widget.json`
      );

      setWidget(response.data);
    } catch {
      Alert.alert(
        "Verifique as configurações do servidor, Será que o Widget está habilitado?"
      );
    } finally {
      setLoading(false);
    }
  }

  function handleShareInvitation() {
    const message =
      Platform.OS === "ios"
        ? `Junte-se a ${guildSelected.guild.name}`
        : widget.instant_invite;

    Share.share({
      message,
      url: widget.instant_invite,
    });
  }

  function handleOpenGuild() {
    Linking.openURL(widget.instant_invite);
  }

  useEffect(() => {
    fetchGuildWidget();
  }, []);

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          widget.instant_invite && (
            <BorderlessButton onPress={handleShareInvitation}>
              <Fontisto name="share" size={20} color={theme.colors.primary} />
            </BorderlessButton>
          )
        }
      />
      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>{guildSelected.guild.name}</Text>
          <Text style={styles.subtitle}>{guildSelected.description}</Text>
        </View>
      </ImageBackground>
      {loading ? (
        <Load />
      ) : (
        <>
          <ListHeader
            title="Jogadores"
            subtitle={`Total ${widget.members ? widget.members.length : 0}`}
          />
          <FlatList
            data={widget.members}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Member data={item} />}
            ItemSeparatorComponent={() => <ListDivider isCentered />}
            contentContainerStyle={{ paddingBottom: 69 }}
            style={styles.members}
          />
        </>
      )}
      {widget.instant_invite && (
        <View style={styles.footer}>
          <ButtonIcon onPress={handleOpenGuild} title="Entrar na partida" />
        </View>
      )}
    </Background>
  );
}
