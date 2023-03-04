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
        <Profile uri={require("./photo/sky.jpg")} name="항공" />
        <Profile uri={require("./photo/tripout.jpg")} name="해외여행" />
        <Profile uri={require("./photo/tshuttle.jpg")} name="T셔틀" />
        <Profile uri={require("./photo/city.jpg")} name="시티투어" />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Profile uri={require("./photo/busout.jpg")} name="시외버스" />
        <Profile uri={require("./photo/ktx.jpg")} name="기차" />
        <Profile uri={require("./photo/rent.jpg")} name="렌터카" />
        <Profile uri={require("./photo/japan.jpg")} name="일본 특가" />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Profile uri={require("./photo/taxis.jpg")} name="택시예약" />
        <Profile uri={require("./photo/guam.jpg")} name="괌택시투어" />
        <Profile />
        <Profile />
      </View>
    </View>
  );
};
