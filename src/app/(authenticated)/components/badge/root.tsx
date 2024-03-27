import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

interface Variants extends VariantProps<typeof root> {}

interface Props extends ComponentProps<"div">, Variants {}

const root = tv({
  base: [
    "flex",
    "gap-[0.25rem]",
    "items-center",
    "justify-center",
    "rounded-[1rem]",
    "text-[0.875rem]",
    "font-medium",
    "leading-[1.25rem]",
    "w-[4.625rem]",
    "h-[1.5rem]",
  ],
  variants: {
    variant: {
      primary: ["bg-CINZA-400", "text-GLOBAL-BRANCO"],
      secondary: ["bg-VERDE-100", "text-VERDE-300"],
      tertiary: ["bg-AMARELO-100", "text-AMARELO-300"],
      quartenary: ["bg-CINZA-100", "text-GLOBAL-BRANCO"],
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export function Root({ className, variant, ...rest }: Props) {
  return <div className={root({ className, variant })} {...rest} />;
}
