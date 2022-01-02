import React from "react";
import { Text, View } from "react-native";
import { useAuth } from "../../hooks/auth";
import { Avatar } from "../Avatar";

import { styles } from "./styles";
import { welcomeTexts } from "../../utils/welcomeTexts";

export function Profile() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Avatar urlImage={user.avatar} />
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
