import { ScrollView, View } from "react-native";
import Margin from "../Margin";
import PlusProfile from "./PlusProfile";

export default (props) => {
  return (
    <View style={{ flexDirection: "row" }}>
      {props.data.map((item, index) => (
        <View key={index} style={{ flex: 1 }}>
          <PlusProfile select={item.select} icon={item.icon} name={item.name} />
          <Margin height={15}></Margin>
        </View>
      ))}
    </View>
  );
};
