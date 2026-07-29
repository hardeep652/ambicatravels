import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-sky-500 text-white shadow-glow hover:bg-sky-600 hover:-translate-y-0.5 active:translate-y-0",
        emerald:
          "bg-emerald-500 text-white shadow-[0_20px_40px_-12px_rgba(16,185,129,0.45)] hover:bg-emerald-600 hover:-translate-y-0.5 active:translate-y-0",
        outline:
          "border-2 border-white/70 text-white backdrop-blur-sm hover:bg-white hover:text-navy-900",
        outlineDark:
          "border-2 border-navy-900/15 text-navy-900 hover:border-navy-900 hover:bg-navy-900 hover:text-white",
        ghost: "text-navy-900 hover:bg-navy-50",
        link: "text-sky-600 underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "h-12 px-7",
        sm: "h-10 px-5 text-[13px]",
        lg: "h-14 px-9 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
