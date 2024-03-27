import { createMutation } from "react-query-kit";
import { toast } from "react-toastify";

import { users } from "@/services/users";

export const useUpdateUser = () => {
  const mutation = createMutation({
    mutationFn: users.update,
    mutationKey: ["update-user"],
    onError: () => {
      return toast.error("Ops! Algo deu errado. Tente novamente.", {
        toastId: "update-user-error",
      });
    },
  });

  return mutation();
};
