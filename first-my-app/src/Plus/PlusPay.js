import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Margin from "../Margin";
const IconButton = (props) => {
  return (
    <View style={{ paddingHorizontal: 6 }}>
      <Ionicons name={props.name} size={24} color="black" />
    </View>
  );
};

export default () => {
  return (
    <View style={{ backgroundColor: "#f9e000", paddingHorizontal: 10 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 8,
        }}
      >
        <Text style={styles.title}>지갑</Text>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <IconButton name="ios-settings-outline"></IconButton>
          <Text>인증서</Text>
        </View>
      </View>
      <Margin height={10}></Margin>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 8,
        }}
      >
        <Text style={styles.won}>Pay</Text>
        <Text style={styles.won2}>17,415원</Text>
      </View>
      <Margin height={10}></Margin>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ marginRight: 10 }}>송금</Text>
          <Text style={{ marginRight: 10 }}>결제</Text>
          <Text>자산</Text>
        </View>
        <Text>구매 내역</Text>
      </View>
      <Margin height={12}></Margin>
    </View>
  );
};
const styles = StyleSheet.create({
  title: { fontSize: 22, fontWeight: "bold" },
  won: { fontSize: 12, fontWeight: "bold" },
  won2: { fontSize: 16, fontWeight: "bold" },
});
