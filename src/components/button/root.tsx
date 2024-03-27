import { Slot } from "@radix-ui/react-slot";
import { forwardRef, type ComponentPropsWithoutRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

interface Variants extends VariantProps<typeof button> {}

interface Props
  extends Omit<ComponentPropsWithoutRef<"button">, "color">,
    Variants {
  asChild?: boolean;
}

export const button = tv({
  base: [
    "flex",
    "cursor-pointer",
    "items-center",
    "justify-center",
    "gap-[0.75rem]",
    "rounded-[0.5rem]",
    "font-medium",
    "outline-none",
    "w-full",
    "whitespace-nowrap",
    "h-[2.75rem]",
    "px-[1.25rem]",
    "py-[1rem]",
    "text-[1rem]",
    "border",
    "transition-all",
    "hover:opacity-75",
  ],
  variants: {
    disabled: {
      true: ["cursor-not-allowed"],
    },
    variant: {
      primary: ["border-[#B0B0B0]", "bg-GLOBAL-BRANCO", "text-GLOBAL-PRETO"],
      secondary: ["border-transparent", "bg-[#1E1E1E]", "text-GLOBAL-BRANCO"],
      tertiary: ["border-transparent", "bg-[#A0A0A0]", "text-GLOBAL-BRANCO"],
      quaternary: ["border-transparent", "bg-[#E6E6E6]", "text-GLOBAL-PRETO"],
      unstyled: ["border-none", "bg-transparent", "p-0", "w-fit"],
    },
  },
  defaultVariants: {
    variant: "primary",
  },
  compoundVariants: [
    {
      variant: "secondary",
      disabled: true,
      className: ["opacity-75", "hover:opacity-75"],
    },
  ],
});

export const Root = forwardRef<HTMLButtonElement, Props>(function ButtonRoot(
  { className, variant, disabled, asChild, ...rest },
  ref,
) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      ref={ref}
      type="button"
      className={button({
        className,
        variant,
        disabled,
      })}
      disabled={disabled}
      {...rest}
    />
  );
});
