import { Modal, Pressable, TextInput, View } from "react-native";

export default ({
  modalVisible,
  albumTitle,
  setAlbumTitle,
  onSubmitEditing,
  onPressBackdrop,
}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <Pressable onPress={onPressBackdrop} style={{ flex: 1 }}>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            marginBottom: 20,
            width: "100%",
          }}
        >
          <TextInput
            placeholder="앨범명을 입력하세요"
            style={{
              width: "100%",
              padding: 10,
              borderWidth: 0.5,
              borderColor: "lightgrey",
            }}
            value={albumTitle}
            onChangeText={setAlbumTitle}
            onSubmitEditing={onSubmitEditing}
            autoFocus={true}
          />
        </View>
      </Pressable>
    </Modal>
  );
};
