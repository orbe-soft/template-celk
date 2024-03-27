"use client";

import { Button } from "@/components/button";
import { useParams, useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import { type IParams } from "./page";
import { normalizeSlug } from "@/utils/normalize-slug";
import { FormControl } from "../../components/form-control";
import { Input } from "../../components/input";
import { useCreateUser } from "../hooks/use-create-user";
import { useUpdateUser } from "../hooks/use-update-user";
import { useGetUserById } from "../hooks/use-get-user-by-id";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const userSchema = z.object({
  firstName: z.string().min(1, "Enter the user's first name"),
  lastName: z.string().min(1, "Enter the user's last name"),
  email: z.string().min(1, "Enter the user's email").email(),
});

type IUserForm = z.infer<typeof userSchema>;

export function Form() {
  const router = useRouter();

  const { slug } = useParams<IParams>();
  const { isEditing, id: userId } = normalizeSlug(slug);
  const title = isEditing ? "Edit user" : "New user";

  const { mutate: handleCreateUser } = useCreateUser();
  const { mutate: handleUpdateUser } = useUpdateUser();
  const { data: user } = useGetUserById({ userId })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<IUserForm>({
    mode: "onChange",
    resolver: zodResolver(userSchema),
  });

  function handleDefaultValues() {
    if (!user) return

    const {
      firstName,
      lastName,
      email,
    } = user;

    reset({
      firstName,
      lastName,
      email,
    });
  }

  const onSubmit = (data: IUserForm) => {
    if (userId) {
      handleUpdateUser(
        { id: userId, ...data },
        {
          onSuccess: () => router.replace("/users"),
        },
      );

      return;
    }

    handleCreateUser(data, {
      onSuccess: () => router.replace("/users"),
    });
  };

  useEffect(handleDefaultValues, [reset, user]);

  return (
    <>
      <Button.Root
        variant="unstyled"
        className="mb-[2rem]"
        asChild
        onClick={() => router.back()}
      >
        <div className="flex items-center gap-[0.75rem]">
          <FiArrowLeft className="text-[2rem]" />

          <h1 className="text-[#242424] text-[1.5rem] font-semibold">
            {title}
          </h1>
        </div>
      </Button.Root>

      <form
        className="rounded-[8px] bg-[#fff] p-[1.5rem] flex flex-col gap-[1.5rem]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-2 gap-[1.5rem]">
          <FormControl.Root className="">
            <FormControl.Label>First Name*</FormControl.Label>

            <Input.Root>
              <Input.Field
                placeholder="First Name"
                {...register("firstName")}
              />
            </Input.Root>

            {errors.firstName?.message && (
              <FormControl.Error>{errors.firstName.message}</FormControl.Error>
            )}
          </FormControl.Root>

          <FormControl.Root>
            <FormControl.Label>Last Name*</FormControl.Label>

            <Input.Root>
              <Input.Field placeholder="Last Name" {...register("lastName")} />
            </Input.Root>

            {errors.lastName?.message && (
              <FormControl.Error>{errors.lastName.message}</FormControl.Error>
            )}
          </FormControl.Root>

          <FormControl.Root className="col-span-2">
            <FormControl.Label>Email*</FormControl.Label>

            <Input.Root>
              <Input.Field placeholder="Email" {...register("email")} />
            </Input.Root>

            {errors.email?.message && (
              <FormControl.Error>{errors.email.message}</FormControl.Error>
            )}
          </FormControl.Root>
        </div>

        <div className="flex items-center gap-[1.5rem] justify-end">
          <Button.Root
            variant="tertiary"
            className="max-w-[10.5rem]"
            onClick={() => router.back()}
          >
            Cancel
          </Button.Root>

          <Button.Root
            variant="secondary"
            className="max-w-[10.5rem]"
            disabled={!isValid}
            type="submit"
          >
            Save
          </Button.Root>
        </div>
      </form>
    </>
  );
}
