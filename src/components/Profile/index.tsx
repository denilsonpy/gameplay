import React from "react";
import { Alert, Text, View } from "react-native";
import { useAuth } from "../../hooks/auth";
import { Avatar } from "../Avatar";
import { RectButton } from "react-native-gesture-handler";

import { styles } from "./styles";
import { welcomeTexts } from "../../utils/welcomeTexts";

export function Profile() {
  const { user, singOut } = useAuth();

  function handleSingOut() {
    Alert.alert("Logout", "Deseja sair do Gameplay?", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => singOut(),
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <RectButton onPress={handleSingOut}>
        <Avatar urlImage={user.avatar} />
      </RectButton>
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}>{user.firstName}</Text>
        </View>
        <Text style={styles.message}>
          {welcomeTexts[Math.floor(Math.random() * 3)]}
        </Text>
      </View>
    </View>
  );
}
