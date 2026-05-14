import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";
import { Button } from "./Button";

interface SuccessPopupProps {
  isOpen: boolean;
  onClose: () => void;
  leadId?: string;
}

export function SuccessPopup({ isOpen, onClose, leadId }: SuccessPopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg overflow-hidden rounded-[24px] p-8 z-10"
            style={{
              background: "rgba(15,23,42,0.95)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: "0px 30px 60px rgba(0,0,0,0.5)",
            }}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-2 text-white/50 hover:bg-white/10 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                <CheckCircle2 className="h-10 w-10 text-green-400" />
              </div>

              <h2 className="mb-2 text-3xl font-bold text-white">
                Registration Successful!
              </h2>
              <p className="mb-6 text-lg text-[#E2E8F0]">
                Thank you for taking the first step towards your global education journey.
              </p>

              {leadId && (
                <div className="mb-8 w-full rounded-xl bg-white/5 p-4 border border-white/10">
                  <p className="text-sm font-medium text-blue-300 mb-1">Your Reference ID:</p>
                  <p className="text-2xl font-mono font-bold text-[#D4AF37] drop-shadow-md">{leadId}</p>
                </div>
              )}

              <p className="mb-8 text-sm text-[#94A3B8]">
                We've sent a confirmation email with your counseling details. Our team will contact you shortly.
              </p>

              <div className="flex w-full flex-col gap-3">
                <Button variant="gold" size="lg" className="w-full" onClick={onClose}>
                  Back to Home
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
