import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default ({ isOpened, onPress }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      <TouchableOpacity onPress={onPress}>
        <MaterialIcons
          name={isOpened ? "keyboard-arrow-up" : "keyboard-arrow-down"}
          size={24}
          color="#568BB7"
        />
      </TouchableOpacity>
    </View>
  );
};
