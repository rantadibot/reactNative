import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import Division from "../Division";
import Margin from "../Margin";
import ChatHeader from "./ChatHeader";
import ChatList from "./ChatList";
import { ChatLists } from "./data_chat";

export default () => {
  const [isOpenedNew, setIsOpenedNew] = useState(false);
  return (
    <View style={{ flex: 1, paddingHorizontal: 15 }}>
      <ChatHeader />
      <Margin height={10} />
      <Division />
      <Margin height={12} />
      <ScrollView>
        <ChatList data={ChatLists} isOpened={isOpenedNew} />
      </ScrollView>
    </View>
  );
};
