import React from "react";
import { View, Text, Image, StatusBar } from "react-native";
import { styles } from "./styles";
import illustration from "../../assets/illustration.png";

import { ButtonIcon } from "../../components/ButtonIcon";

export function SingIn() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image source={illustration} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`}
          suas jogativas {`\n`}
          facilmente
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para seus games {`\n`}
          favoritos com seus amigos
        </Text>

        <ButtonIcon title="Entrar com o discord" />
      </View>
    </View>
  );
}
