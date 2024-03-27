import {
  Overlay as DialogOverlay,
  type DialogOverlayProps,
} from "@radix-ui/react-dialog";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends DialogOverlayProps {}

export const Overlay = forwardRef<HTMLDivElement, Props>(function Overlay(
  { className, ...rest },
  ref,
) {
  return (
    <DialogOverlay
      ref={ref}
      className={twMerge(
        [
          "bg-[rgba(37,_37,_37,_0.60)]",
          "data-[state=open]:animate-overlayShow",
          "fixed",
          "inset-0",
          "grid",
          "overflow-y-auto",
          "place-items-center",
          "z-50",
        ],
        className,
      )}
      {...rest}
    />
  );
});
