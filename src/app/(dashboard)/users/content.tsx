"use client";

import { Button } from "@/components/button";
import { pluralize } from "@/utils/pluralize";

import { Table } from "../components/table";
import { Pagination } from "../components/pagination";
import { Badge } from "../components/badge";
import { Dialog } from "../components/dialog";
import { Tooltip } from "../components/tooltip";

import { useModal } from "../components/dialog/hooks/use-modal";
import { useGetUsers } from "../users/hooks/use-get-users";

import type { UserPreview } from "@/services/users/types";

import Link from "next/link";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { createColumnHelper } from "@tanstack/react-table";

import { FiTrash2, FiEdit2 } from "react-icons/fi";
import { useDeleteUser } from "./hooks/use-delete-user";

const paginationSchema = z.object({
  page: z.number().min(1),
});

type IPagination = z.infer<typeof paginationSchema>;

type ToDeleteUser = Pick<UserPreview, "id" | "firstName" | "lastName">;

export function Content() {
  const {
    open: handleOpenDeleteModal,
    close: handleCloseDeleteModal,
    opened: deleteModalIsOpened,
    data: toDeleteUser,
  } = useModal<ToDeleteUser>();

  const { control, watch } = useForm<IPagination>({
    resolver: zodResolver(paginationSchema),
    defaultValues: {
      page: 1,
    },
  });

  const { page } = watch();

  const { data: users, queryKey } = useGetUsers({ page, limit: 10 });
  const { mutate: handleDeleteUser } = useDeleteUser({
    queryKey,
  });

  const columnHelper = createColumnHelper<UserPreview>();

  const columns = [
    columnHelper.accessor("firstName", {
      header: ({ header }) => (
        <Table.Head header={header}>First name</Table.Head>
      ),
      cell: ({ getValue, cell }) => {
        return <Table.Cell cell={cell}>{getValue()}</Table.Cell>;
      },
      size: 256,
    }),
    columnHelper.accessor("lastName", {
      header: ({ header }) => (
        <Table.Head header={header}>Last name</Table.Head>
      ),
      cell: ({ cell, getValue }) => (
        <Table.Cell cell={cell}>{getValue()}</Table.Cell>
      ),
      size: 156,
    }),
    columnHelper.display({
      id: "actions",
      header: ({ header }) => <Table.Head header={header}>Actions</Table.Head>,
      cell: ({ cell, row }) => {
        const { id, firstName, lastName } = row.original;

        return (
          <Table.Cell cell={cell}>
            <Tooltip.Provider>
              <Table.Actions>
                <Tooltip.Root>
                  <Tooltip.Trigger
                    asChild
                    className="text-CINZA-300 hover:text-CINZA-400 text-[1.5rem]"
                  >
                    <Link href={`/users/${id}/edit`}>
                      <FiEdit2 />
                    </Link>
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content
                      className="text-CINZA-400 text-[0.75rem] font-medium leading-[1.125rem] select-none
                        rounded-[0.5rem] bg-CINZA-100 p-[0.5rem] z-[99]"
                      side="top"
                      sideOffset={5}
                    >
                      <span>Edit</span>

                      <Tooltip.Arrow />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>

                <Tooltip.Root>
                  <Tooltip.Trigger
                    type="button"
                    className="text-CINZA-300 hover:text-CINZA-400 text-[1.5rem]"
                    onClick={() =>
                      handleOpenDeleteModal({ id, firstName, lastName })
                    }
                  >
                    <FiTrash2 />
                  </Tooltip.Trigger>
                  <Tooltip.Portal>
                    <Tooltip.Content
                      className="text-CINZA-400 text-[0.75rem] font-medium leading-[1.125rem] select-none
                        rounded-[0.5rem] bg-CINZA-100 p-[0.5rem] z-[99]"
                      side="top"
                      sideOffset={5}
                    >
                      <span>Delete</span>

                      <Tooltip.Arrow />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                </Tooltip.Root>
              </Table.Actions>
            </Tooltip.Provider>
          </Table.Cell>
        );
      },
      size: 152,
    }),
  ];

  return (
    <>
      <Table.Root>
        <header className="flex gap-[0.75rem] px-[1.5rem] py-[1rem] bg-GLOBAL-BRANCO">
          <h1 className="text-CINZA-400 text-[1rem] font-medium leading-[1.5rem]">
            Users
          </h1>

          <Badge.Root
            className="w-auto text-[0.75rem] px-[0.5rem]"
            variant="primary"
          >
            <Badge.Text>{pluralize(users?.total ?? 0, "user")}</Badge.Text>
          </Badge.Root>
        </header>

        <Table.ScrollArea>
          <Table.Content
            data={users?.data ?? []}
            columns={columns}
            emptyMessageComponent={() => (
              <Table.EmptyMessage>
                <div className="flex items-center">
                  <span
                    className="text-CINZA-300 flex gap-[0.5rem] items-center text-[0.875rem] font-medium
                      leading-[1.25rem]"
                  >
                    Nenhum usuário encontrado.
                    <Link
                      href="/users/new"
                      className="text-CINZA-400 underline"
                    >
                      Cadastre um novo.
                    </Link>
                  </span>
                </div>
              </Table.EmptyMessage>
            )}
          />
        </Table.ScrollArea>

        {!!users?.total && (
          <Table.Footer>
            <Controller
              control={control}
              name="page"
              render={({ field: { onChange, value } }) => {
                return (
                  <Pagination.Root
                    forcePage={value - 1}
                    pageCount={Math.floor(users.total / users.limit)}
                    onPageChange={({ selected }) => onChange(selected + 1)}
                  />
                );
              }}
            />
          </Table.Footer>
        )}
      </Table.Root>

      <Dialog.Root
        open={deleteModalIsOpened}
        onOpenChange={handleCloseDeleteModal}
      >
        <Dialog.Portal>
          <Dialog.Overlay />
          <Dialog.Content className="max-w-[26.5rem] flex flex-col gap-[3rem] items-center">
            <div className="w-[7.125rem] bg-[#F5F5F5] h-[7.125rem] overflow-hidden rounded-full flex items-center justify-center">
              <FiTrash2 className="text-[4rem] text-GLOBAL-PRETO" />
            </div>
            <Dialog.Title>
              Are you sure you want to delete {toDeleteUser?.firstName}{" "}
              {toDeleteUser?.lastName}?
            </Dialog.Title>
            <div className="flex flex-col gap-[2.5rem] items-center w-full">
              <Button.Root
                variant="secondary"
                className="max-w-[12.5rem]"
                onClick={() => {
                  handleCloseDeleteModal();

                  if (toDeleteUser) {
                    handleDeleteUser(toDeleteUser.id);
                  }
                }}
              >
                Yes, delete
              </Button.Root>

              <Dialog.Close>Cancel</Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
