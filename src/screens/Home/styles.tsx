import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    padding: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: getStatusBarHeight() + 26,
    marginBottom: 42,
  },
  matches: {
    marginTop: 24,
    marginLeft: 24,
    marginBottom: 24,
  },
});
