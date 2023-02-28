import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Margin from "./Margin";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default () => {
  const [selectedOneway, setSelectedOneway] = useState(true);

  dayjs.locale("ko");
  const now = dayjs();

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
              승차권
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
              정기권 패스
            </Text>
          </TouchableOpacity>
        </View>
        <Margin height={10} />
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
