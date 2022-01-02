import React from "react";
import { View, Text, Image, Alert, ActivityIndicator } from "react-native";
import { useAuth } from "../../hooks/auth";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import illustration from "../../assets/illustration.png";

import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";

export function SingIn() {
  const { user, signIn, loading } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (error: any) {
      Alert.alert(error.message);
    }
  }

  return (
    <Background>
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

          {loading ? (
            <ActivityIndicator color={theme.colors.primary} />
          ) : (
            <ButtonIcon title="Entrar com o discord" onPress={handleSignIn} />
          )}
        </View>
      </View>
    </Background>
  );
}
