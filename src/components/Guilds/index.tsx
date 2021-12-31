import React from "react";
import { View, FlatList } from "react-native";

import { styles } from "./styles";

import { Guild, GuildProps } from "../Guild";
import { ListDivider } from "../ListDivider";

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
};

export function Guilds({ handleGuildSelect }: Props) {
  const guilds = [
    {
      id: "1",
      name: "Lendários",
      icon: "image",
      owner: true,
    },
    {
      id: "2",
      name: "Hackers",
      icon: "image",
      owner: true,
    },
    {
      id: "3",
      name: "Devs",
      icon: "image",
      owner: true,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelect(item)} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
      />
    </View>
  );
}
