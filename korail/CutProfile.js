import { Text, TouchableOpacity, View } from "react-native";
import Margin from "./Margin";

export default ({ name, desc, isLong }) => {
  return (
    <View
      style={{
        justifyContent: "space-between",
        width: isLong ? "92%" : "42%",
        borderWidth: 1,
        borderColor: "lightgrey",
        marginLeft: 14,
        marginRight: 11,
        paddingTop: 15,
      }}
    >
      <Margin height={9}></Margin>
      <View style={{ paddingHorizontal: 10 }}>
        <Text
          style={{
            fontSize: 16,
            color: "black",
          }}
        >
          {name}
        </Text>
        <Margin height={15}></Margin>
        <Text style={{ fontSize: 11, color: "darkgrey" }}>{desc}</Text>
      </View>
      <Margin height={30}></Margin>
      <TouchableOpacity>
        <Text
          style={{
            fontSize: 15,
            backgroundColor: "#EAF2F5",
            color: "#224966",
            fontWeight: "bold",
            textAlign: "center",
            paddingTop: 15,
            paddingBottom: 10,
          }}
        >
          예약하기
        </Text>
      </TouchableOpacity>
    </View>
  );
};
