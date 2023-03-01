import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
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
      <Text style={styles.title}>친구</Text>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <IconButton name="search-outline"></IconButton>
        <IconButton name="person-add-outline"></IconButton>
        <IconButton name="md-musical-notes-outline"></IconButton>
        <IconButton name="ios-settings-outline"></IconButton>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  title: { fontSize: 22, fontWeight: "Bold" },
});
