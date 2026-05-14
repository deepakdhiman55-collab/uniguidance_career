import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "gold";
  size?: "default" | "sm" | "lg";
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", isLoading, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={isLoading || props.disabled}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-[14px] text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white shadow-[0px_10px_30px_rgba(37,99,235,0.35)] hover:-translate-y-1 hover:shadow-[0px_15px_35px_rgba(37,99,235,0.5)]": variant === "default",
            "border border-white/20 bg-transparent text-[#E2E8F0] hover:bg-white/10": variant === "outline",
            "hover:bg-white/10 text-[#F8FAFC]": variant === "ghost",
            "bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:shadow-[0_15px_35px_rgba(212,175,55,0.45)] hover:-translate-y-1": variant === "gold",
            "h-12 px-6 py-2": size === "default",
            "h-10 px-4": size === "sm",
            "h-14 px-8 text-base": size === "lg",
          },
          className
        )}
        {...props}
      >
        {isLoading ? (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : null}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
