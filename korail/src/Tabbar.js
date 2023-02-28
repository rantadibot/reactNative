import { TouchableOpacity, View, Text, Image } from "react-native";
import Margin from "../Margin";

const TabButton = ({ isSelected, onPress, uri, text }) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        backgroundColor: "white",
        flexDirection: "column",
        borderTopWidth: isSelected ? 3 : null,
        borderColor: "#005699",
        marginHorizontal: 13,
      }}
    >
      <Image source={uri} style={{ width: 37, height: 35 }} />
      <Margin height={3} />
      <Text style={{ color: isSelected ? "#5E90B5" : "black", fontSize: 12 }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
export default ({ selectedIdx, setSelectedIdx }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        height: 70,
      }}
    >
      <TabButton
        isSelected={selectedIdx === 0}
        onPress={() => setSelectedIdx(0)}
        uri={require("../photo/예매.jpg")}
        text="승차권예매"
      />
      <TabButton
        isSelected={selectedIdx === 1}
        onPress={() => setSelectedIdx(1)}
        uri={require("../photo/할인.jpg")}
        text="할인·정기권"
      />
      <TabButton
        isSelected={selectedIdx === 2}
        onPress={() => setSelectedIdx(2)}
        uri={require("../photo/관광.jpg")}
        text="관광상품"
      />
      <TabButton
        isSelected={selectedIdx === 3}
        onPress={() => setSelectedIdx(3)}
        uri={require("../photo/확인.jpg")}
        text="승차권확인"
      />
    </View>
  );
};
