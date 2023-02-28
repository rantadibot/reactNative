import { Text, View } from "react-native";
import Margin from "./Margin";

export default ({ text1, text2 }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        borderTopWidth: 3,
        borderBottomWidth: 3,
        borderColor: "lightgrey",
      }}
    >
      <Margin height={15}></Margin>

      <Text
        style={{
          fontSize: 17,
          color: "black",
        }}
      >
        {text1}
      </Text>
      <Margin height={15}></Margin>
      <Text style={{ fontSize: 13, color: "grey" }}>{text2}</Text>
      <Margin height={30}></Margin>
    </View>
  );
};
