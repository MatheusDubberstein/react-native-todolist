import { Image, Text, View } from "react-native";

import { styles } from "./styles";
export const EmptyList = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/clipboard.png")}
        style={styles.emptyIcon}
      />
      <Text style={styles.textStrong}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.textNormal}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
};
