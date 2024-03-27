import { TooltipArrow, type TooltipArrowProps } from "@radix-ui/react-tooltip";
import { twMerge } from "tailwind-merge";

interface Props extends TooltipArrowProps {}

export function Arrow({ className, ...rest }: Props) {
  return (
    <TooltipArrow
      className={twMerge(["fill-CINZA-100", className])}
      {...rest}
    />
  );
}
