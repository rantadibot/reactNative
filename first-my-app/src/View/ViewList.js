import { ScrollView, View } from "react-native";
import Margin from "../Margin";
import ViewProfile from "./ViewProfile";

export default (props) => {
  return (
    <View>
      {props.data.map((item, index) => (
        <View key={index}>
          <ViewProfile
            uri={item.uri}
            name={item.name}
            desc1={item.desc1}
            desc2={item.desc2}
            desc3={item.desc3}
            desc4={item.desc4}
            day={item.day}
            size={30}
            like={item.like}
            img={item.img}
          />
          <Margin height={10} />
        </View>
      ))}
    </View>
  );
};
