import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Margin from "./Margin";
import { Feather } from "@expo/vector-icons";

export default () => {
  const [startStation, setStartStation] = useState("광명");
  const [endStation, setEndStation] = useState("오송");

  const startEnd = () => {
    const temp = endStation;
    setEndStation(startStation);
    setStartStation(temp);
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowStyle}>
        <Text style={styles.arrive}>출발</Text>
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
        <Text style={styles.arrive}>도착</Text>
      </View>
      <Margin height={10} />
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={{ flex: 1 }}>
          <Text style={styles.station}>{startStation}</Text>
        </TouchableOpacity>
        <Feather
          name="arrow-right"
          size={20}
          color="#568BB7"
          style={{ alignItems: "center", marginTop: 5, marginHorizontal: 10 }}
        />
        <TouchableOpacity style={{ flex: 1 }}>
          <Text style={styles.station}>{endStation}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  rowStyle: { flexDirection: "row" },
  station: {
    fontSize: 24,
    color: "#0F384E",
    textAlign: "center",
  },
  arrive: { fontSize: 15, flex: 1, textAlign: "center", color: "grey" },
});
