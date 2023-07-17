import { View } from "react-native";
import { StatusText } from "../StatusText";
import { colors } from "../../constants/colors";
import { styles } from "./styles";

type Props = {
  doneNumber?: number;
  createdNumber?: number;
};

export const StatusBar = ({ createdNumber = 0, doneNumber = 0 }: Props) => {
  return (
    <View style={styles.container}>
      <StatusText text="Criadas" number={createdNumber} color={colors.blue} />
      <StatusText text="Concluídas" number={doneNumber} color={colors.purple} />
    </View>
  );
};
