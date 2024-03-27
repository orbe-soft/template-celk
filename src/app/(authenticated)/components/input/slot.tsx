import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<"div"> {}

export function Slot({ className, ...rest }: Props) {
  return (
    <div
      className={twMerge(
        [
          "text-[1.25rem]",
          "group-data-[disabled=true]:pointer-events-none",
          "text-[#d2d2d2]",
        ],
        className,
      )}
      {...rest}
    />
  );
}
