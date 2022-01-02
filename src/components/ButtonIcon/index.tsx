import React from "react";
import { ButtonProps, TouchableOpacity } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";
import { Text, Image, View } from "react-native";
import discordimg from "../../assets/discord.png";
import { styles } from "./styles";

type Props = ButtonProps & {
  title: string;
};

export function ButtonIcon({ title, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={discordimg} style={styles.icon} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
