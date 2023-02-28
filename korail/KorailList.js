import { TouchableOpacity, View, Text } from "react-native";
import Margin from "./Margin";
import { RadioButton } from "react-native-paper";
import { useState } from "react";

export default (props) => {
  const [checked0, setChecked0] = useState("포함0");
  const [checked1, setChecked1] = useState("포함1");

  const Radio0 = ({ check, uncheck }) => {
    return (
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            marginRight: 10,
          }}
        >
          <RadioButton
            value={check}
            status={checked0 === check ? "checked" : "unchecked"}
            onPress={() => setChecked0(check)}
            color="blue"
          />
          <Text>포함</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            marginRight: 10,
          }}
        >
          <RadioButton
            value={uncheck}
            status={checked0 === uncheck ? "checked" : "unchecked"}
            color="blue"
            onPress={() => setChecked0(uncheck)}
          />
          <Text>미포함</Text>
        </View>
      </View>
    );
  };
  const Radio1 = ({ check, uncheck }) => {
    return (
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            marginRight: 10,
          }}
        >
          <RadioButton
            value={check}
            status={checked1 === check ? "checked" : "unchecked"}
            onPress={() => setChecked1(check)}
            color="blue"
          />
          <Text>포함</Text>
        </View>
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            marginRight: 10,
          }}
        >
          <RadioButton
            value={uncheck}
            status={checked1 === uncheck ? "checked" : "unchecked"}
            color="blue"
            onPress={() => setChecked1(uncheck)}
          />
          <Text>미포함</Text>
        </View>
      </View>
    );
  };
  if (!props.isOpened) return null;
  return (
    <View style={{ justifyContent: "flex-end", width: "100%" }}>
      <TouchableOpacity>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 13,
              marginTop: 8,
            }}
          >
            <Text style={{ flex: 2 }}>인접역 표출</Text>
            <View style={{ alignItems: "center", flexDirection: "row" }}>
              <Radio0 check="포함0" uncheck="미포함0" />
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ flex: 2 }}>SR연계 표출</Text>
            <View style={{ alignItems: "center", flexDirection: "row" }}>
              <Radio1 check="포함1" uncheck="미포함1" />
            </View>
          </View>
        </View>
        <Margin height={10}></Margin>
      </TouchableOpacity>
    </View>
  );
};
