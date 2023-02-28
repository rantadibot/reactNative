import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import KorailHeader from "./KorailHeader";
import Profile from "./Profile";
import Margin from "./Margin";

export default () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [selectedWay, setSelectedWay] = useState(0);

  const onPressArrowDay = () => {
    setIsOpenedDay(!isOpenedDay);
  };
  const onPressArrowNum = () => {
    setIsOpenedNum(!isOpenedNum);
  };
  const onPressArrowOp = () => {
    setIsOpenedOp(!isOpenedOp);
  };

  return (
    <View style={styles.container}>
      <KorailHeader
        selectedIdx={selectedWay}
        setSelectedIdx={setSelectedWay}
        texts="승차권 확인"
        texts1="승차권"
        texts2="정기권·패스"
        istext={true}
      />
      <ScrollView style={{ width: "100%", paddingHorizontal: 17 }}>
        <Margin height={7} />
        <Profile name="출발일" desc="2023년 02월 22일 (수) 01:15" />
        <Profile name="승객 연령 및 좌석수" desc="총 1명" />
        <Profile name="상세옵션" desc="인접역 표출, SR 연계 표출" />
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
