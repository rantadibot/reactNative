import { View } from "react-native";
import Margin from "./Margin";
import Calender2 from "./src/Calender2";

export default (props) => {
  if (!props.isOpened) return null;
  return (
    <View>
      <Calender2 />
      <Margin height={10}></Margin>
    </View>
  );
};
