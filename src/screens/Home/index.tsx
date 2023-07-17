import {
  Alert,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import { colors } from "../../constants/colors";
import { useState } from "react";
import { PlusCircle } from "phosphor-react-native";
import { StatusBar } from "../../components/StatusBar";
import { TodoItem } from "../../components/TodoItem";
import { EmptyList } from "../../components/EmptyList";
import uuid from "react-native-uuid";

export type todoItemProp = {
  id: string;
  text: string;
  checked: boolean;
};

export const Home = () => {
  const [todoListArray, setTodoListArray] = useState<todoItemProp[]>([]);
  const [focus, setFocus] = useState(false);
  const [todoName, setTodoName] = useState("");

  const handleTodoAdd = () => {
    if (!todoName) {
      return Alert.alert(
        "Algo deu errado",
        "O nome da nova tarefa é obrigatório!"
      );
    }
    setTodoListArray((prevState) => [
      ...prevState,
      { text: todoName, checked: false, id: String(uuid.v4()) },
    ]);
    setTodoName("");
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/logo.png")}
        style={styles.logoImage}
      />
      <View style={styles.form}>
        <TextInput
          style={focus ? styles.textInputFoucused : styles.textInput}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder="Adicione uma nova tarefa"
          onChangeText={setTodoName}
          value={todoName}
          placeholderTextColor={colors.gray300}
        />
        <TouchableOpacity style={styles.buttonAdd} onPress={handleTodoAdd}>
          <PlusCircle size={16} color={colors.gray100} weight="bold" />
        </TouchableOpacity>
      </View>
      <StatusBar
        doneNumber={todoListArray.filter(({ checked }) => checked).length}
        createdNumber={todoListArray.filter(({ checked }) => !checked).length}
      />
      <FlatList
        data={todoListArray}
        style={styles.todoContainer}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem
            todoItem={item}
            onChecked={(todoItem) => {
              setTodoListArray((prevState) =>
                prevState.map((itemPrev) =>
                  itemPrev.id === todoItem.id ? todoItem : itemPrev
                )
              );
            }}
            onDelete={(todoItem) => {
              setTodoListArray((prevState) =>
                prevState.filter((itemPrev) => itemPrev.id !== todoItem.id)
              );
            }}
          />
        )}
        ListEmptyComponent={<EmptyList />}
      />
    </View>
  );
};
