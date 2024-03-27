import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<"div"> {}

export function Actions({ className, ...rest }: Props) {
  return (
    <div
      className={twMerge(
        [
          "flex",
          "items-center",
          "gap-[1.25rem]",
          "text-[1.125rem]",
          "text-gray-500",
          "font-semibold",
          "w-full",
          "justify-center",
        ],
        className,
      )}
      {...rest}
    />
  );
}
