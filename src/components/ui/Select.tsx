import * as React from "react";
import { cn } from "@/lib/utils";

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
  options: { label: string; value: string }[];
  placeholder?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, options, placeholder, ...props }, ref) => {
    return (
      <div className="w-full relative">
        <select
          className={cn(
            "flex h-12 w-full appearance-none rounded-xl px-4 py-2 text-sm transition-all outline-none",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error ? "border-red-500 focus-visible:border-red-500 shadow-[0_0_12px_rgba(239,68,68,0.35)]" : "",
            className
          )}
          style={{
            background: "rgba(255,255,255,0.75)",
            border: error ? "1px solid #ef4444" : "1px solid rgba(255,255,255,0.25)",
            color: "#0F172A",
          }}
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
          ref={ref}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {/* Custom Chevron for select */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
          <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
        {error && (
          <p className="absolute -bottom-5 left-1 text-xs text-red-500">{error}</p>
        )}
      </div>
    );
  }
);
Select.displayName = "Select";

export { Select };
