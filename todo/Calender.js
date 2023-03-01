import React from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import Margin from "./Margin";
import { getDayColor, getDayText } from "./util";
import { SimpleLineIcons } from "@expo/vector-icons";

import dayjs from "dayjs";
export default ({
  selectedDate,
  todoList,
  OnpressLeftArrow,
  OnpressRightArrow,
  onPressHeaderDate,
  onPressDate,
  columns,
}) => {
  const columnSize = 35;
  const Column = ({
    content,
    color,
    opacity,
    disabled,
    onPress,
    isSelected,
    hasTodo,
  }) => {
    return (
      <TouchableOpacity
        style={{
          width: columnSize,
          height: columnSize,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: isSelected ? "#c2c2c2" : "transparent",
          borderRadius: columnSize / 2,
        }}
        disabled={disabled}
        onPress={onPress}
      >
        <Text
          style={{
            color,
            opacity,
            fontWeight: hasTodo ? "bold" : "normal",
            fontSize: hasTodo ? 16 : 14,
          }}
        >
          {content}
        </Text>
      </TouchableOpacity>
    );
  };
  const ArrowButton = ({ onPress, iconName }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <SimpleLineIcons name={iconName} size={15} color="#404040" />
      </TouchableOpacity>
    );
  };
  const ListHeaderComponent = () => {
    const currentDateText = dayjs(selectedDate).format("YYYY.MM.DD.");
    return (
      <View>
        <Margin height={15} />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ArrowButton iconName="arrow-left" onPress={OnpressLeftArrow} />
          <TouchableOpacity
            style={{ paddingHorizontal: 20, paddingVertical: 12 }}
            onPress={onPressHeaderDate}
          >
            <Text style={{ fontSize: 20, color: "#404040" }}>
              {currentDateText}
            </Text>
          </TouchableOpacity>
          <ArrowButton iconName="arrow-right" onPress={OnpressRightArrow} />
          <Margin height={15} />
        </View>

        <View style={{ flexDirection: "row" }}>
          {[0, 1, 2, 3, 4, 5, 6].map((day) => {
            const dayText = getDayText(day);
            const dayColor = getDayColor(day);
            return (
              <Column
                key={day}
                content={dayText}
                color={dayColor}
                opacity={1}
                disabled={true}
              />
            );
          })}
        </View>
      </View>
    );
  };
  const renderItem = ({ item: date }) => {
    const dateText = dayjs(date).get("date");
    const day = dayjs(date).get("day");
    const isCurrentMonth = dayjs(date).isSame(selectedDate, "month");
    const onPress = () => {
      onPressDate(date);
    };
    const isSelected = dayjs(date).isSame(selectedDate, "date");
    const hasTodo = todoList.find((todo) =>
      dayjs(todo.date).isSame(dayjs(date), "date")
    );
    return (
      <Column
        content={dateText}
        color={getDayColor(day)}
        opacity={isCurrentMonth ? 1 : 0.4}
        onPress={onPress}
        isSelected={isSelected}
        hasTodo={hasTodo}
      />
    );
  };
  return (
    <FlatList
      data={columns}
      scrollEnabled={false}
      keyExtractor={(_, index) => `column-${index}`}
      numColumns="7"
      renderItem={renderItem}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};
