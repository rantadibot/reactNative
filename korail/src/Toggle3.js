import { TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import PeopleNum2 from "../PeopleNum2";
import Margin from "../Margin";
import Division from "../Division";

export default ({ isOpened, onPress, include }) => {
  if (include == false) return null;
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <MaterialIcons
          name={isOpened ? "keyboard-arrow-up" : "keyboard-arrow-down"}
          size={24}
          color="#5E90B5"
        />
        <Margin height={5} />
        <Division />
      </TouchableOpacity>
      <PeopleNum2 isOpened={isOpened} />
    </View>
  );
};
