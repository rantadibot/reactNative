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
          fontSize: 15,
          color: "black",
          paddingLeft: 12,
        }}
      >
        {text1}
      </Text>
      <Margin height={12}></Margin>
      <Text style={{ fontSize: 13, color: "grey", paddingLeft: 15 }}>
        {text2}
      </Text>
      <Margin height={24}></Margin>
    </View>
  );
};
