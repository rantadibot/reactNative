import { TouchableOpacity, View } from "react-native";
import Margin from "../Margin";
import ChatSection from "./ChatSection";

export default (props) => {
  return (
    <View>
      {props.data.map((item, index) => (
        <TouchableOpacity key={index}>
          <ChatSection
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
