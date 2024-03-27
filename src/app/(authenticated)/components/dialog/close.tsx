import {
  Close as DialogClose,
  type DialogCloseProps,
} from "@radix-ui/react-dialog";
import { twMerge } from "tailwind-merge";

interface Props extends DialogCloseProps {}

export function Close({ className, ...rest }: Props) {
  return (
    <DialogClose
      className={twMerge(
        "text-GLOBAL-PRETO text-[1rem] font-medium",
        className,
      )}
      {...rest}
    />
  );
}
