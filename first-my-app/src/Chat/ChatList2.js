import { TouchableOpacity, View } from "react-native";
import Margin from "../Margin";
import ChatSection2 from "./ChatSection2";

export default (props) => {
  return (
    <View>
      {props.data.map((item, index) => (
        <TouchableOpacity key={index}>
          <ChatSection2
            uri={item.uri}
            num={item.num}
            name={item.name}
            desc={item.desc}
            day={item.day}
            size={50}
          />
          <Margin height={10} />
        </TouchableOpacity>
      ))}
    </View>
  );
};
