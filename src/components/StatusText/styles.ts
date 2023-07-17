import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    gap: 8,
  },
  text: {
    fontSize: 14,
    fontFamily: "interBold",
  },
  numberContainer: {
    height: 19,
    paddingHorizontal: 8,
    backgroundColor: colors.gray400,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: colors.gray200,
    fontSize: 12,
    fontFamily: "interBold",
  },
});
