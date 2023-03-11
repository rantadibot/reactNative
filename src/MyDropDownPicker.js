import { View, Text, TouchableOpacity } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
const headerHeight = 50;
export default ({
  isDropdownOpen,
  selectedAlbum,
  onPressAddAlbum,
  onPressHeader,
  albums,
  onPressAlbum,
}) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={1}
        style={{
          height: headerHeight,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
        onPress={onPressHeader}
      >
        <Text style={{ fontWeight: "bold" }}>{selectedAlbum.title}</Text>
        <SimpleLineIcons
          name={isDropdownOpen ? "arrow-down" : "arrow-up"}
          size={12}
          color="black"
          style={{ marginLeft: 8 }}
        />
        <TouchableOpacity
          onPress={onPressAddAlbum}
          style={{
            position: "absolute",
            height: headerHeight,
            right: 0,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 10,
            backgroundColor: "brown",
          }}
        >
          <Text style={{ fontSize: 12 }}>앨범 추가</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      {isDropdownOpen && (
        <View
          style={{
            width: "100%",
            position: "absolute",
            top: headerHeight,
            borderBottomWidth: 1,
            borderBottomColor: "lightgrey",
            borderTopWidth: 1,
            borderTopColor: "lightgrey",
          }}
        >
          {albums.map((album, index) => {
            const isSelectedAlbum = album.id === selectedAlbum.id;
            return (
              <TouchableOpacity
                key={`album-${index}`}
                style={{
                  paddingVertical: 12,
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#FFFFFF",
                }}
                onPress={() => onPressAlbum(album)}
              >
                <Text
                  style={{ fontWeight: isSelectedAlbum ? "bold" : "normal" }}
                >
                  {album.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};
