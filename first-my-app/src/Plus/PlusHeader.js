import { View, Text, StyleSheet } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import PlusProfile from "./PlusProfile";
const IconButton = (props) => {
  return (
    <View style={{ paddingHorizontal: 6 }}>
      <Ionicons name={props.name} size={22} color="black" />
    </View>
  );
};

export default () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 8,
          paddingHorizontal: 5,
        }}
      >
        <Text style={styles.title}>더보기</Text>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <IconButton name="search-outline"></IconButton>
          <IconButton name="chatbubbles-outline"></IconButton>
          <IconButton name="ios-settings-outline"></IconButton>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  title: { fontSize: 22, fontWeight: "bold" },
});
