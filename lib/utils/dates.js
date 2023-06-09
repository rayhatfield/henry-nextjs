import { isBefore, isEqual, isAfter } from "date-fns";

export * from "date-fns";

export function isBeforeOrEqual(dateA, dateB) {
  return isBefore(dateA, dateB) || isEqual(dateA, dateB);
}

export function isAfterOrEqual(dateA, dateB) {
  return isAfter(dateA, dateB) || isEqual(dateA, dateB);
}

export function isDateInRange(date, startDateTime, endDateTime) {
  return (
    isBeforeOrEqual(startDateTime, date) && isAfterOrEqual(endDateTime, date)
  );
}
