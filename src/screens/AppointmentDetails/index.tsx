import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
import { ImageBackground, Text, View, FlatList } from "react-native";

import { styles } from "./styles";
import BannerImg from "../../assets/banner.png";
import { theme } from "../../global/styles/theme";

import { Header } from "../../components/Header";
import { Background } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";

export function AppointmentDetails() {
  const members = [
    {
      id: "1",
      username: "denilsonpy",
      avatar_url: "https://github.com/denilsonpy.png",
      status: "online",
    },
    {
      id: "2",
      username: "denilsonpy",
      avatar_url: "https://github.com/denilsonpy.png",
      status: "offline",
    },
  ];
  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={20} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />
      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>
      <ListHeader title="Jogadores" subtitle="Total 3" />
      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {}}
      />
    </Background>
  );
}
