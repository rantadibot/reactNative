import { View, StyleSheet } from "react-native";
import Oneway from "./Oneway";

export default ({ selectedIdx, setSelectedIdx, texts0, texts1, texts2 }) => {
  return (
    <View
      style={
        selectedIdx === 0
          ? styles.all
          : selectedIdx === 1
          ? styles.all2
          : styles.all3
      }
    >
      <Oneway
        text={texts0}
        isSelected={selectedIdx === 0}
        onPress={() => setSelectedIdx(0)}
      />
      <Oneway
        text={texts1}
        isSelected={selectedIdx === 1}
        onPress={() => setSelectedIdx(1)}
      />
      <Oneway
        text={texts2}
        isSelected={selectedIdx === 2}
        onPress={() => setSelectedIdx(2)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  all: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#4A59AA",
    width: "100%",
    paddingTop: 30,
    paddingBottom: 25,
    alignItems: "center",
    paddingRight: 15,
  },
  all2: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "#4A59AA",
    backgroundColor: "#6F9BF2",
    // backgroundColor: "#6F9BF2",
    width: "100%",
    paddingTop: 30,
    paddingBottom: 25,
    alignItems: "center",
    paddingRight: 15,
  },
  all3: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#88CFCB",
    width: "100%",
    paddingTop: 30,
    paddingBottom: 25,
    alignItems: "center",
    paddingRight: 15,
  },
});
