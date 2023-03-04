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
        <Profile uri={require("./photo/taxi.jpg")} name="택시" />
        <Profile uri={require("./photo/black.jpg")} name="블랙" />
        <Profile uri={require("./photo/bike.jpg")} name="바이크" />
        <Profile uri={require("./photo/sub.jpg")} name="대리" />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Profile uri={require("./photo/quick.jpg")} name="퀵/택배" />
        <Profile uri={require("./photo/rent.jpg")} name="렌터카" />
        <Profile uri={require("./photo/sky.jpg")} name="항공" />
        <Profile uri={require("./photo/park.jpg")} name="마이카" />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Profile uri={require("./photo/busout.jpg")} name="시외버스" />
        <Profile uri={require("./photo/ktx.jpg")} name="기차" />
        <Profile uri={require("./photo/busborrow.jpg")} name="버스대절" />
        <Profile uri={require("./photo/free.jpg")} name="무료적립" />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Profile uri={require("./photo/taxi.jpg")} name="펫" />
        <Profile uri={require("./photo/park.jpg")} name="주차" />
        <Profile uri={require("./photo/eletric.jpg")} name="전기차충전" />
        <Profile />
      </View>
    </View>
  );
};
