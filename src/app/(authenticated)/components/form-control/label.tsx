import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<"label"> {}

export function Label({ className, ...rest }: Props) {
  return (
    <label
      className={twMerge(
        [
          "text-[0.875rem]",
          "font-medium",
          "leading-[1.25rem]",
          "text-[#222222]",
          "w-fit",
          "flex",
          "flex-col",
          "gap-[0.5rem]",
          "whitespace-nowrap",
        ],
        className,
      )}
      {...rest}
    />
  );
}
