import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<"div"> {}

export function Root({ className, ...rest }: Props) {
  return (
    <div
      className={twMerge(
        [
          "flex",
          "flex-col",
          "w-full",
          "rounded-[0.5rem]",
          "overflow-hidden",
          "border",
          "border-CINZA-100",
          "shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.06),_0px_1px_3px_0px_rgba(16,_24,_40,_0.10)]",
        ],
        className,
      )}
      {...rest}
    />
  );
}
