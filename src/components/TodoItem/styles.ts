import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingLeft: 12,
    paddingRight: 8,
    borderRadius: 8,
    backgroundColor: colors.gray500,
    width: "100%",
    gap: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: colors.gray400,
  },
  todoCheckbox: {
    width: 24,
    height: 24,
  },
  checkboxChecked: {
    width: 24,
    height: 24,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.purple,
  },
  todoText: {
    flex: 1,
    fontSize: 14,
    fontFamily: "interRegular",
    color: colors.gray100,
  },
  todoTextChecked: {
    flex: 1,
    fontSize: 14,
    fontFamily: "interRegular",
    color: colors.gray300,
    textDecorationLine: "line-through",
  },
  buttonRemove: {
    height: 32,
    width: 32,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
});
