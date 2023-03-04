import { Text, View } from "react-native";
import Margin from "./Margin";
import CutProfile from "./CutProfile";
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
      <Text style={{ fontSize: 12, color: "grey", paddingLeft: 15 }}>
        {text2}
      </Text>
      <Margin height={25}></Margin>
      <View style={{ flexDirection: "column", marginBottom: 18 }}>
        <CutProfile name="KTX" desc="KTX 운행 전체 구간" isLong={true} />
        <Margin height={15} />
        <CutProfile
          name="ITX-청춘"
          desc="ITX-청춘 운행 구간(용산-춘천)"
          isLong={true}
        />
      </View>
    </View>
  );
};
