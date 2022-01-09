import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 62,
    height: 62,
    borderRadius: 8,
    backgroundColor: theme.colors.discord,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    height: 67,
    width: 63,
    borderRadius: 8,
  },
});
