"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type FAQItem = {
  question: string;
  answer: string;
};

export function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    if (openIndex === idx) {
      setOpenIndex(null);
    } else {
      setOpenIndex(idx);
    }
  };

  return (
    <div className="w-full space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div 
            key={idx} 
            className="bg-white dark:bg-[#010409] border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
            >
              <h3 className={cn("text-lg font-bold transition-colors", isOpen ? "text-blue-600 dark:text-blue-400" : "text-gray-900 dark:text-white")}>
                {faq.question}
              </h3>
              <div className={cn("w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center shrink-0 transition-transform duration-300", isOpen && "rotate-180")}>
                <ChevronDown className={cn("w-5 h-5 transition-colors", isOpen ? "text-blue-600 dark:text-blue-400" : "text-gray-500")} />
              </div>
            </button>
            <div 
              className={cn("overflow-hidden transition-all duration-300", isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0")}
            >
              <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
