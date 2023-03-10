import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Division from "./Division";
import UsePeopleNum2 from "./UsePeopleNum2";

export default (props) => {
  const {
    selectedAdult,
    setselectedAdult,
    selectedChildren,
    setselectedChildren,
    selectedInfant,
    setselectedInfant,
    selectedOld,
    setselectedOld,
    fullyDisabled,
    setfullyDisabled,
    partlyDisabled,
    setpartlyDisabled,
    sumNum,
  } = UsePeopleNum2();
  const PlusRanges = sumNum > 8;

  const Plus0 = ({ isPlus, onPress, range }) => {
    return (
      <TouchableOpacity
        style={{
          borderRadius: 30,
          borderWidth: 2,
          borderColor: "grey",
          backgroundColor: range ? "lightgrey" : "white",
          paddingHorizontal: isPlus ? 8 : 10,
        }}
        disabled={range ? true : false}
        onPress={onPress}
      >
        <Text style={{ fontSize: 18, alignItems: "center" }}>
          {isPlus ? "+" : "-"}
        </Text>
      </TouchableOpacity>
    );
  };

  const Rows0 = ({ text1, num }) => {
    const OnPlus0 = () => {
      setselectedAdult(selectedAdult + 1);
    };
    const OnMinus0 = () => {
      setselectedAdult(selectedAdult - 1);
    };
    const MinusRanges = selectedAdult < 1;

    return (
      <View style={styles.rows}>
        <Text style={{ fontSize: 15, marginRight: 70 }}>{text1}</Text>
        <Plus0 isPlus={false} onPress={OnMinus0} range={MinusRanges} />
        <Text style={{ fontSize: 15, marginHorizontal: 15 }}>{num}</Text>
        <Plus0 isPlus={true} onPress={OnPlus0} range={PlusRanges} />
      </View>
    );
  };
  const Rows1 = ({ text1, num }) => {
    const MinusRanges = selectedChildren < 1;
    const OnPlus1 = () => {
      setselectedChildren(selectedChildren + 1);
    };
    const OnMinus1 = () => {
      setselectedChildren(selectedChildren - 1);
    };
    return (
      <View style={styles.rows}>
        <Text style={{ fontSize: 15, marginRight: 75 }}>{text1}</Text>
        <Plus0 isPlus={false} onPress={OnMinus1} range={MinusRanges} />
        <Text style={{ fontSize: 15, marginHorizontal: 15 }}>{num}</Text>
        <Plus0 isPlus={true} onPress={OnPlus1} range={PlusRanges} />
      </View>
    );
  };
  const Rows2 = ({ text1, num }) => {
    const MinusRanges = selectedInfant < 1;
    const OnPlus2 = () => {
      setselectedInfant(selectedInfant + 1);
    };
    const OnMinus2 = () => {
      setselectedInfant(selectedInfant - 1);
    };
    return (
      <View style={styles.rows}>
        <Text style={{ fontSize: 15, marginRight: 80 }}>{text1}</Text>
        <Plus0 isPlus={false} onPress={OnMinus2} range={MinusRanges} />
        <Text style={{ fontSize: 15, marginHorizontal: 15 }}>{num}</Text>
        <Plus0 isPlus={true} onPress={OnPlus2} range={PlusRanges} />
      </View>
    );
  };
  const Rows3 = ({ text1, num }) => {
    const MinusRanges = selectedOld < 1;
    const OnPlus3 = () => {
      setselectedOld(selectedOld + 1);
    };
    const OnMinus3 = () => {
      setselectedOld(selectedOld - 1);
    };
    return (
      <View style={styles.rows}>
        <Text style={{ fontSize: 15, marginRight: 70 }}>{text1}</Text>
        <Plus0 isPlus={false} onPress={OnMinus3} range={MinusRanges} />
        <Text style={{ fontSize: 15, marginHorizontal: 15 }}>{num}</Text>
        <Plus0 isPlus={true} onPress={OnPlus3} range={PlusRanges} />
      </View>
    );
  };

  const Rows4 = ({ text1, num }) => {
    const MinusRanges = fullyDisabled < 1;
    const OnPlus4 = () => {
      setfullyDisabled(fullyDisabled + 1);
    };
    const OnMinus4 = () => {
      setfullyDisabled(fullyDisabled - 1);
    };
    return (
      <View style={styles.rows}>
        <Text style={{ fontSize: 15, marginRight: 120 }}>{text1}</Text>
        <Plus0 isPlus={false} onPress={OnMinus4} range={MinusRanges} />
        <Text style={{ fontSize: 15, marginHorizontal: 15 }}>{num}</Text>
        <Plus0 isPlus={true} onPress={OnPlus4} range={PlusRanges} />
      </View>
    );
  };

  const Rows5 = ({ text1, num }) => {
    const MinusRanges = partlyDisabled < 1;
    const OnPlus5 = () => {
      setpartlyDisabled(partlyDisabled + 1);
    };
    const OnMinus5 = () => {
      setpartlyDisabled(partlyDisabled - 1);
    };
    return (
      <View style={styles.rows}>
        <Text style={{ fontSize: 15, marginRight: 120 }}>{text1}</Text>
        <Plus0 isPlus={false} onPress={OnMinus5} range={MinusRanges} />
        <Text style={{ fontSize: 15, marginHorizontal: 15 }}>{num}</Text>
        <Plus0 isPlus={true} onPress={OnPlus5} range={PlusRanges} />
      </View>
    );
  };
  if (!props.isOpened) return null;
  return (
    <View style={{ backgroundColor: "#F1F1F1" }}>
      <Division />
      <Text style={{ textAlign: "center", color: "grey" }}>
        ?????? 1??? -?????? 9???
      </Text>
      <View style={{ flexDirection: "column" }}>
        <Rows0 text1="??????(??? 13??? ??????)" num={selectedAdult} />
        <Rows1 text1="?????????(??? 6-12???)" num={selectedChildren} />
        <Rows2 text1="??????(??? 6??? ??????)" num={selectedInfant} />
        <Rows3 text1="??????(??? 65??? ??????)" num={selectedOld} />
        <Rows4 text1="?????? ?????????" num={fullyDisabled} />
        <Rows5 text1="?????? ?????????" num={partlyDisabled} />
      </View>
      <Division />
    </View>
  );
};
const styles = StyleSheet.create({
  rows: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 6,
    width: "90%",
    paddingLeft: 10,
    alignItems: "center",
  },
});
