import React from "react";
import { motion } from "framer-motion";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  steps: string[];
}

export function ProgressBar({ currentStep, totalSteps, steps }: ProgressBarProps) {
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="w-full mb-8">
      {/* Step indicators */}
      <div className="flex justify-between mb-2">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`text-xs font-medium transition-colors duration-300 ${
              index + 1 <= currentStep ? "text-blue-900" : "text-gray-400"
            }`}
          >
            <span className="hidden sm:inline">{step}</span>
            <span className="sm:hidden">{index + 1}</span>
          </div>
        ))}
      </div>

      {/* Progress bar background */}
      <div className="h-2 w-full bg-gray-200/50 rounded-full overflow-hidden backdrop-blur-sm border border-white/20">
        {/* Progress bar fill */}
        <motion.div
          className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
