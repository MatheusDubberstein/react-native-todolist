import { StyleSheet } from "react-native";
import { colors } from "./constants/colors";

export const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: colors.gray700,
    height: 173,
    flexShrink: 0,
  },
  container: { flex: 1, backgroundColor: colors.gray600 },
});
