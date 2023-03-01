import dayjs from "dayjs";
export const Item_width = 220;
export const fillEmpthColumns = (columns, start, end) => {
  const filledColumns = columns.slice(0);
  //첫날 이전 공백채우기
  const startDay = dayjs(start).get("day");
  for (let i = 1; i <= startDay; i += 1) {
    const date = dayjs(start).subtract(i, "day");
    filledColumns.unshift(date);
  }

  //마지막날 이후 공백채우기

  const endDay = dayjs(end).get("day");
  for (let i = 1; i <= 6 - endDay; i += 1) {
    const date = dayjs(end).add(i, "day");
    filledColumns.push(date);
  }
  return filledColumns;
};

export const getCalendarColumns = (now) => {
  //달별 시작일 끝일 확인
  const start = dayjs(now).startOf("month");
  const end = dayjs(now).endOf("month");
  const endDate = dayjs(end).get("date");
  //달 채워넣기
  const columns = [];
  for (let i = 0; i < endDate; i += 1) {
    const date = dayjs(start).add(i, "day");
    columns.push(date);
  }
  const filledColumns = fillEmpthColumns(columns, start, end);
  return filledColumns;
};

const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
export const getDayText = (day) => {
  return dayNames[day];
};

export const getDayColor = (day) => {
  return day === 0 ? "#e67639" : day === 6 ? "#5872d1" : "#2b2b2b";
};
