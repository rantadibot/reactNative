import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Item_width } from "./util";
export default ({
  value,
  onChangeText,
  placeholder,
  onPressAdd,
  onSubmitEditing,
  onFocus,
}) => {
  return (
    <View
      style={{ flexDirection: "row", width: Item_width, alignItems: "center" }}
    >
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={{ padding: 5, flex: 1, color: "#595959" }}
        onSubmitEditing={onSubmitEditing}
        onFocus={onFocus}
      />

      <TouchableOpacity style={{ padding: 5 }} onPress={onPressAdd}>
        <AntDesign name="plus" size={18} color="#595959" />
      </TouchableOpacity>
    </View>
  );
};
