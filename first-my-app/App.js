import React, { useState } from "react";
import Margin from "./src/Margin";
import Division from "./src/Division";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import TabBar from "./src/TabBar";
import ShopHeader from "./src/Shop/ShopHeader";
import ChatFinal from "./src/Chat/ChatFinal";
import ChatFinal2 from "./src/Chat/ChatFinal2";
import FriendFinal from "./src/Friend/FriendFinal";
import ViewFinal from "./src/View/ViewFinal";
import PlusFinal from "./src/Plus/PlusFinal";
export default function App() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  if (selectedIdx == 0) {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <FriendFinal />
          <TabBar selectedIdx={selectedIdx} setSelectedIdx={setSelectedIdx} />
        </SafeAreaView>
      </SafeAreaProvider>
    );
  } else if (selectedIdx == 1) {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <ChatFinal2 />
          <TabBar selectedIdx={selectedIdx} setSelectedIdx={setSelectedIdx} />
        </SafeAreaView>
      </SafeAreaProvider>
    );
  } else if (selectedIdx == 3) {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <View style={{ flex: 1, paddingHorizontal: 15 }}>
            <ShopHeader />
            <Margin height={10} />
            <Division />
            <Margin height={12} />
          </View>
          <TabBar selectedIdx={selectedIdx} setSelectedIdx={setSelectedIdx} />
        </SafeAreaView>
      </SafeAreaProvider>
    );
  } else if (selectedIdx == 4) {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <View style={{ flex: 1, paddingHorizontal: 15 }}>
            <PlusFinal />
          </View>
          <TabBar selectedIdx={selectedIdx} setSelectedIdx={setSelectedIdx} />
        </SafeAreaView>
      </SafeAreaProvider>
    );
  } else {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <ViewFinal />
          <TabBar selectedIdx={selectedIdx} setSelectedIdx={setSelectedIdx} />
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
