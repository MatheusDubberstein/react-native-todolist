import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: colors.gray400,
    paddingVertical: 48,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyIcon: {
    width: 56,
    height: 56,
    marginBottom: 16,
  },
  textStrong: {
    fontFamily: "interBold",
    fontSize: 14,
    color: colors.gray300,
  },
  textNormal: {
    fontFamily: "interRegular",
    fontSize: 14,
    color: colors.gray300,
  },
});
