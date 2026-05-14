"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Star, Shield, Clock, Users, TrendingUp } from "lucide-react";

const STATS = [
  { value: 98, suffix: "%", label: "Visa Success Rate" },
  { value: 2500, suffix: "+", label: "Students Placed" },
  { value: 15, suffix: "+", label: "Years of Expertise" },
  { value: 40, suffix: "+", label: "Partner Universities" },
];

const REASONS = [
  {
    icon: Shield,
    title: "100% Transparent Process",
    desc: "No hidden fees. Every step documented and tracked in real-time via your personal portal.",
  },
  {
    icon: Star,
    title: "Certified IELTS & PTE Trainers",
    desc: "In-house language coaching with 8.5+ band guarantee programs for all major exams.",
  },
  {
    icon: Clock,
    title: "24/7 Dedicated Support",
    desc: "Dedicated counselor assigned from Day 1 to visa approval and beyond.",
  },
  {
    icon: Users,
    title: "Alumni Network of 2,500+",
    desc: "Connect with our thriving community across the UK, Canada, Australia, USA & Europe.",
  },
  {
    icon: TrendingUp,
    title: "AI-Powered Profile Matching",
    desc: "Proprietary algorithm matches your profile to 500+ universities for the highest admit probability.",
  },
  {
    icon: CheckCircle,
    title: "End-to-End Accountability",
    desc: "We follow up until you land at your destination — your success is our success.",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-[clamp(2.4rem,4vw,3.5rem)] font-extrabold text-[var(--text-main)] tracking-tight leading-none">
      {count.toLocaleString()}
      <span className="text-[var(--gold-accent)]">{suffix}</span>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative w-full py-28 px-[5%] overflow-hidden bg-[var(--navy-light)]"
      style={{ background: "var(--navy-light)" }}
    >
      {/* Ambient */}
      <div className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-purple-600/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[100px]" />

      <div className="max-w-[1440px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/5 dark:bg-white/5 bg-black/5 border border-white/10 dark:border-white/10 border-black/10 rounded-full text-[0.82rem] font-semibold uppercase tracking-widest mb-5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[var(--gold-accent)] shadow-[0_0_8px_var(--gold-accent)]" />
            Why Uniguidance
          </div>
          <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-5">
            The Premium Standard in{" "}
            <span className="text-gradient">Study Abroad</span>
          </h2>
          <p className="text-[var(--text-muted)] text-[clamp(1rem,1.4vw,1.2rem)] max-w-[600px] mx-auto leading-relaxed">
            Trusted by thousands of ambitious students across 20+ countries — we
            deliver results, not just promises.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="p-8 rounded-2xl border border-white/8 dark:border-white/8 border-black/8 bg-white/4 dark:bg-white/4 bg-white/60 backdrop-blur-xl text-center relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold-glow)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl" />
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <div className="text-[var(--text-muted)] text-[0.9rem] font-medium mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex gap-5 p-7 rounded-2xl border border-white/8 dark:border-white/8 border-black/8 bg-white/4 dark:bg-white/4 bg-white/60 backdrop-blur-xl group hover:-translate-y-1 hover:border-[var(--gold-accent)]/30 transition-all duration-300"
              >
                <div className="shrink-0 w-11 h-11 rounded-xl bg-[var(--gold-accent)]/10 border border-[var(--gold-accent)]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon size={20} className="text-[var(--gold-accent)]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--text-main)] text-[1rem] mb-1.5">
                    {reason.title}
                  </h3>
                  <p className="text-[var(--text-muted)] text-[0.875rem] leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
