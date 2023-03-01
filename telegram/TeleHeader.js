import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, Foundation } from "@expo/vector-icons";
import Margin from "./Margin";
const IconButton = ({ name, isIon }) => {
  if (isIon) {
    return (
      <TouchableOpacity
        style={{ paddingHorizontal: 6 }}
        hitSlop={{ top: 15, bottom: 15 }}
      >
        <Ionicons name={name} size={21} color="white" />
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        style={{ paddingHorizontal: 6 }}
        hitSlop={{ top: 15, bottom: 15 }}
      >
        <Foundation name={name} size={24} color="white" />
      </TouchableOpacity>
    );
  }
};
export default () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#527DA3",
        width: "100%",
        paddingLeft: 15,
        paddingRight: 10,
        paddingTop: 40,
        paddingBottom: 15,
        alignItems: "center",
      }}
    >
      <IconButton name="list" isIon={false} style={{ flex: 1 }} />
      <Text style={styles.title}>텔레그램</Text>
      <IconButton name="search-outline" isIon={true} style={{ flex: 1 }} />
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    flex: 2,
    marginLeft: 18,
  },
});
