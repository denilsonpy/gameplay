import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { styles } from "./styles";
import { categories } from "../../utils/categories";
import { Category } from "../Category";

type Props = {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
  hasCheckBox?: boolean;
};

export function CategorySelect({
  categorySelected,
  hasCheckBox = false,
  setCategory,
}: Props) {
  return (
    <SafeAreaView>
      <ScrollView
        horizontal
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 40 }}
      >
        {categories.map((category) => (
          <Category
            hasCheckBox={hasCheckBox}
            key={category.id}
            title={category.title}
            icon={category.icon}
            onPress={() => setCategory(category.id)}
            checked={category.id === categorySelected}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
