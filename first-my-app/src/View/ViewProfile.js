import { Text, View, Image } from "react-native";
import Division from "../Division";
import Margin from "../Margin";
import { Ionicons, EvilIcons } from "@expo/vector-icons";

export default (props) => {
  return (
    <View
      style={{
        borderColor: "lightgray",
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{ uri: props.uri }}
          style={{ width: props.size, height: props.size, borderRadius: 10 }}
        />
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: 10,
          }}
        >
          <Text style={{ fontSize: 14 }}>{props.name}</Text>
          <Margin height={1}></Margin>
          <Text style={{ fontSize: 12, color: "grey" }}>{props.day}</Text>
        </View>
      </View>
      <View>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{props.desc1}</Text>
        <Margin height={1}></Margin>
        <Text style={{ fontSize: 12, color: "grey" }}>{props.desc2}</Text>
      </View>
      <Division />
      <Margin height={10} />
      <Image source={{ uri: props.img }} style={{ width: 400, height: 200 }} />
      <Margin height={12} />
      <View>
        <Text style={{ fontSize: 12 }}>{props.desc3}</Text>
        <Margin height={1}></Margin>
        <Text style={{ fontSize: 10, color: "grey" }}>{props.desc4}</Text>
      </View>
      <Margin height={10} />
      <Division />
      <Margin height={10} />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View
          style={{ flexDirection: "row", flex: 1, justifyContent: "center" }}
        >
          <Ionicons name="md-share-outline" size={17} color="grey" />
          <Text style={{ fontSize: 13, color: "grey", marginHorizontal: 5 }}>
            공유하기
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", flex: 1, justifyContent: "center" }}
        >
          <EvilIcons name="heart" size={17} color="grey" />
          <Text style={{ fontSize: 13, color: "grey", marginHorizontal: 5 }}>
            좋아요
          </Text>
          <Text style={{ fontSize: 13, color: "grey" }}>{props.like}</Text>
        </View>
      </View>
      <Margin height={10} />
    </View>
  );
};
