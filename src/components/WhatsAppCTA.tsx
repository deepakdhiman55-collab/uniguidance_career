"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function WhatsAppCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  // Delay showing the button slightly
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Hide tooltip after a few seconds
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShowTooltip(false), 8000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-[90] flex flex-col items-end gap-3 pointer-events-none"
        >
          {/* Tooltip prompt */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, originX: 1, originY: 1 }}
                className="relative bg-white dark:bg-[#1e293b] px-4 py-3 rounded-2xl shadow-xl dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-black/5 dark:border-white/10 pointer-events-auto flex items-center gap-3"
              >
                <div>
                  <p className="text-[0.85rem] font-bold text-gray-900 dark:text-white leading-tight mb-0.5">
                    Need instant help?
                  </p>
                  <p className="text-[0.75rem] text-gray-500 dark:text-gray-400">
                    Chat with an expert now.
                  </p>
                </div>
                <button 
                  onClick={() => setShowTooltip(false)}
                  className="w-6 h-6 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"
                >
                  <X size={14} />
                </button>
                {/* Arrow pointing to button */}
                <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white dark:bg-[#1e293b] border-b border-r border-black/5 dark:border-white/10 rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Button */}
          <a
            href="https://wa.me/1234567890?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20study%20abroad%20services."
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "relative w-14 h-14 rounded-full flex items-center justify-center text-white pointer-events-auto",
              "bg-[#25D366] hover:bg-[#128C7E] shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-colors duration-300",
              "group"
            )}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <div className="absolute inset-0 rounded-full border border-white/40 pointer-events-none" />
            {/* Pulse effect */}
            <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />
            <MessageCircle size={28} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
