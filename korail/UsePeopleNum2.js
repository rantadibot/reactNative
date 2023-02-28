import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useState } from "react";

export default () => {
  const [selectedAdult, setselectedAdult] = useState(1);
  const [selectedChildren, setselectedChildren] = useState(0);
  const [selectedInfant, setselectedInfant] = useState(0);
  const [selectedOld, setselectedOld] = useState(0);
  const [fullyDisabled, setfullyDisabled] = useState(0);
  const [partlyDisabled, setpartlyDisabled] = useState(0);
  let sumNum =
    selectedAdult +
    selectedChildren +
    selectedInfant +
    selectedOld +
    fullyDisabled +
    partlyDisabled;
  return {
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
  };
};
