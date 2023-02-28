import { Text, View, Image } from "react-native";
import Margin from "./Margin";
import React from "react";

export default (props) => {
  return (
    <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
      <Image
        source={props.uri}
        style={{ width: 50, height: 50, borderRadius: 50 }}
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
            <Text style={{ fontSize: 16, marginRight: 6, fontWeight: "bold" }}>
              {props.name}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 10,
              color: "grey",
              flex: 1,
              textAlign: "right",
              paddingRight: 6,
            }}
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
