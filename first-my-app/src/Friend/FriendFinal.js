import { View, ScrollView } from "react-native";
import React, { useState } from "react";
import Header from "./Header";
import Profile2 from "./Profile2";
import Margin from "../Margin";
import Division from "../Division";
import FriendSection from "./FriendSection";
import { friendProfile2, myProfile2 } from "./data2";
import FriendList2 from "./FriendList2";
import FriendList from "./FriendList";
import { channelList } from "./data_ch";
import { Newfriend } from "./data_new";

export default () => {
  const [isOpened, setIsOpened] = useState(true);
  const [isOpenedCh, setIsOpenedCh] = useState(true);
  const [isOpenedNew, setIsOpenedNew] = useState(false);
  const onPressArrow = () => {
    setIsOpened(!isOpened);
  };
  const onPressArrowCh = () => {
    setIsOpenedCh(!isOpenedCh);
  };
  const onPressArrowNew = () => {
    setIsOpenedNew(!isOpenedNew);
  };
  return (
    <View style={{ flex: 1, paddingHorizontal: 15 }}>
      <Header></Header>
      <Margin height={10}></Margin>
      <Profile2
        name={myProfile2.name}
        uri={myProfile2.uri}
        isMe={true}
        desc={myProfile2.desc}
      ></Profile2>
      <Margin height={15}></Margin>
      <Division></Division>
      <Margin height={12}></Margin>
      <ScrollView>
        <FriendSection
          onPressArrow={onPressArrowNew}
          isOpened={isOpenedNew}
          content="새로운 친구"
        ></FriendSection>
        <FriendList data={Newfriend} isOpened={isOpenedNew}></FriendList>
        <FriendSection
          friendProfileLen={friendProfile2.length}
          onPressArrow={onPressArrow}
          isOpened={isOpened}
          content="친구"
        ></FriendSection>
        <FriendList2 data={friendProfile2} isOpened={isOpened}></FriendList2>

        <FriendSection
          friendProfileLen={channelList.length}
          onPressArrow={onPressArrowCh}
          isOpened={isOpenedCh}
          content="채널"
        ></FriendSection>
        <FriendList data={channelList} isOpened={isOpenedCh}></FriendList>
      </ScrollView>
    </View>
  );
};
