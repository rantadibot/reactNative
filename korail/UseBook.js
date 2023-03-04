import React, { useState } from "react";
import Calender2 from "./src/Calender2";

export default () => {
  const [selectedWay, setSelectedWay] = useState(0);
  const [isOpenedDay, setIsOpenedDay] = useState(false);
  const [isOpenedNum, setIsOpenedNum] = useState(false);
  const [isOpenedOp, setIsOpenedOp] = useState(false);
  const [isOpenedGo, setIsOpenedGo] = useState(false);
  const [isOpenedCome, setIsOpenedCome] = useState(false);

  const { selectedDate } = Calender2();
  const onPressArrowDay = () => {
    setIsOpenedDay(!isOpenedDay);
  };
  const onPressArrowNum = () => {
    setIsOpenedNum(!isOpenedNum);
  };
  const onPressArrowOp = () => {
    setIsOpenedOp(!isOpenedOp);
  };
  const onPressArrowGo = () => {
    setIsOpenedGo(!isOpenedGo);
  };
  const onPressArrowCome = () => {
    setIsOpenedCome(!isOpenedCome);
  };

  return {
    selectedWay,
    setSelectedWay,
    selectedDate,
    isOpenedDay,
    setIsOpenedDay,
    isOpenedNum,
    setIsOpenedNum,
    isOpenedOp,
    setIsOpenedOp,
    isOpenedCome,
    isOpenedGo,
    setIsOpenedGo,
    setIsOpenedCome,
    onPressArrowCome,
    onPressArrowDay,
    onPressArrowGo,
    onPressArrowNum,
    onPressArrowOp,
  };
};
