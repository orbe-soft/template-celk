import type { Cell as CellProps } from "@tanstack/react-table";
import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props<T> extends ComponentProps<"td"> {
  cell: CellProps<T, unknown>;
}

export function Cell<T>({ className, cell, style, ...rest }: Props<T>) {
  return (
    <td
      className={twMerge(
        [
          "px-[1.5rem]",
          "h-[4.5rem]",
          "text-left",
          "text-CINZA-300",
          "text-[0.875rem]",
          "font-medium",
          "leading-[1.25rem]",
          "border-r",
          "border-r-CINZA-100",
          "border-b",
          "border-b-CINZA-100",
          "group-last:border-b-0",
          "last:border-r-0",
          "py-0",
          "whitespace-nowrap",
          "bg-GLOBAL-BRANCO",
        ],
        className,
      )}
      style={{
        width:
          cell.column.getSize() === Number.MAX_SAFE_INTEGER
            ? "auto"
            : cell.column.getSize(),
        ...style,
      }}
      {...rest}
    />
  );
}
