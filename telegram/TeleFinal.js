import { View, FlatList, ScrollView } from "react-native";
import React, { useState } from "react";
import Division from "./Division";
import Margin from "./Margin";
import TeleHeader from "./TeleHeader";
import TeleSection from "./TeleSection";
import { ChatLists2 } from "./data_tele";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default () => {
  const ItemSeparatorComponent = () => (
    <View>
      <Margin height={6} />
      <Division />
    </View>
  );
  const ListFooterComponent = () => <Margin height={10} />;
  const ListHeaderComponent = () => (
    <View>
      <TeleHeader />
      <Division />
    </View>
  );
  const renderItem = ({ item }) => (
    <View>
      <Margin height={6} />
      <TeleSection
        uri={item.uri}
        name={item.name}
        desc={item.desc}
        day={item.day}
      />
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={ChatLists2}
        // contentContainerStyle={{ paddingHorizontal: 10 }}
        stickyHeaderIndices={[0]}
        keyExtractor={(_, index) => index}
        ItemSeparatorComponent={ItemSeparatorComponent}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponent}
      />
    </View>
  );
};
