import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "outline-white";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-on-primary hover:bg-primary-container shadow-md shadow-primary/20",
  outline:
    "border border-primary text-primary hover:bg-primary/5",
  "outline-white":
    "border border-white text-white hover:bg-white/10 backdrop-blur-sm",
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`px-xl py-md text-label-md font-medium rounded-lg transition-all cursor-pointer active:scale-95 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
