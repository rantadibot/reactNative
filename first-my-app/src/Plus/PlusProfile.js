import { Text, View, Image } from "react-native";
import Margin from "../Margin";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";
const IconButton2 = (props) => {
  if (props.select == 0) {
    return (
      <View style={{ paddingHorizontal: 6, alignItems: "center" }}>
        <Ionicons name={props.icon} size={24} color="darkgrey" />
      </View>
    );
  }
  if (props.select == 1) {
    return (
      <View style={{ paddingHorizontal: 6, alignItems: "center" }}>
        <FontAwesome name={props.icon} size={24} color="darkgrey" />
      </View>
    );
  } else {
    return (
      <View style={{ paddingHorizontal: 6, alignItems: "center" }}>
        <MaterialIcons name={props.icon} size={24} color="darkgrey" />
      </View>
    );
  }
};

export default (props) => {
  return (
    <View>
      <IconButton2 select={props.select} icon={props.icon} />
      <Margin height={5}></Margin>
      <Text style={{ fontsize: 8, color: "grey", textAlign: "center" }}>
        {props.name}
      </Text>
    </View>
  );
};
