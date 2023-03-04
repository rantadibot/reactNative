import { StyleSheet, Text, View } from "react-native";
import Tabbar from "./Tabbar";
import { useState } from "react";
import Home from "./Home";
export default function App() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  if (selectedIdx == 0) {
    return (
      <View style={styles.container}>
        <Home />
        <Tabbar selectedIdx={selectedIdx} setSelectedIdx={setSelectedIdx} />
      </View>
    );
  } else if (selectedIdx == 3) {
    return (
      <View style={styles.container}>
        <Tabbar selectedIdx={selectedIdx} setSelectedIdx={setSelectedIdx} />
      </View>
    );
  } else if (selectedIdx == 1) {
    return (
      <View style={styles.container}>
        <Tabbar selectedIdx={selectedIdx} setSelectedIdx={setSelectedIdx} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Tabbar selectedIdx={selectedIdx} setSelectedIdx={setSelectedIdx} />
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
