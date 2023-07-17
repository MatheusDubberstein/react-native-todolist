import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { todoItemProp } from "../../screens/Home";

import { styles } from "./styles";
import { colors } from "../../constants/colors";
import { Check, Circle, Trash } from "phosphor-react-native";
type Props = {
  todoItem: todoItemProp;
  onChecked: (todoItem: todoItemProp) => void;
  onDelete: (todoItem: todoItemProp) => void;
};
export const TodoItem = ({ todoItem, onChecked, onDelete }: Props) => {
  return (
    <View style={styles.todoItem} key={todoItem.id}>
      <Pressable
        onPress={() => onChecked({ ...todoItem, checked: !todoItem.checked })}
        style={styles.todoCheckbox}
      >
        {todoItem.checked ? (
          <View style={styles.checkboxChecked}>
            <Check color={colors.gray100} size={16} />
          </View>
        ) : (
          <Circle color={colors.blue} size={24} />
        )}
      </Pressable>
      <Text style={todoItem.checked ? styles.todoTextChecked : styles.todoText}>
        {todoItem.text}
      </Text>
      <TouchableOpacity
        onPress={() => onDelete(todoItem)}
        style={styles.buttonRemove}
      >
        <Trash size={16} color={colors.gray300} />
      </TouchableOpacity>
    </View>
  );
};
