import type { Header } from "@tanstack/react-table";
import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

interface Props<T> extends ComponentProps<"th"> {
  header: Header<T, unknown>;
}

export function Head<T>({
  className,
  header,
  style,
  children,
  ...rest
}: Props<T>) {
  return (
    <th
      className={twMerge(
        [
          "gap-[0.25rem]",
          "bg-CINZA-100",
          "px-[1.5rem]",
          "text-left",
          "text-CINZA-400",
          "font-inter",
          "text-[0.75rem]",
          "font-medium",
          "leading-[1.125REM]",
          "h-[2.75rem]",
          "border-r",
          "border-r-CINZA-200",
          "last:border-r-0",
          "border-b",
          "border-b-CINZA-200",
          "data-[sort=true]:cursor-pointer",
          "data-[sort=true]:select-none",
        ],
        className,
      )}
      style={{
        ...style,
        width:
          header.getSize() === Number.MAX_SAFE_INTEGER
            ? "auto"
            : header.getSize(),
      }}
      colSpan={header.colSpan}
      {...rest}
    >
      <div className="flex items-center gap-[0.25rem]">{children}</div>
    </th>
  );
}
