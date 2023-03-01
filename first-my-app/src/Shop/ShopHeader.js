import { View, Text, StyleSheet } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
const IconButton = (props) => {
  return (
    <View style={{ paddingHorizontal: 6 }}>
      <Ionicons name={props.name} size={24} color="black" />
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
        }}
      >
        <Text style={styles.title}>쇼핑</Text>
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
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text style={{ flex: 1, fontSize: 12 }}>선물하기</Text>
        <Text style={{ flex: 1, fontSize: 12 }}>쇼핑하기</Text>
        <Text style={{ flex: 1, fontSize: 12 }}>메이커스</Text>
        <Text style={{ flex: 1, fontSize: 12 }}>프렌즈</Text>
        <Text style={{ flex: 1, fontSize: 12 }}>쇼핑라이브</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  title: { fontSize: 22, fontWeight: "bold" },
});
