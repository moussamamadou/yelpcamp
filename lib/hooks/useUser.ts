import { useQuery } from "@apollo/client";
import { CURRENT_USER } from "operations/queries";

export const useUser = () => {
  const { data } = useQuery(CURRENT_USER);
  return data?.authenticatedItem;
};
