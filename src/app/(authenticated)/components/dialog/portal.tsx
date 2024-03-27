"use client";

import {
  Portal as DialogPortal,
  type DialogPortalProps,
} from "@radix-ui/react-dialog";

interface Props extends DialogPortalProps {}

export function Portal({ ...rest }: Props) {
  return <DialogPortal {...rest} />;
}
