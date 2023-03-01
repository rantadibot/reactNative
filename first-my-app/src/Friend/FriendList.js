import { TouchableOpacity, View } from "react-native";
import Margin from "../Margin";
import Profile from "./Profile";

export default (props) => {
  if (!props.isOpened) return null;
  return (
    <View>
      {props.data.map((item, index) => (
        <TouchableOpacity key={index}>
          <Profile
            uri={item.uri}
            name={item.name}
            desc={item.desc}
            isMe={false}
          ></Profile>
          <Margin height={10}></Margin>
        </TouchableOpacity>
      ))}
    </View>
  );
};
