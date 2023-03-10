import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import KorailList from "../KorailList";
import Margin from "../Margin";
import Division from "../Division";

export default ({ isOpened, onPress, include }) => {
  if (include == false) return null;
  else {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <MaterialIcons
          name={isOpened ? "keyboard-arrow-up" : "keyboard-arrow-down"}
          size={24}
          color="#5E90B5"
        />
        <KorailList isOpened={isOpened} />
        <Margin height={5} />
        <Division />
      </TouchableOpacity>
    );
  }
};
