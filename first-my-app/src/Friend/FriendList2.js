import { TouchableOpacity, View } from "react-native";
import Margin from "../Margin";
import Profile2 from "./Profile2";

export default (props) => {
  if (!props.isOpened) return null;
  return (
    <View>
      {props.data.map((item, index) => (
        <TouchableOpacity key={index}>
          <Profile2
            uri={item.uri}
            name={item.name}
            desc={item.desc}
            isMe={false}
          ></Profile2>
          <Margin height={10}></Margin>
        </TouchableOpacity>
      ))}
    </View>
  );
};
