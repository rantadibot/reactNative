import React from "react";
import { useCalculator } from "./useCalculator";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
const COLOR = {
  RESULT: "#4e4c51",
  RESET: "#5f5e62",
  OPERATOR: "#f39c29",
  NUM: "#5c5674",
};
const Button = ({ text, onPress, flex, type, isSelected }) => {
  const backgroundColor =
    type === "reset"
      ? COLOR.RESET
      : type === "operator"
      ? COLOR.OPERATOR
      : type === "num"
      ? COLOR.NUM
      : "transparent";
  return (
    <TouchableOpacity
      style={{
        flex,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        borderWidth: isSelected ? 1 : 0.2,
        borderColor: "black",
      }}
      onPress={onPress}
    >
      <Text style={{ fontSize: 25, color: "white" }}>{text}</Text>
    </TouchableOpacity>
  );
};
export default () => {
  const {
    input,
    currentOperator,
    result,
    tempInput,
    tempOperator,
    hasInput,
    onPressNum,
    onPressOperator,
    onPressReset,
  } = useCalculator();

  return (
    <View style={{ flex: 1, width: 250, justifyContent: "center" }}>
      <View style={styles.result}>
        <Text style={{ color: "white", fontSize: 35, textAlign: "right" }}>
          {input}
        </Text>
      </View>
      <View style={styles.buttons}>
        <Button
          type="reset"
          text={hasInput ? "C" : "AC"}
          onPress={onPressReset}
          flex={3}
        />
        <Button
          type="operator"
          text="/"
          onPress={() => onPressOperator("/")}
          isSelected={currentOperator === "/"}
          flex={1}
        />
      </View>
      <View style={styles.buttons}>
        {[7, 8, 9].map((num) => (
          <Button
            type="num"
            key={`num-${num}`}
            text={`${num}`}
            onPress={() => onPressNum(num)}
            flex={1}
          />
        ))}

        <Button
          type="operator"
          text="*"
          onPress={() => onPressOperator("*")}
          isSelected={currentOperator === "*"}
          flex={1}
        />
      </View>
      <View style={styles.buttons}>
        {[4, 5, 6].map((num) => (
          <Button
            key={`num-${num}`}
            type="num"
            text={`${num}`}
            onPress={() => onPressNum(num)}
            flex={1}
          />
        ))}
        <Button
          type="operator"
          text="-"
          onPress={() => onPressOperator("-")}
          isSelected={currentOperator === "-"}
          flex={1}
        />
      </View>
      <View style={styles.buttons}>
        {[1, 2, 3].map((num) => (
          <Button
            key={`num-${num}`}
            type="num"
            text={`${num}`}
            onPress={() => onPressNum(num)}
            flex={1}
          />
        ))}
        <Button
          type="operator"
          text="+"
          onPress={() => onPressOperator("+")}
          isSelected={currentOperator === "+"}
          flex={1}
        />
      </View>
      <View style={styles.buttons}>
        <Button type="num" text="0" onPress={() => onPressNum(0)} flex={3} />
        <Button
          type="operator"
          text="="
          onPress={() => onPressOperator("=")}
          isSelected={currentOperator === "="}
          flex={1}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    width: "100%",
  },
  result: {
    backgroundColor: COLOR.RESULT,
    minHeight: 50,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
});
