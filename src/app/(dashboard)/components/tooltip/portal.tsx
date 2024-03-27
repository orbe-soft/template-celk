import {
  TooltipPortal,
  type TooltipPortalProps,
} from "@radix-ui/react-tooltip";

interface Props extends TooltipPortalProps {}

export function Portal({ ...rest }: Props) {
  return <TooltipPortal {...rest} />;
}
