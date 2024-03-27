"use client";

import {
  Trigger as DialogTrigger,
  type DialogTriggerProps,
} from "@radix-ui/react-dialog";
import { twMerge } from "tailwind-merge";

interface Props extends DialogTriggerProps {}

export function Trigger({ className, ...rest }: Props) {
  return (
    <DialogTrigger className={twMerge(["outline-none"], className)} {...rest} />
  );
}
