import { Text, View, Image, TouchableOpacity } from "react-native";
import Margin from "../Margin";
import React, { useState } from "react";

export default (props) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={{ uri: props.uri }}
        style={{ width: props.size, height: props.size, borderRadius: 20 }}
      />
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          marginLeft: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "65%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              // justifyContent: "space-between",
              flex: 1,
            }}
          >
            <Text style={{ fontSize: 16, marginRight: 6 }}>{props.name}</Text>
            <Text style={{ fontSize: 12, color: "grey" }}>{props.num}</Text>
          </View>
          <Text
            style={{ fontSize: 10, color: "grey", flex: 1, textAlign: "right" }}
          >
            {props.day}
          </Text>
        </View>
        <Margin height={1} />
        <Text style={{ fontSize: 14, color: "grey" }}>{props.desc}</Text>
      </View>
    </View>
  );
};
