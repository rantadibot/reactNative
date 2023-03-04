import { View } from "react-native";
import Profile from "./Profile";

export default () => {
  return (
    <View
      style={{
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        backgroundColor: "yellow",
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Profile uri={require("./photo/taxi.jpg")} name="대리" />
        <Profile uri={require("./photo/park.jpg")} name="주차" />
        <Profile uri={require("./photo/wash.jpg")} name="방문세차" />
        <Profile uri={require("./photo/navi.jpg")} name="내비" />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Profile uri={require("./photo/ballet.jpg")} name="발레" />
        <Profile uri={require("./photo/black.jpg")} name="방문정비" />
        <Profile uri={require("./photo/sell.jpg")} name="내차팔기" />
        <Profile uri={require("./photo/free.jpg")} name="무료적립" />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Profile uri={require("./photo/eletric.jpg")} name="전기차충전" />
        <Profile uri={require("./photo/subsidy.jpg")} name="보조금조회" />
        <Profile uri={require("./photo/insur.jpg")} name="내차보험" />
        <Profile />
      </View>
    </View>
  );
};
