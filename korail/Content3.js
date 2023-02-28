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
          fontSize: 17,
          color: "black",
        }}
      >
        {text1}
      </Text>
      <Margin height={15}></Margin>
      <Text style={{ fontSize: 13, color: "grey" }}>{text2}</Text>
      <Margin height={30}></Margin>
      <View style={{ flexDirection: "column", marginBottom: 18 }}>
        <CutProfile
          name="기간자 유형 정기권"
          desc="10일 이상 이용, 주중만 또는 휴일 포함 이용 선택"
          isLong={true}
        />
        <Margin height={15} />
        <CutProfile
          name="일반 정기권"
          desc="10일/ 1개월용, 주중(월~금) 이용, 휴일 제외"
          isLong={true}
        />
      </View>
    </View>
  );
};
