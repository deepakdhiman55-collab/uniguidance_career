import { Metadata } from "next";
import { ArrowRight, Globe2, Users, ShieldCheck, Target, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us | Uniguidance Career Consultant",
  description: "Learn about Uniguidance Career Consultant, our mission, vision, and the expert team helping students achieve their global education dreams.",
};

const STATS = [
  { value: "10,000+", label: "Students Placed Globally" },
  { value: "500+", label: "University Partners" },
  { value: "98%", label: "Visa Success Rate" },
  { value: "15+", label: "Years of Excellence" },
];

const VALUES = [
  {
    icon: Target,
    title: "Student-Centric Approach",
    description: "Your aspirations are at the core of our guidance. We tailor every recommendation to fit your unique academic profile and career goals.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity & Transparency",
    description: "We operate with 100% transparency. No hidden fees, no biased university partnerships. Just honest, expert advice.",
  },
  {
    icon: Globe2,
    title: "Global Reach, Local Support",
    description: "From our headquarters in the UAE to our global offices, we provide localized support at every step of your international journey.",
  },
  {
    icon: Award,
    title: "Excellence in Service",
    description: "Our counselors are industry veterans, continuously trained on the latest global immigration and education policies.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#010409]">
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden flex items-center justify-center min-h-[60vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop"
            alt="Students collaborating"
            className="w-full h-full object-cover object-center opacity-80 dark:opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white dark:from-[#010409]/90 dark:via-[#010409]/80 dark:to-[#010409]" />
        </div>

        <div className="container relative z-10 mx-auto px-[5%] text-center max-w-4xl">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 text-blue-700 dark:text-blue-400 text-sm font-bold uppercase tracking-widest">
            Our Story
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
            Empowering the Global Leaders of Tomorrow
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 font-medium max-w-3xl mx-auto leading-relaxed">
            We bridge the gap between ambitious students and the world's most prestigious educational institutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 -mt-16 mb-24 px-[5%] max-w-6xl mx-auto">
        <div className="bg-white/80 dark:bg-white/5 backdrop-blur-2xl border border-gray-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-xl dark:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-gray-200 dark:divide-white/10">
            {STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center pt-8 md:pt-0">
                <span className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mb-2">
                  {stat.value}
                </span>
                <span className="text-sm md:text-base font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 px-[5%] max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              To provide ethical, transparent, and highly personalized international education counseling. We aim to demystify the complex study abroad process, enabling students to access world-class education that aligns perfectly with their career aspirations and financial capabilities.
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Vision
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              To be the most trusted and universally recognized global education consultancy, setting the gold standard for student success, visa acquisition, and university placement worldwide.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent dark:from-blue-500/10 rounded-[2rem] transform translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" 
              alt="Team Strategy" 
              className="relative rounded-[2rem] shadow-2xl object-cover h-[500px] w-full"
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-[5%] bg-gray-50 dark:bg-white/[0.02] border-y border-gray-100 dark:border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose Uniguidance?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our core values dictate every interaction, ensuring you receive the highest caliber of professional service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((val, idx) => (
              <div key={idx} className="bg-white dark:bg-[#010409] border border-gray-100 dark:border-white/10 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mb-6">
                  <val.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {val.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Accreditations / Partners */}
      <section className="py-24 px-[5%] max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-12">
          Recognized By Global Educational Bodies
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 dark:opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Placeholder logos for ICEF, British Council, AIRC, etc. */}
          <div className="flex items-center gap-3 font-bold text-2xl"><BookOpen className="w-8 h-8"/> ICEF Agency</div>
          <div className="flex items-center gap-3 font-bold text-2xl"><Users className="w-8 h-8"/> British Council</div>
          <div className="flex items-center gap-3 font-bold text-2xl"><ShieldCheck className="w-8 h-8"/> AIRC Certified</div>
          <div className="flex items-center gap-3 font-bold text-2xl"><Globe2 className="w-8 h-8"/> PIER Network</div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-[5%]">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-900 rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 opacity-20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Experience the Uniguidance Difference?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Our expert counselors are ready to map out your journey to the world's finest institutions.
            </p>
            {/* The Counseling Modal will handle the logic, we just render a styled button. 
                Wait, this button doesn't have openModal context because it's a server component. 
                I'll use a Client Component for the CTA button to trigger the modal, or just make it an anchor to #. */}
            <a href="#book-consultation" className="inline-flex items-center justify-center h-14 px-8 text-base font-bold text-blue-900 bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-300">
              Schedule Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
