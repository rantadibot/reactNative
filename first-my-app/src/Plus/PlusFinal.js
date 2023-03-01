import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import Margin from "../Margin";
import Division from "../Division";
import PlusHeader from "./PlusHeader";
import { PlusLists0, PlusLists1, PlusLists2, PlusLists3 } from "./data_plus";
import PlusList from "./PlusList";
import PlusPay from "./PlusPay";
export default () => {
  return (
    <View style={{ flex: 1 }}>
      <PlusHeader />
      <Margin height={15} />
      <Division />
      <PlusPay />
      <View style={{ flexDirection: "column" }}>
        <PlusList data={PlusLists0} />
        <PlusList data={PlusLists1} />
        <PlusList data={PlusLists2} />
        <PlusList data={PlusLists3} />
      </View>
      <Margin height={12}></Margin>
    </View>
  );
};
