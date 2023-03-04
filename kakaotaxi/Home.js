import { useState } from "react";
import Header from "./Header";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Basic from "./Basic";
import Mycar from "./Mycar";
import Trip from "./Trip";
export default () => {
  const [selectedWay, setSelectedWay] = useState(0);
  if (selectedWay === 0) {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={{ width: "100%" }}>
          <Header
            texts0="홈"
            texts1="마이카"
            texts2="여행"
            selectedIdx={selectedWay}
            setSelectedIdx={setSelectedWay}
          />
          <Basic />
        </SafeAreaView>
      </SafeAreaProvider>
    );
  } else if (selectedWay === 1) {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={{ width: "100%" }}>
          <Header
            texts0="홈"
            texts1="마이카"
            texts2="여행"
            selectedIdx={selectedWay}
            setSelectedIdx={setSelectedWay}
          />
          <Mycar />
        </SafeAreaView>
      </SafeAreaProvider>
    );
  } else {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={{ width: "100%" }}>
          <Header
            texts0="홈"
            texts1="마이카"
            texts2="여행"
            selectedIdx={selectedWay}
            setSelectedIdx={setSelectedWay}
          />
          <Trip />
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
};
