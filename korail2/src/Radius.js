import { TouchableOpacity, Text } from "react-native";
export default ({ text }) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "lightgrey",
        width: "80%",
        paddingVertical: 5,
      }}
    >
      <Text style={{ fontSize: 16, textAlign: "center" }}>{text}</Text>
    </TouchableOpacity>
  );
};
