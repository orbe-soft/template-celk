import type { IProps } from './types'

import { users } from "@/services/users";

import { createQuery } from "react-query-kit";

export const useGetUserById = (props: IProps) => {
  const { userId } = props

  const query = createQuery({
    queryKey: ["get-user-by-id"],
    fetcher: users.getById,
    enabled: !!userId,
  });

  const queryResponse = query({ variables: userId });

  return { ...queryResponse };
};
