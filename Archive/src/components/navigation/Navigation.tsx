"use client";

import { useState, useEffect } from "react";
import { Compass, Menu, Moon, Sun, ArrowRight } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import { useCounselingModal } from "@/components/CounselingModalProvider";

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openModal } = useCounselingModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full px-[5%] py-4 lg:py-5 flex justify-between items-center z-[100]",
          "transition-all duration-400 ease-in-out border-b",
          scrolled
            ? "bg-white/95 dark:bg-[#010409]/90 backdrop-blur-md border-black/5 dark:border-white/5 shadow-sm lg:py-4"
            : "bg-gradient-to-b from-white/95 to-transparent dark:from-[#010409]/90 dark:to-transparent border-transparent"
        )}
      >
        {/* Brand */}
        <div className="flex items-center gap-3 text-xl font-extrabold tracking-tight text-gradient shrink-0">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[#010409] bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] shadow-[0_4px_15px_rgba(251,191,36,0.3)]">
            <Compass size={20} />
          </div>
          <span className="hidden sm:inline">Uniguidance</span>
        </div>

        {/* Desktop Menu */}
        <div className="flex-1 flex justify-center px-4">
          <DesktopMenu />
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 xl:gap-5 shrink-0">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={cn(
              "w-10 h-10 xl:w-11 xl:h-11 rounded-full flex items-center justify-center cursor-pointer relative overflow-hidden backdrop-blur-md transition-all duration-400",
              "bg-white/90 dark:bg-white/5 border border-black/10 dark:border-white/10",
              "text-[#b48608] dark:text-[#f8fafc] shadow-[0_4px_10px_rgba(0,0,0,0.05)]",
              "hover:bg-white hover:dark:bg-white/15 hover:border-black/15 hover:dark:border-white/15 hover:scale-105 hover:shadow-[0_6px_15px_rgba(0,0,0,0.08)]"
            )}
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Moon size={18} className="xl:w-5 xl:h-5" /> : <Sun size={18} className="xl:w-5 xl:h-5" />}
          </button>

          {/* Primary CTA (Desktop) */}
          <button 
            onClick={openModal}
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 xl:px-6 xl:py-2.5 rounded-xl font-bold text-sm transition-all duration-400 bg-gradient-to-br from-[#1d4ed8] to-[#3b82f6] text-white shadow-[0_4px_20px_rgba(59,130,246,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(59,130,246,0.45)] group relative overflow-hidden"
          >
            <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-600 group-hover:left-full"></span>
            <span className="relative z-10">Book Free Consultation</span>
            <ArrowRight size={16} className="relative z-10 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center bg-black/5 dark:bg-white/5 text-gray-800 dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile Slide-in Menu */}
      <MobileMenu isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} />
    </>
  );
}
