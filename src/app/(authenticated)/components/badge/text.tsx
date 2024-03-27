import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<"span"> {}

export function Text({ className, ...rest }: Props) {
  return <span className={twMerge([], className)} {...rest} />;
}
