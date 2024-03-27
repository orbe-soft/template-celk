import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { useCtx } from "./content";

interface Props extends ComponentProps<"td"> {}

export function EmptyMessage({ className, ...rest }: Props) {
  const { columnsLength } = useCtx();

  return (
    <td
      colSpan={columnsLength}
      className={twMerge(
        ["border-b", "border-b-CINZA-100", "px-[1.5rem]", "h-[4.5rem]"],
        className,
      )}
      {...rest}
    />
  );
}
