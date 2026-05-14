import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div className="w-full relative">
        <input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-xl px-4 py-2 text-sm transition-all outline-none",
            "file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed disabled:opacity-50",
            error ? "border-red-500 focus-visible:border-red-500 shadow-[0_0_12px_rgba(239,68,68,0.35)]" : "",
            className
          )}
          style={{
            background: "rgba(255,255,255,0.75)",
            border: error ? "1px solid #ef4444" : "1px solid rgba(255,255,255,0.25)",
            color: "#0F172A",
          }}
          ref={ref}
          onFocus={(e) => {
            if (!error) {
              e.target.style.borderColor = "#2563EB";
              e.target.style.boxShadow = "0px 0px 12px rgba(37,99,235,0.35)";
            }
          }}
          onBlur={(e) => {
            if (!error) {
              e.target.style.borderColor = "rgba(255,255,255,0.25)";
              e.target.style.boxShadow = "none";
            }
          }}
          {...props}
        />
        {error && (
          <p className="absolute -bottom-5 left-1 text-xs text-red-500">{error}</p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
