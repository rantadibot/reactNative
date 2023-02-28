import { ScrollView, StyleSheet, View } from "react-native";
import KorailHeader from "./KorailHeader";
import Profile from "./Profile";
import Toggle from "./src/Toggle";
import Toggle2 from "./src/Toggle2";
import Toggle3 from "./src/Toggle3";
import Margin from "./Margin";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import Startend from "./Startend";
import UseBook from "./UseBook";
import UsePeopleNum2 from "./UsePeopleNum2";
dayjs.locale("ko");

export default () => {
  const {
    selectedWay,
    setSelectedWay,
    selectedDate,
    isOpenedDay,
    isOpenedNum,
    isOpenedOp,
    isOpenedCome,
    isOpenedGo,
    onPressArrowCome,
    onPressArrowDay,
    onPressArrowGo,
    onPressArrowNum,
    onPressArrowOp,
  } = UseBook();
  const { sumNum } = UsePeopleNum2();
  {
    return (
      <View style={styles.container}>
        <KorailHeader
          selectedIdx={selectedWay}
          setSelectedIdx={setSelectedWay}
          texts="승차권 예매"
          texts1="편도"
          texts2="왕복"
          istext={true}
        />
        <ScrollView style={{ width: "100%", paddingHorizontal: 17 }}>
          <Margin height={5} />
          <Startend />
          <Margin height={7} />
          <Profile
            name="출발일"
            desc={dayjs(selectedDate).format("YYYY년 MM월 DD일 (ddd) hh:mm")}
            include={!selectedWay}
            isSelected={isOpenedDay}
          />
          <Toggle2
            isOpened={isOpenedDay}
            onPress={onPressArrowDay}
            include={!selectedWay}
            desc="출발일"
          />

          <Profile
            name="가는날"
            desc={dayjs(selectedDate).format("YYYY년 MM월 DD일 (ddd) hh:mm")}
            include={selectedWay}
            isSelected={isOpenedGo}
          />
          <Toggle2
            isOpened={isOpenedGo}
            onPress={onPressArrowGo}
            include={selectedWay}
          />
          <Profile
            name="오는날"
            desc={dayjs(selectedDate).format("YYYY년 MM월 DD일 (ddd) hh:mm")}
            include={selectedWay}
            isSelected={isOpenedCome}
          />
          <Toggle2
            isOpened={isOpenedCome}
            onPress={onPressArrowCome}
            include={selectedWay}
          />
          <Profile
            name="승객 연령 및 좌석수"
            desc="총 1명"
            isSelected={isOpenedNum}
          />
          <Toggle3 isOpened={isOpenedNum} onPress={onPressArrowNum} />
          <Profile
            name="상세옵션"
            desc="인접역 표출, SR 연계 표출"
            include={!selectedWay}
            isSelected={isOpenedOp}
          />
          <Toggle
            isOpened={isOpenedOp}
            onPress={onPressArrowOp}
            include={!selectedWay}
          />
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
