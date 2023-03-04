import { Text, View, Image, TouchableOpacity } from "react-native";

export default ({ uri, name }) => {
  const size = 40;
  return (
    <TouchableOpacity
      style={{
        flexDirection: "column",
        paddingVertical: 10,
        paddingLeft: 5,
        justifyContent: "center",
        flex: 1,
      }}
    >
      <Image
        source={uri}
        style={{
          width: size,
          height: size,
          marginLeft: 5,
          alignSelf: "center",
        }}
      />
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 12,
            color: "darkgrey",
            marginLeft: 5,
            alignSelf: "center",
          }}
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
