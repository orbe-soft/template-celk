import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<"span"> {}

export function Error({ className, ...rest }: Props) {
  return (
    <span
      className={twMerge(
        [
          "text-[0.875rem]",
          "font-normal",
          "leading-[1.25rem]",
          "text-[#f82b11]",
        ],
        className,
      )}
      {...rest}
    />
  );
}
