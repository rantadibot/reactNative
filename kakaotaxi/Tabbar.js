import { TouchableOpacity, View, Text } from "react-native";
import Margin from "./Margin";
import { Octicons, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const TabButton = ({
  isSelected,
  onPress,
  text,
  isIonicons,
  isMaterialCommunityIcons,
  activeIconName,
  inactiveIconName,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 10,
        backgroundColor: "white",
        flexDirection: "column",
        marginHorizontal: 13,
      }}
    >
      {isIonicons && (
        <Ionicons
          name={isSelected ? activeIconName : inactiveIconName}
          size={24}
          color="black"
        />
      )}
      {isMaterialCommunityIcons && (
        <MaterialCommunityIcons
          name={isSelected ? activeIconName : inactiveIconName}
          size={24}
          color="black"
        />
      )}
      <Margin height={3} />
      <Text style={{ color: isSelected ? "black" : "darkgrey", fontSize: 12 }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
export default ({ selectedIdx, setSelectedIdx }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        height: 70,
      }}
    >
      <TabButton
        isSelected={selectedIdx === 0}
        onPress={() => setSelectedIdx(0)}
        isMaterialCommunityIcons={true}
        activeIconName="home"
        inactiveIconName="home-outline"
        text="홈"
      />
      <TabButton
        isSelected={selectedIdx === 1}
        onPress={() => setSelectedIdx(1)}
        isIonicons={true}
        activeIconName="briefcase"
        inactiveIconName="briefcase-outline"
        text="비즈니스"
      />
      <TabButton
        isSelected={selectedIdx === 2}
        onPress={() => setSelectedIdx(2)}
        isIonicons={true}
        activeIconName="md-notifications"
        inactiveIconName="md-notifications-outline"
        text="알림"
      />
      <TabButton
        isSelected={selectedIdx === 3}
        onPress={() => setSelectedIdx(3)}
        isIonicons={true}
        activeIconName="person"
        inactiveIconName="person-outline"
        text="내 정보"
      />
    </View>
  );
};
