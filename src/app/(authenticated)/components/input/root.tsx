import { createContext, useContext, type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<"div"> {
  disabled?: boolean;
  invalid?: boolean;
}

interface IContextProps {
  disabled: boolean;
}

const ctx = createContext({} as IContextProps);

export const useCtx = () => useContext(ctx);

export function Root({
  className,
  disabled = false,
  invalid = false,
  ...rest
}: Props) {
  return (
    <ctx.Provider value={{ disabled }}>
      <div
        data-disabled={disabled}
        data-invalid={invalid}
        className={twMerge(
          [
            "group",
            "flex",
            "items-center",
            "group",
            "flex",
            "gap-[0.5rem]",
            "rounded-[0.5rem]",
            "border",
            "border-[#d2d2d2]",
            "bg-[#fff]",
            "px-[0.88rem]",
            "py-[0.62rem]",
            "data-[invalid=true]:border-[#fec1a1]",
            "data-[disabled=true]:cursor-not-allowed",
            "data-[disabled=true]:bg-[#f1f1f1]",
            "focus-within:border-[#222222]",
            "h-[2.75rem]",
            "w-full",
          ],
          className,
        )}
        {...rest}
      />
    </ctx.Provider>
  );
}
