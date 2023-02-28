import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
const TabBtn = ({ onPress, isSelected, content, imgName }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Image style={{ width: 55, height: 50 }} source={imgName} />
      <Text>{content}</Text>
    </TouchableOpacity>
  );
};

export default ({ selectedTabIdx, setSelectedTabIdx }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        borderTopWidth: 0.5,
        borderColor: "grey",
        marginVertical: 10,
      }}
    >
      <TabBtn
        isSelected={selectedTabIdx === 0}
        onPress={() => setSelectedTabIdx(0)}
        content="승차권 예약"
        imgName={require("../photo/ktx.jpg")}
      />
      <TabBtn
        isSelected={selectedTabIdx === 1}
        onPress={() => setSelectedTabIdx(1)}
        content="할인 정기권"
        imgName={require("../photo/dis.jpg")}
      />
      <TabBtn
        isSelected={selectedTabIdx === 2}
        onPress={() => setSelectedTabIdx(2)}
        content="관광상품"
        imgName={require("../photo/move.jpg")}
      />
      <TabBtn
        isSelected={selectedTabIdx === 3}
        onPress={() => setSelectedTabIdx(3)}
        content="승차권 확인"
        imgName={require("../photo/dis2.jpg")}
      />
    </View>
  );
};
