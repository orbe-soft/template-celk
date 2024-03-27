import { createMutation } from "react-query-kit";
import { toast } from "react-toastify";

import { users } from "@/services/users";
import { type QueryKey, useQueryClient } from "@tanstack/react-query";
import { type GetUsersResponse } from "@/services/users/types";

type IProps = {
  queryKey: QueryKey;
};

export const useDeleteUser = ({ queryKey }: IProps) => {
  const queryClient = useQueryClient();

  const mutation = createMutation({
    mutationFn: users.delete,
    mutationKey: ["delete-user"],
    onMutate: async (userId) => {
      await queryClient.cancelQueries({ queryKey });

      const previousUsers = queryClient.getQueryData(queryKey);

      queryClient.setQueryData(queryKey, (old?: GetUsersResponse) => {
        if (old) {
          return {
            ...old,
            data: old.data.filter((user) => user.id !== userId),
          };
        }

        return old;
      });

      return { previousUsers };
    },
    onError: (error, _, context) => {
      queryClient.setQueryData(queryKey, context?.previousUsers);

      toast.error("Ops! Algo deu errado. Tente novamente.", {
        toastId: "delete-user-error",
      });
    },
  });

  return mutation();
};
