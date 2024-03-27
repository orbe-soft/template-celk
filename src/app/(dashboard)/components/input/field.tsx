import { forwardRef, type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { useCtx } from "./root";

interface Props extends ComponentProps<"input"> {}

export const Field = forwardRef<HTMLInputElement, Props>(function Field(
  { className, type = "text", ...rest },
  ref,
) {
  const { disabled } = useCtx();

  return (
    <input
      ref={ref}
      disabled={disabled}
      className={twMerge(
        [
          "flex-1",
          "font-inter",
          "text-[1rem]",
          "font-normal",
          "leading-[1.5rem]",
          "text-[#222222]",
          "outline-none",
          "placeholder:text-[#d2d2d2]",
          "group-data-[disabled=true]:cursor-not-allowed",
          "group-data-[disabled=true]:bg-CINZA-[#f1f1f1]",
          "group-data-[disabled=true]:text-[#808080]",
          "group-data-[disabled=true]:placeholder:text-[#808080]",
          "w-full",
        ],
        className,
      )}
      type={type}
      {...rest}
    />
  );
});
