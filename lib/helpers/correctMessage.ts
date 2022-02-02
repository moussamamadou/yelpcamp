import { ERROR_MESSAGE } from "constant";

export const correctMessage = (message: string) => {
  const found = ERROR_MESSAGE.find((error: any) => error.errorGraphql === message);
  if (found) return found.message;
  return message;
};
