import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<"div"> {}

export function ScrollArea({ className, ...rest }: Props) {
  return (
    <div
      className={twMerge(
        [
          "w-full",
          "max-h-[calc(100vh_-_24.5rem)]",
          "overflow-auto",
          "bg-GLOBAL-BRANCO",
        ],
        className,
      )}
      {...rest}
    />
  );
}
