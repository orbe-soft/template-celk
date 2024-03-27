import {
  TooltipContent,
  type TooltipContentProps,
} from "@radix-ui/react-tooltip";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends TooltipContentProps {}

export const Content = forwardRef<HTMLDivElement, Props>(function Content(
  { className, ...rest },
  ref,
) {
  return (
    <TooltipContent
      ref={ref}
      side="right"
      sideOffset={16}
      className={twMerge(
        `data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade
        data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade
        data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade
        data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade select-none
        will-change-[transform,opacity]`,
        className,
      )}
      {...rest}
    />
  );
});
