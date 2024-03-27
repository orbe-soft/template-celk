"use client";

import {
  Title as DialogTitle,
  type DialogTitleProps,
} from "@radix-ui/react-dialog";
import { twMerge } from "tailwind-merge";

interface Props extends DialogTitleProps {}

export function Title({ className, ...rest }: Props) {
  return (
    <DialogTitle
      className={twMerge(
        ["text-GLOBAL-PRETO", "font-semibold", "text-center", "text-[1.75rem]"],
        className,
      )}
      {...rest}
    />
  );
}
