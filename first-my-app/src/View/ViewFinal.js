import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import Division from "../Division";
import Margin from "../Margin";
import ViewHeader from "./ViewHeader";
import { viewList } from "./data_view";
import ViewList from "./ViewList";
import { MyviewList } from "./data_myview";

export default () => {
  const [selectedView, setSelectedView] = useState(0);
  if (selectedView == 0) {
    return (
      <View style={{ flex: 1, paddingHorizontal: 15 }}>
        <ViewHeader
          selectedView={selectedView}
          setSelectedView={setSelectedView}
        />
        <Margin height={10} />
        <Division />
        <Margin height={12} />
        <ScrollView>
          <ViewList data={viewList} />
        </ScrollView>
      </View>
    );
  } else if (selectedView == 1) {
    return (
      <View style={{ flex: 1, paddingHorizontal: 15 }}>
        <ViewHeader
          selectedView={selectedView}
          setSelectedView={setSelectedView}
        />
        <Margin height={10} />
        <Division />
        <Margin height={12} />
        <ScrollView>
          <ViewList data={MyviewList} />
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1, paddingHorizontal: 15 }}>
        <ViewHeader
          selectedView={selectedView}
          setSelectedView={setSelectedView}
        />
        <Margin height={10} />
        <Division />
        <Margin height={12} />
      </View>
    );
  }
};
