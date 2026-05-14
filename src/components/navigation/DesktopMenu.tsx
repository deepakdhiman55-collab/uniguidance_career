"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAVIGATION } from "./NavData";
import { ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function DesktopMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (name: string) => {
    if (timeoutId) clearTimeout(timeoutId);
    setActiveMenu(name);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setActiveMenu(null);
    }, 150); // slight delay to prevent flickering
    setTimeoutId(id);
  };

  return (
    <div className="hidden lg:flex items-center gap-1 xl:gap-2 relative">
      {NAVIGATION.map((item) => (
        <div
          key={item.name}
          className="relative"
          onMouseEnter={() => handleMouseEnter(item.name)}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href={item.href || "#"}
            className={cn(
              "flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium tracking-tight transition-all duration-300",
              activeMenu === item.name
                ? "text-gray-900 dark:text-white"
                : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            )}
          >
            {item.name}
            {(item.type === "mega-menu" || item.type === "dropdown") && (
              <ChevronDown
                size={16}
                className={cn(
                  "transition-transform duration-300",
                  activeMenu === item.name ? "rotate-180" : ""
                )}
              />
            )}
          </a>

          <AnimatePresence>
            {activeMenu === item.name && item.type === "mega-menu" && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[750px] p-8 rounded-2xl border border-gray-200/60 dark:border-white/10 bg-white/95 dark:bg-[#0A0D14]/95 backdrop-blur-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] z-50 flex gap-8"
              >
                {/* Left Side: Grid of Items */}
                <div className="flex-1 grid grid-cols-2 gap-x-4 gap-y-6">
                  {item.items?.map((subItem) => {
                    const Icon = subItem.icon;
                    return (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className={cn(
                          "group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-gray-50/80 dark:hover:bg-white/[0.03]",
                          subItem.highlight ? "bg-blue-50/40 dark:bg-blue-900/10" : "bg-transparent"
                        )}
                      >
                        {Icon && (
                          <div className={cn(
                            "w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105",
                            subItem.highlight
                              ? "bg-blue-100/80 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400"
                              : "bg-gray-100 text-gray-500 dark:bg-white/5 dark:text-gray-400 group-hover:bg-white group-hover:text-gray-900 dark:group-hover:bg-white/10 dark:group-hover:text-white group-hover:shadow-sm"
                          )}>
                            <Icon size={20} />
                          </div>
                        )}
                        <div>
                          <div className={cn(
                            "font-medium text-[0.95rem] mb-1 flex items-center gap-2 transition-colors duration-300",
                            subItem.highlight ? "text-blue-700 dark:text-blue-400" : "text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                          )}>
                            {subItem.name}
                            {subItem.highlight && (
                              <span className="px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 text-[0.6rem] uppercase tracking-wider">
                                Popular
                              </span>
                            )}
                          </div>
                          <p className="text-[0.85rem] text-gray-500 dark:text-gray-400 leading-relaxed">
                            {subItem.description}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>

                {/* Right Side: Featured Card */}
                {item.featured && (
                  <div className="w-[280px] shrink-0 rounded-xl overflow-hidden relative group">
                    <img
                      src={item.featured.image}
                      alt={item.featured.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-5 w-full">
                      <h4 className="text-white font-bold text-lg mb-2 leading-tight">
                        {item.featured.title}
                      </h4>
                      <p className="text-white/80 text-sm mb-4 line-clamp-2">
                        {item.featured.description}
                      </p>
                      <a
                        href={item.featured.href}
                        className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:text-[var(--gold-accent)] transition-colors"
                      >
                        Explore <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {activeMenu === item.name && item.type === "dropdown" && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-full left-0 mt-4 w-[240px] p-2 rounded-xl border border-gray-200/60 dark:border-white/10 bg-white/95 dark:bg-[#0A0D14]/95 backdrop-blur-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] z-50 flex flex-col gap-1"
              >
                {item.items?.map((subItem) => {
                  const Icon = subItem.icon;
                  return (
                    <a
                      key={subItem.name}
                      href={subItem.href}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-300 hover:bg-gray-50/80 dark:hover:bg-white/[0.03] group"
                    >
                      {Icon && (
                        <Icon size={18} className="text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-[var(--gold-accent)] transition-colors" />
                      )}
                      <span className="font-medium text-[0.95rem] text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {subItem.name}
                      </span>
                    </a>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
