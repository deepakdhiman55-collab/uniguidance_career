"use client";

import { motion } from "framer-motion";
import {
  User,
  Globe,
  FileText,
  Award,
  CreditCard,
  Home,
  Plane,
} from "lucide-react";

const SERVICES = [
  {
    icon: User,
    title: "Career Counseling & Profile Evaluation",
    desc: "AI-powered assessment of your academic profile with personalized university shortlists and career pathway mapping.",
    color: "from-blue-500/20 to-indigo-600/20",
    border: "hover:border-blue-500/40",
    glow: "group-hover:shadow-blue-500/20",
  },
  {
    icon: Globe,
    title: "University Selection",
    desc: "Expert guidance to choose top universities in UK, Canada, Australia, USA & Europe matching your profile and aspirations.",
    color: "from-purple-500/20 to-violet-600/20",
    border: "hover:border-purple-500/40",
    glow: "group-hover:shadow-purple-500/20",
  },
  {
    icon: FileText,
    title: "Admission Assistance",
    desc: "Crafting compelling SOPs, LORs, and applications that stand out to admissions committees at top-ranked universities.",
    color: "from-amber-500/20 to-orange-600/20",
    border: "hover:border-amber-500/40",
    glow: "group-hover:shadow-amber-500/20",
  },
  {
    icon: Award,
    title: "Scholarship Guidance",
    desc: "Identifying and applying for merit-based, need-based, and government scholarships to maximize your funding opportunities.",
    color: "from-green-500/20 to-emerald-600/20",
    border: "hover:border-green-500/40",
    glow: "group-hover:shadow-green-500/20",
  },
  {
    icon: CreditCard,
    title: "Visa Processing & Documentation",
    desc: "End-to-end student visa application support with document preparation, mock interviews, and biometrics guidance.",
    color: "from-rose-500/20 to-pink-600/20",
    border: "hover:border-rose-500/40",
    glow: "group-hover:shadow-rose-500/20",
  },
  {
    icon: Home,
    title: "Financial Guidance & Fund Verification",
    desc: "Bank statement preparation, education loan referrals, and financial documentation structured for maximum visa approval.",
    color: "from-cyan-500/20 to-sky-600/20",
    border: "hover:border-cyan-500/40",
    glow: "group-hover:shadow-cyan-500/20",
  },
  {
    icon: Plane,
    title: "Accommodation & Pre-departure Support",
    desc: "Student housing search, airport pickup coordination, orientation programs, and on-ground support at your destination.",
    color: "from-teal-500/20 to-emerald-600/20",
    border: "hover:border-teal-500/40",
    glow: "group-hover:shadow-teal-500/20",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: any = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function Services() {
  return (
    <section
      id="services"
      className="relative w-full py-28 px-[5%] overflow-hidden bg-[var(--navy-base)]"
    >
      {/* Background ambient glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-blue-600/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[var(--gold-glow)] blur-[100px]" />

      <div className="max-w-[1440px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/5 dark:bg-white/5 bg-black/5 border border-white/10 dark:border-white/10 border-black/10 rounded-full text-[0.82rem] font-semibold uppercase tracking-widest mb-5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[var(--gold-accent)] shadow-[0_0_8px_var(--gold-accent)]" />
            Our Core Services
          </div>
          <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-extrabold tracking-[-1.5px] leading-[1.1] mb-5">
            Everything You Need to{" "}
            <span className="text-gradient">Study Abroad</span>
          </h2>
          <p className="text-[var(--text-muted)] text-[clamp(1rem,1.4vw,1.2rem)] max-w-[600px] mx-auto leading-relaxed">
            From profile evaluation to landing at your dream university — we
            handle every step with precision and care.
          </p>
        </motion.div>

        {/* Service cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className={`group relative p-7 rounded-2xl border border-white/8 dark:border-white/8 border-black/8 bg-white/4 dark:bg-white/4 bg-white/60 backdrop-blur-xl cursor-default transition-all duration-400 ${service.border} hover:-translate-y-2 hover:shadow-xl ${service.glow}`}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none`}
                />

                <div className="relative z-10">
                  <div className="mb-5 w-12 h-12 rounded-xl bg-white/5 dark:bg-white/5 bg-black/5 border border-white/10 dark:border-white/10 border-black/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon
                      size={22}
                      className="text-[var(--gold-accent)] stroke-[1.5]"
                    />
                  </div>
                  <h3 className="text-[1.05rem] font-bold text-[var(--text-main)] mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-[0.88rem] leading-relaxed text-[var(--text-muted)]">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
