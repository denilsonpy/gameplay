import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.color.backgroud,
  },
  image: {
    width: "100%",
    height: 360,
    resizeMode: "stretch",
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 50,
  },
  title: {
    color: theme.color.heading,
    textAlign: "center",
    fontSize: 40,
    marginBottom: 16,
  },
  subtitle: {
    color: theme.color.heading,
    textAlign: "center",
    marginBottom: 64,
  },
});
