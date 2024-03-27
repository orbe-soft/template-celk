import {
  Content as DialogContent,
  type DialogContentProps,
} from "@radix-ui/react-dialog";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends DialogContentProps {}

export const Content = forwardRef<HTMLDivElement, Props>(function Content(
  { className, ...rest },
  ref,
) {
  return (
    <DialogContent
      ref={ref}
      className={twMerge([
        `data-[state=open]:animate-contentShow py-[3rem] px-[2rem] fixed top-[50%] left-[50%]
        max-h-[85vh] w-[90vw] translate-x-[-50%] translate-y-[-50%] rounded-[16px]
        bg-[#fff] focus:outline-none z-50`,
        className,
      ])}
      {...rest}
    />
  );
});
