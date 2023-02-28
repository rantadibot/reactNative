import dayjs from "dayjs";

export const fillEmpthColumns = (columns, end) => {
  const filledColumns = columns.slice(0);

  return filledColumns;
};

export const getCalendarDate = (now) => {
  //달별 시작일 끝일 확인
  const end = dayjs(now).endOf("month");
  //달 채워넣기
  const columns = [];
  for (let i = 0; i < 30; i += 1) {
    const date = dayjs(now).add(i, "day");
    columns.push(date.format("YYYY-MM-DD d"));
  }
  const filledColumns = fillEmpthColumns(columns, end);
  return filledColumns;
};

const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
export const getDayText = (day) => {
  return dayNames[day];
};

const dayColors = [
  "#e67639",
  "#2b2b2b",
  "#2b2b2b",
  "#2b2b2b",
  "#2b2b2b",
  "#2b2b2b",
  "#5872d1",
];
export const getDayColor = (day) => {
  return day === 0 ? "#e67639" : day === 6 ? "#5872d1" : "#2b2b2b";
};
