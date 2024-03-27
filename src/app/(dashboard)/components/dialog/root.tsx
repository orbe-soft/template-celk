"use client";

import { Root as DialogRoot, type DialogProps } from "@radix-ui/react-dialog";

interface Props extends DialogProps {}

export function Root({ ...rest }: Props) {
  return <DialogRoot {...rest} />;
}
