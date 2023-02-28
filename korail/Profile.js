import { Text, View } from "react-native";
import Margin from "./Margin";

export default ({ name, desc, include, isSelected }) => {
  if (include == false) return null;
  else {
    return (
      <View
        style={{
          justifyContent: "center",
          backgroundColor: isSelected ? "#E0E7ED" : "white",
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
  }
};
