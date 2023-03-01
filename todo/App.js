import dayjs from "dayjs";
import { useRef } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Keyboard,
  Alert,
} from "react-native";
import { getCalendarColumns, Item_width } from "./util";
import { useCalendar } from "./use-calender";
import { useTodoList } from "./use-todo-list";
import { Ionicons } from "@expo/vector-icons";
import Calender from "./Calender";
import Margin from "./Margin";
import AddTodoInput from "./AddTodoInput";
export default function App() {
  const now = dayjs();
  const {
    selectedDate,
    setSelectedDate,
    isDatePickerVisible,
    showDatePicker,
    hideDatePicker,
    handleConfirm,
    subtractMonth,
    addMonth,
  } = useCalendar(now);
  const {
    filteredTodoList,
    todoList,
    input,
    setInput,
    addTodo,
    removeTodo,
    toggleTodo,
    resetInput,
  } = useTodoList(selectedDate);
  const columns = getCalendarColumns(selectedDate);
  const flatListRef = useRef(null);
  const onPressHeaderDate = showDatePicker;
  const onPressDate = setSelectedDate;
  const OnpressLeftArrow = subtractMonth;
  const OnpressRightArrow = addMonth;
  const ListHeaderComponent = () => {
    return (
      <View>
        <Calender
          todoList={todoList}
          selectedDate={selectedDate}
          OnpressLeftArrow={OnpressLeftArrow}
          OnpressRightArrow={OnpressRightArrow}
          onPressDate={onPressDate}
          onPressHeaderDate={onPressHeaderDate}
          columns={columns}
        />
        <Margin height={15} />

        <View
          style={{
            width: 4,
            height: 4,
            borderRadius: 4 / 2,
            backgroundColor: "#a3a3a3",
            alignSelf: "center",
          }}
        />
        <Margin height={15} />
      </View>
    );
  };
  const renderItem = ({ item: todo }) => {
    const isSucess = todo.isSucess;
    const onPress = () => toggleTodo(todo.id);
    const onLongPress = () => {
      Alert.alert("삭제하시겠어요?", "", [
        { style: "cancel", text: "아니요" },
        {
          text: "네",
          onPress: () => removeTodo(todo.id),
        },
      ]);
    };
    return (
      <Pressable
        style={{
          width: Item_width,
          alignSelf: "center",
          paddingVertical: 10,
          paddingHorizontal: 5,
          borderBottomWidth: 0.5,
          borderColor: "#a6a6a6",
          flexDirection: "row",
        }}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        <Text style={{ flex: 1, fontSize: 14, color: "#595959" }}>
          {todo.content}
        </Text>
        <Ionicons
          name="ios-checkmark"
          size={17}
          color={isSucess ? "#595959" : "#bfbfbf"}
        />
      </Pressable>
    );
  };
  const scrollToEnd = () => {
    setTimeout(() => {
      flatListRef.current?.scrollToEnd();
    }, 200);
  };
  const onPressAdd = () => {
    addTodo();
    resetInput();
    scrollToEnd();
  };
  const onSubmitEditing = () => {
    addTodo();
    resetInput();
    scrollToEnd();
  };
  const onFocus = () => {
    scrollToEnd();
  };
  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <Image
        source={{
          uri: "https://img.freepik.com/free-photo/white-crumpled-paper-texture-for-background_1373-159.jpg?w=1060&t=st=1667524235~exp=1667524835~hmac=8a3d988d6c33a32017e280768e1aa4037b1ec8078c98fe21f0ea2ef361aebf2c",
        }}
        style={{ width: "100%", height: "100%", position: "absolute" }}
      />

      <FlatList
        ref={flatListRef}
        data={filteredTodoList}
        ListHeaderComponent={ListHeaderComponent}
        renderItem={renderItem}
      />
      <AddTodoInput
        value={input}
        onChangeText={setInput}
        placeholder={`${dayjs(selectedDate).format("MM.DD")}에 추가할 Todo`}
        onPressAdd={onPressAdd}
        onSubmitEditing={onSubmitEditing}
        onFocus={onFocus}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
});
