import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Margin from "./Margin";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";

export default () => {
  const [selectedStation, setselectedStation] = useState("광명");
  const OneLine = ({ text }) => {
    return (
      <Text
        style={{
          backgroundColor: "lightgrey",
          fontSize: 14,
          color: "blue",
          paddingVertical: 5,
          marginBottom: 6,
        }}
      >
        {text}
      </Text>
    );
  };
  const Stations = ({ names, isBorder }) => {
    return (
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() => setselectedStation(names)}
      >
        <Text
          style={{
            textAlign: "left",
            fontSize: 17,
            borderRightColor: isBorder ? "lightgrey" : null,
            borderRightWidth: isBorder ? 1 : null,
            borderBottomWidth: 1,
            borderBottomColor: "lightgrey",
            paddingLeft: 10,
            marginVertical: 8,
          }}
        >
          {names}
        </Text>
      </TouchableOpacity>
    );
  };

  const Stations2 = ({ text1, text2 }) => {
    return (
      <View style={{ flexDirection: "row" }}>
        <Stations names={text1} isBorder={true} />
        <Stations names={text2} />
      </View>
    );
  };

  const NearStation = () => {
    return (
      <View style={{ width: "95%", paddingLeft: 10 }}>
        <OneLine text="가까운 역" />
        <Stations2 text1="광명" text2="오송" />
        <OneLine text="최근검색구간" />
        <OneLine text="주요역" />
        <Stations2 text1="서울" text2="용산" />
        <Stations2 text1="광명" text2="영등포" />
        <Stations2 text1="수원" text2="평택" />
        <Stations2 text1="천안아산" text2="천안" />
        <Stations2 text1="오송" text2="조치원" />
        <Stations2 text1="동대구" text2="대구" />
        <View>
          <Text style={{ textAlign: "center" }}>{selectedStation}</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView styles={styles.container}>
      <Margin height={30} />
      <NearStation />
      <Margin height={30} />
    </SafeAreaView>
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
