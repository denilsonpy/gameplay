import React from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import discordimg from "../../assets/discord.png";
import { styles } from "./styles";

interface Props {
  title: string;
}

export function ButtonIcon({ title }: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.iconWrapper}>
        <Image source={discordimg} style={styles.icon} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
