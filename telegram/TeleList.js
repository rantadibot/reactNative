import { TouchableOpacity, View } from "react-native";
import Division from "./Division";
import Margin from "./Margin";
import TeleSection from "./TeleSection";

export default (props) => {
  return (
    <View>
      {props.data.map((item, index) => (
        <TouchableOpacity key={index}>
          <TeleSection
            uri={item.uri}
            name={item.name}
            desc={item.desc}
            day={item.day}
          ></TeleSection>
          <Division />
        </TouchableOpacity>
      ))}
    </View>
  );
};
