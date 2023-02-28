import { Text, View } from "react-native";
import Margin from "./Margin";

export default ({ name, desc }) => {
  return (
    <View
      style={{
        justifyContent: "center",
      }}
    >
      <Margin height={9}></Margin>

      <Text
        style={{
          fontSize: 14,
          color: "#5E90B5",
          textAlign: "center",
        }}
      >
        {name}
      </Text>
      <Margin height={10}></Margin>
      <Text style={{ fontSize: 18, color: "black", textAlign: "center" }}>
        {desc}
      </Text>
      <Margin height={7}></Margin>
    </View>
  );
};
