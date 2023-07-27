/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DaysOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}
function isWeekend(day: DaysOfWeek): boolean {
  if (day === 0 || day === 6) {
    return true;
  } else {
    console.log("no");
    return false;
  }
}
isWeekend(DaysOfWeek.Monday);
//----------------------------------------
enum DaysOfWeekF {
  Sunday = "Sunday",
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
}
type DayStatus = Record<DaysOfWeekF, boolean>;
const dayStatus: DayStatus = {
  [DaysOfWeekF.Sunday]: true,
  [DaysOfWeekF.Monday]: false,
  [DaysOfWeekF.Tuesday]: false,
  [DaysOfWeekF.Wednesday]: false,
  [DaysOfWeekF.Thursday]: false,
  [DaysOfWeekF.Friday]: false,
  [DaysOfWeekF.Saturday]: true,
};
function isWeekendF(dayStatus: DayStatus, day: DaysOfWeekF) {
  console.log(dayStatus, day);
  console.log(DaysOfWeekF[day]);
  if (dayStatus[day]) {
    console.log(` Today is ${day}. Weekend`);
  } else {
    console.log(` Today is ${day}. Working day`);
  }
  return dayStatus[day];
}

isWeekendF(dayStatus, DaysOfWeekF.Monday);
