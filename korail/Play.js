import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import KorailHeader from "./KorailHeader";
import Content from "./Content";
import Content2 from "./Content2";
import Margin from "./Margin";

export default () => {
  const [selectedWay, setSelectedWay] = useState(0);

  return (
    <View style={styles.container}>
      <KorailHeader
        selectedIdx={selectedWay}
        setSelectedIdx={setSelectedWay}
        texts="관광상품"
      />
      <ScrollView>
        <Margin height={5} />
        <Content text1="추천 이벤트" text2="코레일에서 추천하는 이벤트" />
        <Margin height={5} />
        <Content text1="지역별 여행상품" text2="코레일에서 추천하는 이벤트" />
        <Margin height={5} />
        <Content
          text1="정기관광열차"
          text2="동해 협곡 남도 아리랑 서해금빛열차"
        />
        <Margin height={5} />
        <Content
          text1="임시관광열차"
          text2="국악와인 팔도장터 에코레일 교육열차"
        />
        <Margin height={5} />
        <Content2 text1="자유여행 패스" text2="자유롭게 떠나는 기차여행" />
        {/* <View style={{ flexDirection: "column", marginBottom: 18 }}>
          <CutProfile
            name="내일로 두번째 이야기"
            desc="자유롭게 여행할 수 있는 철도여행패스"
            isLong={true}
          />
          <CutProfile
            name="문화누리레일패스"
            desc="kTX, ITX 새마을, 새마을, 무궁화호, 누리로 열차의 입석, 자유석으로 여행"
            isLong={true}
          />
        </View> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
