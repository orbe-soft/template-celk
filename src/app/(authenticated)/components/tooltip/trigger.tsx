import {
  TooltipTrigger,
  type TooltipTriggerProps,
} from "@radix-ui/react-tooltip";
import { forwardRef } from "react";

interface Props extends TooltipTriggerProps {}

export const Trigger = forwardRef<HTMLButtonElement, Props>(function Root(
  { ...rest },
  ref,
) {
  return <TooltipTrigger ref={ref} {...rest} />;
});
