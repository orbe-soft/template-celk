import { createMutation } from "react-query-kit";
import { toast } from "react-toastify";

import { users } from "@/services/users";

export const useCreateUser = () => {
  const mutation = createMutation({
    mutationFn: users.create,
    mutationKey: ["create-user"],
    onError: () => {
      return toast.error("Ops! Algo deu errado. Tente novamente.", {
        toastId: "create-user-error",
      });
    },
  });

  return mutation();
};
