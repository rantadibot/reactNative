import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import KorailHeader from "./KorailHeader";
import CutProfile from "./CutProfile";
import Content3 from "./Content3";
import Content4 from "./Content4";

export default () => {
  const [selectedWay, setSelectedWay] = useState(0);

  return (
    <View style={styles.container}>
      <KorailHeader
        selectedIdx={selectedWay}
        setSelectedIdx={setSelectedWay}
        texts="할인·정기권"
      />
      <ScrollView>
        <View style={{ flexDirection: "row", marginBottom: 18 }}>
          <CutProfile
            name="청소년 드림"
            desc="만 13~24세 청소년에게 KTX 운임 할인"
            isLong={false}
          />
          <CutProfile
            name="힘내라 청춘"
            desc="만 25~33세 이하 사회초년생·청년에게 KTX 운임 할인"
            isLong={false}
          />
        </View>
        <View style={{ flexDirection: "row", marginBottom: 18 }}>
          <CutProfile
            name="맘편한 KTX"
            desc="임산부에게 KTX 일반실 운임으로 특실을"
            isLong={false}
          />
          <CutProfile
            name="기차누리"
            desc="기초생활수급자 KTX·일반 열차 운임 할인"
            isLong={false}
          />
        </View>
        <View style={{ flexDirection: "row", marginBottom: 18 }}>
          <CutProfile
            name="다자녀 행복"
            desc="자녀 2명 이상 가정에게 KTX 운임 할인"
            isLong={false}
          />
          <CutProfile
            name="4인 동반석"
            desc="테이블이 있는 마주보는 KTX 좌석을 할인받아 편안하게"
            isLong={false}
          />
        </View>
        <View style={{ flexDirection: "row", marginBottom: 18 }}>
          <CutProfile
            name="KTX 5000 특가"
            desc="서울(행신) 광명 구간을 가장 빠르고 저렴하게"
            isLong={false}
          />
        </View>
        <Content3
          text1="정기승차권"
          text2="구간과 기간을 지정하여 1일 2회 이용할 수 있는 할인상품"
        />
        <Content4
          text1="N카드"
          text2="구간과 이용횟수를 선택하여 할인받는 모바일 할인상품"
        />
        {/* <View style={{ flexDirection: "column", marginBottom: 18 }}>
          <CutProfile
            name="기간자 유형 정기권"
            desc="10일 이상 이용, 주중만 또는 휴일 포함 이용 선택"
            isLong={true}
          />
          <CutProfile
            name="일반 정기권"
            desc="10일/ 1개월용, 주중(월~금) 이용, 휴일 제외"
            isLong={true}
          />
          <CutProfile name="KTX" desc="KTX 운행 전체 구간" isLong={true} />
          <CutProfile
            name="ITX-청춘"
            desc="ITX-청춘 운행 구간(용산-춘천)"
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
