import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    marginTop: -127,
  },
  logoImage: {
    width: 110,
    height: 32,
  },
  textInput: {
    flex: 1,
    backgroundColor: colors.gray500,
    borderRadius: 6,
    height: 54,
    padding: 16,
    color: colors.gray100,
    fontSize: 16,
    fontFamily: "interRegular",
    borderWidth: 1,
    borderColor: colors.gray700,
  },
  textInputFoucused: {
    flex: 1,
    backgroundColor: colors.gray500,
    borderRadius: 6,
    height: 54,
    padding: 16,
    color: colors.gray100,
    fontSize: 16,
    fontFamily: "interRegular",
    borderWidth: 1,
    borderColor: colors.purpleDark,
  },
  buttonAdd: {
    height: 52,
    width: 52,
    backgroundColor: colors.blueDark,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonRemove: {
    height: 32,
    width: 32,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    gap: 4,
    marginTop: 40,
  },
  todoContainer: {
    width: "100%",
    marginTop: 21,
  },
});
