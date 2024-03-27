import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<"h1"> {}

export function Title({ className, ...rest }: Props) {
  return (
    <h1
      className={twMerge(
        [
          "font-inter",
          "text-[1rem]",
          "font-semibold",
          "leading-[1.5rem]",
          "text-global-black",
        ],
        className,
      )}
      {...rest}
    />
  );
}
