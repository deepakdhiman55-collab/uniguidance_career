"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  Search,
  FileEdit,
  CheckSquare,
  Stamp,
  PartyPopper,
} from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Free Profile Evaluation",
    desc: "Submit your academic and extracurricular profile. Our AI engine and expert counselors assess your strengths, gaps, and eligibility in 24 hours.",
    duration: "Day 1",
  },
  {
    number: "02",
    icon: Search,
    title: "University Shortlisting",
    desc: "Receive a curated shortlist of 8–12 universities tailored to your profile, aspirations, and budget — sorted by admit probability.",
    duration: "Days 2–5",
  },
  {
    number: "03",
    icon: FileEdit,
    title: "Application Crafting",
    desc: "Our writers craft your SOP, LOR, and complete application package. Multiple revisions until it perfectly represents your story.",
    duration: "Weeks 1–3",
  },
  {
    number: "04",
    icon: CheckSquare,
    title: "Application Submission",
    desc: "We submit on your behalf, track application status, respond to queries, and negotiate deferrals or conditional offers.",
    duration: "Week 4",
  },
  {
    number: "05",
    icon: Stamp,
    title: "Visa Processing",
    desc: "Expert document preparation, financial structuring, mock visa interviews, and real-time status tracking until approval.",
    duration: "Weeks 5–8",
  },
  {
    number: "06",
    icon: PartyPopper,
    title: "Departure & Beyond",
    desc: "Pre-departure orientation, accommodation arrangement, airport pick-up coordination, and ongoing on-ground support.",
    duration: "Ongoing",
  },
];

export function ProcessFunnel() {
  return (
    <section
      id="process"
      className="relative w-full py-28 px-[5%] overflow-hidden bg-[var(--navy-base)]"
    >
      {/* Ambient */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-blue-800/5 blur-[140px]" />

      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/5 dark:bg-white/5 bg-black/5 border border-white/10 dark:border-white/10 border-black/10 rounded-full text-[0.82rem] font-semibold uppercase tracking-widest mb-5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[var(--gold-accent)] shadow-[0_0_8px_var(--gold-accent)]" />
            Our Process
          </div>
          <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-5">
            Your Journey to{" "}
            <span className="text-gradient">Global Education</span>
          </h2>
          <p className="text-[var(--text-muted)] text-[clamp(1rem,1.4vw,1.2rem)] max-w-[600px] mx-auto leading-relaxed">
            A clear, proven 6-step process that takes you from aspiration to
            arrival — stress-free.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--gold-accent)]/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative group"
                >
                  {/* Step number circle */}
                  <div className="relative z-10 mb-6 flex items-center gap-4">
                    <div className="w-[52px] h-[52px] rounded-full border-2 border-[var(--gold-accent)]/40 bg-[var(--navy-base)] flex items-center justify-center shrink-0 group-hover:border-[var(--gold-accent)] group-hover:shadow-[0_0_20px_var(--gold-glow)] transition-all duration-400">
                      <Icon
                        size={22}
                        className="text-[var(--gold-accent)]"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[0.72rem] font-bold uppercase tracking-widest text-[var(--gold-accent)]">
                        Step {step.number}
                      </span>
                      <span className="text-[0.78rem] text-[var(--text-muted)]">
                        {step.duration}
                      </span>
                    </div>
                  </div>

                  <div className="p-7 rounded-2xl border border-white/8 dark:border-white/8 border-black/8 bg-white/4 dark:bg-white/4 bg-white/60 backdrop-blur-xl group-hover:border-[var(--gold-accent)]/30 group-hover:-translate-y-1 transition-all duration-400">
                    <h3 className="text-[1.05rem] font-bold text-[var(--text-main)] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[0.875rem] text-[var(--text-muted)] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-bold text-[1rem] bg-gradient-to-br from-[#1e40af] to-[#3b82f6] text-white shadow-[0_8px_32px_rgba(59,130,246,0.4)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(59,130,246,0.55)] transition-all duration-300"
          >
            Start Your Journey Today →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
