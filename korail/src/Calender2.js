import dayjs from "dayjs";
import { useState } from "react";
import { getCalendarDate, getDayText, getDayColor } from "./util2";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const columnSize = 45;
const Column = ({ content, color, isSelected, onPress, disabled }) => {
  return (
    <TouchableOpacity
      style={{
        width: columnSize,
        height: columnSize,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isSelected ? "yellow" : "transparent",
      }}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={{ color }}>{content}</Text>
      <Text
        style={{
          color: "blue",
          fontSize: 10,
          display: isSelected ? "flex" : "none",
        }}
      >
        출발일
      </Text>
    </TouchableOpacity>
  );
};
export default () => {
  const now = dayjs();
  const [selectedDate, setSelectedDate] = useState(now);
  const columns = getCalendarDate(selectedDate);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(dayjs(date));
    hideDatePicker();
  };

  const renderItem2 = ({ item: date }) => {
    const day = dayjs(date).get("day");
    const dateText = dayjs(date).get("date");
    const onPress = () => {
      setSelectedDate(date);
    };
    const isSelected = dayjs(date).isSame(selectedDate, "date");
    return (
      <View>
        <Column
          content={getDayText(day)}
          color={getDayColor(day)}
          disabled={true}
        />
        <Column
          content={dateText}
          color={getDayColor(day)}
          onPress={onPress}
          isSelected={isSelected}
        />
      </View>
    );
  };

  return (
    <View>
      <View
        style={{
          borderColor: "lightgrey",
          borderRadius: 20,
          borderWidth: 1,
          paddingVertical: 5,
          marginVertical: 3,
        }}
      >
        <TouchableOpacity onPress={showDatePicker}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
            }}
          >
            달력에서 날짜 선택
          </Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
      <FlatList
        horizontal={true}
        data={columns}
        numColumns="1"
        renderItem={renderItem2}
      />

      {/* <ScrollView style={{ flexDirection: "row" }} horizontal={true}>
        {num.map((day) => {
          const dayColor = getDayColor(day);
          const days = getDayText(day);

          return (
            <View>
              <Column
                key={day}
                content={days}
                color={dayColor}
                disabled={true}
              />
              <Column
                key={`day-${day}`}
                content={columns[day]}
                color={dayColor}
              />
            </View>
          );
        })}
      </ScrollView>
      <ScrollView
        style={{ flexDirection: "row", backgroundColor: "lightgrey" }}
        horizontal={true}
      >
        {num2.map((day) => {
          return (
            <TouchableOpacity>
              <Column key={day} content={day} color={"black"} />
            </TouchableOpacity>
          );
        })}
      </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
});
