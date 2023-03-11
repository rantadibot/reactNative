import {
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import MyDropDownPicker from "./src/MyDropDownPicker";
import TextInputModal from "./src/TextInputModal";
import { useGallery } from "./src/use-gallery";

export default function App() {
  const {
    pickImage,
    deleteImage,
    imageAddButton,
    selectedAlbum,
    modalVisible,
    openModal,
    closeModal,
    albumTitle,
    setAlbumTitle,
    addAlbum,
    resetAlbumTitle,
    isDropdownOpen,
    openDropDown,
    closeDropDown,
    albums,
    selectAlbum,
  } = useGallery();
  const width = Dimensions.get("screen").width;
  const columnSize = width / 3;
  const onPressOpenGallery = () => {
    pickImage();
  };
  const onLongPress = (imageId) => {
    deleteImage(imageId);
  };
  const onPressWatchAd = () => {
    console.log("load ad");
  };
  const onPressAddAlbum = () => {
    if (albums.length >= 2) {
      Alert.alert("광고를 시청해야 앨범을 추가할 수 있습니다", "", [
        {
          style: "cancel",
          text: "닫기",
        },
        {
          text: "광고시청",
          onPress: onPressWatchAd,
        },
      ]);
    }
    openModal();
  };
  const onSubmitEditing = () => {
    if (!albumTitle) return;
    //1.앨범에 타이틀 추가
    addAlbum();
    //2.모달 닫기
    closeModal();
    resetAlbumTitle();
  };
  const onPressBackdrop = () => {
    closeModal();
  };
  const onPressHeader = () => {
    if (isDropdownOpen) {
      closeDropDown();
    } else {
      openDropDown();
    }
  };
  const onPressAlbum = (album) => {
    selectAlbum(album);
    closeDropDown();
  };
  const renderItem = ({ item: { id, uri }, index }) => {
    if (id === -1) {
      return (
        <TouchableOpacity
          style={{
            width: columnSize,
            height: columnSize,
            backgroundColor: "lightyellow",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={onPressOpenGallery}
        >
          <Text style={{ fontSize: 45, fontWeight: "100" }}>+</Text>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity onLongPress={onLongPress}>
        <Image
          source={{ uri }}
          style={{ width: columnSize, height: columnSize, resizeMode: "cover" }}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      {/* <Button title="갤러리 열기" onPress={onPressOpenGallery} /> */}
      <MyDropDownPicker
        isDropdownOpen={isDropdownOpen}
        selectedAlbum={selectedAlbum}
        onPressAddAlbum={onPressAddAlbum}
        onPressHeader={onPressHeader}
        albums={albums}
        onPressAlbum={onPressAlbum}
      />
      <TextInputModal
        albumTitle={albumTitle}
        setAlbumTitle={setAlbumTitle}
        onSubmitEditing={onSubmitEditing}
        modalVisible={modalVisible}
        onPressBackdrop={onPressBackdrop}
      />
      <FlatList
        data={imageAddButton}
        renderItem={renderItem}
        numColumns={3}
        style={{ zIndex: -1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    marginTop: 30,
  },
});
