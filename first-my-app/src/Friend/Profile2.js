import { Text, View, Image } from "react-native";
import Margin from "../Margin";

export default ({ uri, name, desc, isMe }) => {
  const size = isMe ? 50 : 40;
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={uri}
        style={{ width: size, height: size, borderRadius: size * 0.4 }}
      ></Image>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          marginLeft: 10,
        }}
      >
        <Text
          style={{
            fontSize: isMe ? 17 : 15,
            fontWeight: isMe ? "bold" : "undefined",
          }}
        >
          {name}
        </Text>
        {!!desc && (
          <View>
            <Margin height={1}></Margin>
            <Text style={{ fontSize: isMe ? 11 : 10, color: "grey" }}>
              {desc}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};
