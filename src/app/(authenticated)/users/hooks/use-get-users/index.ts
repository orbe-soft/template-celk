import { createQuery } from "react-query-kit";

import { users } from "@/services/users";
import { keepPreviousData } from "@tanstack/react-query";

import type { IProps } from './types'

export const useGetUsers = (props: IProps) => {
  const { page, limit } = props

  const query = createQuery({
    queryKey: ["get-users"],
    fetcher: users.get,
    placeholderData: keepPreviousData,
  });

  const queryResponse = query({ variables: { page, limit } });

  return {
    ...queryResponse,
    queryKey: query.getKey({ page, limit }),
  };
};
