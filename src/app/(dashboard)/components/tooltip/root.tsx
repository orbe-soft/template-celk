import {
  Root as TooltipRoot,
  type TooltipProps,
} from "@radix-ui/react-tooltip";

interface Props extends TooltipProps {}

export function Root({ ...rest }: Props) {
  return <TooltipRoot {...rest} />;
}
