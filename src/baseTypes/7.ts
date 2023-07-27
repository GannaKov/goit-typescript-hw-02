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

enum DaysOfWeekF {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
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
function isWeekendF(day: DayStatus) {
  console.log(day);
}
console.log(dayStatus);
// isWeekendF(dayStatus[DaysOfWeekF.Sunday]);
