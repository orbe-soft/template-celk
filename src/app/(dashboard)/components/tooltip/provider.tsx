import {
  TooltipProvider,
  type TooltipProviderProps,
} from "@radix-ui/react-tooltip";

interface Props extends TooltipProviderProps {}

export function Provider({ ...rest }: Props) {
  return (
    <TooltipProvider disableHoverableContent delayDuration={100} {...rest} />
  );
}
