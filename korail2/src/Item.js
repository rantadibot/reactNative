import { Text, View } from "react-native";
import Margin from "./Margin";
import Toggle from "./Toggle";
export default ({ title, content, isSelected, setisSelected, include }) => {
  if (include == false) return null;
  else {
    return (
      <View
        style={{
          flexDirection: "column",
          backgroundColor: isSelected ? "#E0E7ED" : "white",
          width: "100%",
        }}
      >
        <Margin height={10} />
        <Text style={{ color: "#568BB7", fontSize: 14, textAlign: "center" }}>
          {title}
        </Text>
        <Margin height={10} />
        <Text style={{ color: "black", fontSize: 19, textAlign: "center" }}>
          {content}
        </Text>
        <Margin height={10} />
        <Toggle
          isOpened={isSelected}
          onPress={() => setisSelected(!isSelected)}
        />
      </View>
    );
  }
};
