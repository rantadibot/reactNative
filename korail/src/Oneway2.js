import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Division from "./Division";
import Item from "./Item";
import Margin from "./Margin";
import Radius from "./Radius";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import PeopleNum from "./PeopleNum";
export default () => {
  const [firstOpend, setFirstOpend] = useState(false);
  const [firstsOpend, setFirstsOpend] = useState(false);
  const [secondOpend, setSecondOpend] = useState(false);
  const [thirdOpend, setThirdOpend] = useState(false);

  const [startStation, setStartStation] = useState("광명");
  const [endStation, setEndStation] = useState("오송");
  const [selectedOneway, setSelectedOneway] = useState(true);
  const [selectedNum, setselectedNum] = useState(1);
  const total = "총 " + selectedNum + "명";
  dayjs.locale("ko");
  const now = dayjs();

  const startEnd = () => {
    const temp = endStation;
    setEndStation(startStation);
    setStartStation(temp);
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.rowStyle}>
          <TouchableOpacity
            style={{
              borderBottomWidth: selectedOneway ? 1 : null,
              borderColor: "grey",
              flex: 1,
              paddingVertical: 10,
            }}
            onPress={() => setSelectedOneway(true)}
          >
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
                color: selectedOneway ? "#568BB7" : "black",
              }}
            >
              편도
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderBottomWidth: selectedOneway ? null : 1,
              borderColor: "grey",
              flex: 1,
              paddingVertical: 10,
            }}
            onPress={() => {
              setSelectedOneway(false);
            }}
          >
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
                color: selectedOneway ? "black" : "#568BB7",
              }}
            >
              왕복
            </Text>
          </TouchableOpacity>
        </View>
        <Margin height={10} />
        <View style={styles.rowStyle}>
          <Text style={{ fontSize: 15, flex: 1, textAlign: "center" }}>
            출발
          </Text>
          <TouchableOpacity
            style={{
              borderRadius: 20,
              borderColor: "#568BB7",
              borderWidth: 1,
              paddingHorizontal: 16,
            }}
            onPress={startEnd}
          >
            <Feather name="refresh-ccw" size={16} color="#568BB7" />
          </TouchableOpacity>
          <Text style={{ fontSize: 15, flex: 1, textAlign: "center" }}>
            도착
          </Text>
        </View>
        <Margin height={10} />
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 24,
                color: "#0F384E",
                textAlign: "center",
              }}
            >
              {startStation}
            </Text>
          </TouchableOpacity>
          <Feather
            name="arrow-right"
            size={20}
            color="#568BB7"
            style={{ alignItems: "center", marginTop: 5 }}
          />
          <TouchableOpacity style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 24,
                color: "#0F384E",
                textAlign: "center",
              }}
            >
              {endStation}
            </Text>
          </TouchableOpacity>
        </View>
        <Margin height={12} />
        <Radius text="KTX역 선택 지도" />
        <Margin height={12} />
        <Division />
        <Item
          title="출발일"
          content={now.format("YYYY년 MM월 DD일 (ddd) hh:mm")}
          isSelected={firstOpend}
          setisSelected={setFirstOpend}
          include={selectedOneway}
        />
        <Item
          title="가는날"
          content={now.format("YYYY년 MM월 DD일 (ddd) hh:mm")}
          isSelected={firstOpend}
          setisSelected={setFirstOpend}
          include={!selectedOneway}
        />
        <Item
          title="오는날"
          content={now.format("YYYY년 MM월 DD일 (ddd) hh:mm")}
          isSelected={firstsOpend}
          setisSelected={setFirstsOpend}
          include={!selectedOneway}
        />
        <View style={{ display: firstsOpend ? "flex" : "none" }}>
          <Radius text="달력에서 날짜 선택" />
        </View>
        <Division />
        <Item
          title="승객 연령 및 좌석수"
          content={total}
          isSelected={secondOpend}
          setisSelected={setSecondOpend}
        />
        <Division />
        <View style={{ display: secondOpend ? "flex" : "none" }}>
          <PeopleNum />
        </View>
        <Item
          title="상세옵션"
          content="인접역 표출, SR 연계 표출"
          isSelected={thirdOpend}
          setisSelected={setThirdOpend}
          include={selectedOneway}
        />

        <Division />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  rowStyle: { flexDirection: "row", width: "100%" },
});
