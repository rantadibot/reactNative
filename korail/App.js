import { useState } from "react";
import { Text } from "react-native";
import Confirm from "./src/Confirm";
import Tabbar from "./src/Tabbar";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Oneway from "./src/Oneway";

export default function App() {
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);

  if (selectedTabIdx === 0) {
    return (
      <SafeAreaProvider>
        <Oneway />
        <Tabbar
          selectedTabIdx={selectedTabIdx}
          setSelectedTabIdx={setSelectedTabIdx}
        />
      </SafeAreaProvider>
    );
  } else if (selectedTabIdx === 3) {
    return (
      <SafeAreaProvider>
        <Confirm />
        <Tabbar
          selectedTabIdx={selectedTabIdx}
          setSelectedTabIdx={setSelectedTabIdx}
        />
      </SafeAreaProvider>
    );
  } else {
    return (
      <SafeAreaProvider>
        <Text>아이유</Text>
        <Tabbar
          selectedTabIdx={selectedTabIdx}
          setSelectedTabIdx={setSelectedTabIdx}
        />
      </SafeAreaProvider>
    );
  }
}
