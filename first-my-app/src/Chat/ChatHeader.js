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
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
      }}
    >
      <Text style={styles.title}>채팅</Text>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <IconButton name="search-outline" />
        <MaterialCommunityIcons
          name="chat-plus-outline"
          size={24}
          color="black"
        />
        <IconButton name="chatbubbles-outline" />
        <IconButton name="ios-settings-outline" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  title: { fontSize: 22, fontWeight: "bold" },
});
