"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { MultiStepCounselingForm } from "./forms/MultiStepCounselingForm";

interface CounselingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CounselingModal({ isOpen, onClose }: CounselingModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl mx-auto z-10 rounded-3xl"
            style={{
              background: "rgba(15,23,42,0.82)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0px 25px 60px rgba(0,0,0,0.45)",
            }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 sm:-right-12 sm:top-0 p-2 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full transition-all z-20 backdrop-blur-md"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* We reuse the MultiStepCounselingForm here */}
            <div className="max-h-[90vh] overflow-y-auto rounded-3xl custom-scrollbar">
              <MultiStepCounselingForm />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
