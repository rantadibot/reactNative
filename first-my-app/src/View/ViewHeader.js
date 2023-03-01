import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = (props) => {
  return (
    <View style={{ paddingHorizontal: 6 }}>
      <Ionicons name={props.name} size={26} color="black" />
    </View>
  );
};
const Buttons = ({ content, onPress, isSelected }) => {
  return (
    <TouchableOpacity
      style={{ flex: 1, paddingHorizontal: 5 }}
      onPress={onPress}
    >
      <Text
        style={{
          color: isSelected ? "black" : "grey",
          fontWeight: isSelected ? "bold" : "undefined",
          fontSize: 15,
        }}
      >
        {content}
      </Text>
    </TouchableOpacity>
  );
};
export default ({ selectedView, setSelectedView }) => {
  return (
    <View>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
          }}
        >
          <Text style={styles.title}>뷰</Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <IconButton name="search-outline" />
            <IconButton name="ios-settings-outline" />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Buttons
            content="My 뷰"
            onPress={() => setSelectedView(0)}
            isSelected={selectedView === 0}
          />
          <Buttons
            content="발견"
            onPress={() => setSelectedView(1)}
            isSelected={selectedView === 1}
          />
          <Buttons
            content="카카오 TV"
            onPress={() => setSelectedView(2)}
            isSelected={selectedView === 2}
          />
          <Buttons
            content="코로나 19"
            onPress={() => setSelectedView(3)}
            isSelected={selectedView === 3}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  title: { fontSize: 24, fontWeight: "bold" },
});
