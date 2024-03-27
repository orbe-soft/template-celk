import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<"footer"> {}

export function Footer({ className, ...rest }: Props) {
  return (
    <footer
      className={twMerge(
        [
          "flex",
          "px-[1.5rem]",
          "py-[0.75rem]",
          "border-t",
          "border-t-CINZA-100",
          "bg-GLOBAL-BRANCO",
        ],
        className,
      )}
      {...rest}
    />
  );
}
