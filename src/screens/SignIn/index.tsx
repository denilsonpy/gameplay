import React from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import illustration from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";

export function SingIn() {
  const navigation = useNavigation();

  function handleSingIn() {
    // @ts-ignore: Unreachable code error
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <Image source={illustration} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {"\n"}e organize suas {"\n"}jogativas
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para seus games {"\n"}
          favoritos com seus amigos
        </Text>

        <ButtonIcon
          title="Entrar com o discord"
          activeOpacity={0.7}
          onPress={handleSingIn}
        />
      </View>
    </View>
  );
}
