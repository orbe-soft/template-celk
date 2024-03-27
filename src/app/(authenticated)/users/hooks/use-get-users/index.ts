import { createQuery } from "react-query-kit";

import type { GetUsersParams } from "@/services/users/types";
import { users } from "@/services/users";
import { keepPreviousData } from "@tanstack/react-query";

export const useGetUsers = (params: GetUsersParams) => {
  const query = createQuery({
    queryKey: ["get-users"],
    fetcher: users.get,
    placeholderData: keepPreviousData,
  });

  const queryResponse = query({ variables: params });

  return {
    ...queryResponse,
    queryKey: query.getKey(params),
  };
};
