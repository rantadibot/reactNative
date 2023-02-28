import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Book from "./Book";
import Confirm from "./Confirm";
import TabBar from "./src/TabBar";
import Cut from "./Cut";
import Play from "./Play";

export default function App() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  if (selectedIdx == 0) {
    return (
      <View style={styles.container}>
        <Book />
        <TabBar selectedIdx={selectedIdx} setSelectedIdx={setSelectedIdx} />
      </View>
    );
  } else if (selectedIdx == 3) {
    return (
      <View style={styles.container}>
        <Confirm />
        <TabBar selectedIdx={selectedIdx} setSelectedIdx={setSelectedIdx} />
      </View>
    );
  } else if (selectedIdx == 1) {
    return (
      <View style={styles.container}>
        <Cut />
        <TabBar selectedIdx={selectedIdx} setSelectedIdx={setSelectedIdx} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Play />
        <TabBar selectedIdx={selectedIdx} setSelectedIdx={setSelectedIdx} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
