import { Text, TouchableOpacity } from "react-native";

export default ({ isSelected, text, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          textAlign: "center",
          color: isSelected ? "white" : "lightblue",
          fontSize: 17,
          paddingBottom: 12,
          borderBottomWidth: isSelected ? 2 : null,
          borderBottomColor: "white",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
