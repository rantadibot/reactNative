import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Foundation } from "@expo/vector-icons";
import Oneway from "./Oneway";
const IconButton = () => {
  return (
    <TouchableOpacity
      style={{ paddingHorizontal: 6 }}
      hitSlop={{ top: 15, bottom: 15 }}
    >
      <Foundation name="list" size={24} color="white" />
    </TouchableOpacity>
  );
};

export default ({
  selectedIdx,
  setSelectedIdx,
  texts,
  istext,
  texts1,
  texts2,
}) => {
  return (
    <View>
      <View style={styles.all}>
        <Text style={styles.title}>{texts}</Text>
        <IconButton />
      </View>
      {!!istext && (
        <View style={styles.oneway}>
          <Oneway
            text={texts1}
            isSelected={selectedIdx === 0}
            onPress={() => setSelectedIdx(0)}
          />
          <Oneway
            text={texts2}
            isSelected={selectedIdx === 1}
            onPress={() => setSelectedIdx(1)}
          />
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  all: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#0C3C60",
    width: "100%",
    paddingTop: 30,
    paddingBottom: 15,
    alignItems: "center",
    paddingRight: 15,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    flex: 2,
    marginLeft: 35,
  },
  oneway: {
    flexDirection: "row",
    width: "100%",
    marginTop: 13,
    marginBottom: 8,
    alignItems: "center",
  },
});
