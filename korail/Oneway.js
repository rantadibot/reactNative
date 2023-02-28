import { Text, TouchableOpacity } from "react-native";

export default ({ isSelected, onPress, text }) => {
  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={onPress}>
      <Text
        style={{
          textAlign: "center",
          color: isSelected ? "blue" : "grey",
          fontSize: 17,
          borderBottomWidth: isSelected ? 2 : null,
          paddingBottom: 12,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
