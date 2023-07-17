import { Text, View } from "react-native";
import { styles } from "./styles";
import { colors } from "../../constants/colors";

type Props = {
  text: string;
  number: number;
  color?: string;
};
export const StatusText = ({ number, text, color = colors.gray100 }: Props) => {
  return (
    <View style={styles.textContainer}>
      <Text style={{ ...styles.text, color }}>{text}</Text>
      <View style={styles.numberContainer}>
        <Text style={styles.numberText}>{number}</Text>
      </View>
    </View>
  );
};
