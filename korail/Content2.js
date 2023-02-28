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
          name="내일로 두번째 이야기"
          desc="자유롭게 여행할 수 있는 철도여행패스"
          isLong={true}
        />
        <Margin height={15} />
        <CutProfile
          name="문화누리레일패스"
          desc="kTX, ITX 새마을, 새마을, 무궁화호, 누리로 열차의 입석, 자유석으로 여행"
          isLong={true}
        />
      </View>
    </View>
  );
};
