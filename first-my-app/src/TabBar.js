import { TouchableOpacity, View } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const TabButton = ({
  isSelected,
  onPress,
  isIconIonicons,
  isMaterialicons,
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
        backgroundColor: "#F5F5F5",
      }}
    >
      {isIconIonicons && (
        <Ionicons
          name={isSelected ? activeIconName : inactiveIconName}
          size={24}
          color="black"
        />
      )}
      {isMaterialicons && (
        <MaterialCommunityIcons
          name={isSelected ? activeIconName : inactiveIconName}
          size={24}
          color="black"
        />
      )}
    </TouchableOpacity>
  );
};
export default ({ selectedIdx, setSelectedIdx }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        height: 50,
      }}
    >
      <TabButton
        isSelected={selectedIdx === 0}
        onPress={() => setSelectedIdx(0)}
        isIconIonicons
        activeIconName="person"
        inactiveIconName="person-outline"
      />
      <TabButton
        isSelected={selectedIdx === 1}
        onPress={() => setSelectedIdx(1)}
        isIconIonicons
        activeIconName="chatbubble"
        inactiveIconName="chatbubble-outline"
      />
      <TabButton
        isSelected={selectedIdx === 2}
        onPress={() => setSelectedIdx(2)}
        isIconIonicons
        activeIconName="eye"
        inactiveIconName="eye-outline"
      />
      <TabButton
        isSelected={selectedIdx === 3}
        onPress={() => setSelectedIdx(3)}
        isMaterialicons
        activeIconName="shopping"
        inactiveIconName="shopping-outline"
      />
      <TabButton
        isSelected={selectedIdx === 4}
        onPress={() => setSelectedIdx(4)}
        isIconIonicons
        activeIconName="ellipsis-horizontal"
        inactiveIconName="ellipsis-horizontal-outline"
      />
    </View>
  );
};
