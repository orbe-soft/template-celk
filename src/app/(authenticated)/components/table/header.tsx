import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<"header"> {}

export function Header({ className, ...rest }: Props) {
  return (
    <header
      className={twMerge(
        ["flex", "items-center", "justify-between"],
        className,
      )}
      {...rest}
    />
  );
}
