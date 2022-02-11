export const diffDays = (date: Date, otherDate: Date) =>
  Math.ceil(Math.abs(Number(date) - Number(otherDate)) / (1000 * 60 * 60 * 24));
