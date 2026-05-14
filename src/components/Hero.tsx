"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Globe, User, Mail, Phone, MapPin, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useCounselingModal } from "@/components/CounselingModalProvider";

const SLIDES = [
  {
    id: "uae",
    name: "UAE",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2500&auto=format&fit=crop",
    alt: "Dubai UAE",
  },
  {
    id: "uk",
    name: "UK",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2500&auto=format&fit=crop",
    alt: "London UK",
  },
  {
    id: "canada",
    name: "Canada",
    image:
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2500&auto=format&fit=crop",
    alt: "Toronto Canada",
  },
  {
    id: "usa",
    name: "USA",
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2500&auto=format&fit=crop",
    alt: "New York USA",
  },
];

const SLIDE_DURATION = 8000;

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const { openModal } = useCounselingModal();

  useEffect(() => {
    let startTime = Date.now();
    let animationFrame: number;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const newProgress = Math.min((elapsed / SLIDE_DURATION) * 100, 100);

      setProgress(newProgress);

      if (elapsed >= SLIDE_DURATION) {
        setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
        startTime = Date.now();
        setProgress(0);
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [currentSlide]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  return (
    <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 z-[1] bg-[var(--navy-base)]">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 w-full h-full overflow-hidden transition-opacity duration-[2000ms] ease-in-out",
              currentSlide === index ? "opacity-100 z-[2]" : "opacity-0"
            )}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className={cn(
                "w-full h-full object-cover origin-center brightness-[0.65] contrast-[1.1] saturate-[1.1]",
                currentSlide === index ? "animate-[slowPan_12s_cubic-bezier(0.25,0.1,0.25,1)_forwards]" : ""
              )}
            />
          </div>
        ))}
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 z-[3] bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.3)_0%,rgba(244,246,249,0.85)_100%),linear-gradient(to_right,rgba(244,246,249,0.9)_0%,rgba(255,255,255,0.6)_50%,rgba(244,246,249,0.9)_100%)] dark:bg-[radial-gradient(circle_at_30%_50%,rgba(1,4,9,0.3)_0%,var(--color-navy-base)_100%),linear-gradient(to_right,rgba(1,4,9,0.9)_0%,rgba(1,4,9,0.5)_50%,rgba(1,4,9,0.8)_100%)] transition-colors duration-500"></div>
      <div className="absolute top-[20%] left-0 w-full h-[60%] bg-[radial-gradient(ellipse_at_80%_30%,var(--color-gold-glow)_0%,transparent_60%)] z-[4] opacity-60 animate-[pulseGlow_5s_ease-in-out_infinite_alternate]"></div>

      {/* SVG Flight Paths Overlay */}
      <svg
        className="absolute inset-0 z-[5] opacity-80 pointer-events-none"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
            <stop offset="50%" stopColor="rgba(139, 92, 246, 0.8)" />
            <stop offset="100%" stopColor="rgba(251, 191, 36, 1)" />
          </linearGradient>
        </defs>
        {/* Origin: UAE */}
        <circle cx="800" cy="500" r="4" className="fill-white drop-shadow-[0_0_12px_#ffffff] opacity-0 animate-[fadeInDot_0.5s_ease_forwards_0.5s]" />
        
        {/* Path to UK */}
        <path d="M800,500 Q750,250 600,200" className="fill-none stroke-[url(#goldGradient)] stroke-[1.5px] [stroke-dasharray:1000] [stroke-dashoffset:1000] animate-[drawPath_4s_cubic-bezier(0.4,0,0.2,1)_forwards]" />
        <path d="M800,500 Q750,250 600,200" className="fill-none stroke-[url(#goldGradient)] stroke-[6px] blur-[4px] opacity-40 [stroke-dasharray:1000] [stroke-dashoffset:1000] animate-[drawPath_4s_cubic-bezier(0.4,0,0.2,1)_forwards]" />
        <circle cx="600" cy="200" r="3" className="fill-[var(--color-gold-accent)] drop-shadow-[0_0_8px_var(--color-gold-accent)] opacity-0 animate-[fadeInDot_0.5s_ease_forwards_3.5s]" />
        
        {/* Path to Canada/USA */}
        <path d="M800,500 Q600,-50 300,150" className="fill-none stroke-[url(#goldGradient)] stroke-[1.5px] [stroke-dasharray:1000] [stroke-dashoffset:1000] animate-[drawPath_4s_cubic-bezier(0.4,0,0.2,1)_forwards]" />
        <path d="M800,500 Q600,-50 300,150" className="fill-none stroke-[url(#goldGradient)] stroke-[6px] blur-[4px] opacity-40 [stroke-dasharray:1000] [stroke-dashoffset:1000] animate-[drawPath_4s_cubic-bezier(0.4,0,0.2,1)_forwards]" />
        <circle cx="300" cy="150" r="3" className="fill-[var(--color-gold-accent)] drop-shadow-[0_0_8px_var(--color-gold-accent)] opacity-0 animate-[fadeInDot_0.5s_ease_forwards_3.5s]" />

        {/* Path to Australia */}
        <path d="M800,500 Q1000,600 1200,650" className="fill-none stroke-[url(#goldGradient)] stroke-[1.5px] [stroke-dasharray:1000] [stroke-dashoffset:1000] animate-[drawPath_4s_cubic-bezier(0.4,0,0.2,1)_forwards]" />
        <path d="M800,500 Q1000,600 1200,650" className="fill-none stroke-[url(#goldGradient)] stroke-[6px] blur-[4px] opacity-40 [stroke-dasharray:1000] [stroke-dashoffset:1000] animate-[drawPath_4s_cubic-bezier(0.4,0,0.2,1)_forwards]" />
        <circle cx="1200" cy="650" r="3" className="fill-[var(--color-gold-accent)] drop-shadow-[0_0_8px_var(--color-gold-accent)] opacity-0 animate-[fadeInDot_0.5s_ease_forwards_3.5s]" />
      </svg>

      {/* Hero Content */}
      <div className="relative z-[10] w-full max-w-[1440px] px-[5%] flex flex-col lg:flex-row justify-between items-center gap-[60px] lg:mt-0 mt-20 text-center lg:text-left">
        
        {/* Text Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-[1.2] max-w-[720px] flex flex-col items-center lg:items-start"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/90 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-full text-[0.85rem] font-semibold text-[var(--color-text-main)] tracking-wide uppercase mb-8 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
            <span className="w-2 h-2 bg-[var(--color-gold-accent)] rounded-full shadow-[0_0_12px_var(--color-gold-accent)] animate-[shimmer_2s_infinite]"></span> 
            Uniguidance Career Consultant
          </div>
          
          <h1 className="text-[clamp(3rem,5vw,4.5rem)] font-extrabold leading-[1.1] tracking-[-1.5px] mb-6">
            Your Global <span className="text-gradient">Career</span> <br />Starts Here
          </h1>
          
          <p className="text-[clamp(1.1rem,1.5vw,1.3rem)] leading-[1.6] text-[var(--color-text-muted)] mb-12 max-w-[600px]">
            Expert Study Abroad & Visa Guidance from the UAE to the World&apos;s Top Destinations. Embark on a seamless journey to your dream university with premium, personalized counseling.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 items-center w-full lg:w-auto">
            <button 
              onClick={openModal}
              className="w-full sm:w-auto px-9 py-[18px] rounded-xl font-semibold text-base cursor-pointer transition-all duration-400 inline-flex items-center justify-center gap-3 bg-gradient-to-br from-[#1d4ed8] dark:from-[#1e40af] to-[#3b82f6] text-white border-none relative shadow-[0_8px_32px_var(--color-blue-glow)] overflow-hidden group hover:-translate-y-1 hover:shadow-[0_12px_40px_var(--color-blue-glow),0_0_0_2px_rgba(59,130,246,0.5)]"
            >
              <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-600 group-hover:left-full"></span>
              Book Free Consultation <ArrowRight size={20} />
            </button>
            <a href="#" className="w-full sm:w-auto px-9 py-[18px] rounded-xl font-semibold text-base cursor-pointer transition-all duration-400 inline-flex items-center justify-center gap-3 bg-white/80 dark:bg-white/5 text-[#0a1128] dark:text-[var(--color-text-main)] border border-black/10 dark:border-white/10 backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:-translate-y-1 hover:bg-white hover:dark:bg-white/10 hover:border-black/20 hover:dark:border-white/15 hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)]">
              <Globe size={18} /> Explore Destinations
            </a>
          </div>
        </motion.div>

        {/* SaaS Style Card Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="flex-[0.8] w-full max-w-[440px] relative z-20"
        >
          {/* Subtle glow behind card */}
          <div className="absolute -inset-[1px] rounded-[24px] bg-gradient-to-b from-blue-500/20 to-transparent -z-10 blur-xl"></div>
          
          <div className="bg-white dark:bg-[#0B1121] border border-gray-100 dark:border-white/10 rounded-[24px] p-8 shadow-2xl relative overflow-hidden">
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>

            <div className="mb-6">
              <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-1">Get Started</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Enter details for a rapid profile assessment</p>
            </div>
            
            <AssessmentForm />
          </div>
        </motion.div>
      </div>

      {/* Destination Indicators */}
      <div className="hidden lg:flex absolute bottom-10 left-[5%] items-center gap-5 z-10">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => handleSlideChange(index)}
            className={cn(
              "bg-transparent border-none text-[0.85rem] font-semibold uppercase tracking-[1px] cursor-pointer py-2 relative transition-colors duration-400 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[var(--color-gold-accent)] after:transition-all after:duration-400",
              currentSlide === index ? "text-[var(--color-text-main)] after:w-full" : "text-[var(--color-text-muted)] after:w-0"
            )}
          >
            {slide.name}
          </button>
        ))}
        <div className="w-[200px] h-[2px] bg-black/10 dark:bg-white/10 rounded-[2px] ml-5 relative overflow-hidden">
          <div 
            className="h-full bg-[var(--color-gold-accent)]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </section>
  );
}

function AssessmentForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      country: formData.get("country"),
    };

    try {
      const res = await fetch("/api/assessment/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSuccess(true);
        // Reset form
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Failed to submit", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="space-y-4">
        <div className="relative group">
          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors group-focus-within:text-blue-500" />
          <input name="fullName" type="text" className="w-full py-3 pl-11 pr-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white text-sm font-medium outline-none transition-all duration-200 placeholder:text-gray-400 focus:bg-white dark:focus:bg-[#0B1121] focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10" placeholder="Full Name" required />
        </div>
        
        <div className="relative group">
          <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors group-focus-within:text-blue-500" />
          <input name="email" type="email" className="w-full py-3 pl-11 pr-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white text-sm font-medium outline-none transition-all duration-200 placeholder:text-gray-400 focus:bg-white dark:focus:bg-[#0B1121] focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10" placeholder="Email Address" required />
        </div>
        
        <div className="relative group">
          <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors group-focus-within:text-blue-500" />
          <input name="phone" type="tel" className="w-full py-3 pl-11 pr-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white text-sm font-medium outline-none transition-all duration-200 placeholder:text-gray-400 focus:bg-white dark:focus:bg-[#0B1121] focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10" placeholder="Phone Number" required />
        </div>
        
        <div className="relative group">
          <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors group-focus-within:text-blue-500 pointer-events-none" />
          <select name="country" className="w-full py-3 pl-11 pr-10 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white text-sm font-medium outline-none transition-all duration-200 appearance-none focus:bg-white dark:focus:bg-[#0B1121] focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2394a3b8%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_12px_center]" required defaultValue="">
            <option value="" disabled className="text-gray-500">Select Study Destination</option>
            <option value="usa">United States (USA)</option>
            <option value="uk">United Kingdom (UK)</option>
            <option value="canada">Canada</option>
            <option value="australia">Australia</option>
            <option value="germany">Germany</option>
            <option value="ireland">Ireland</option>
            <option value="new_zealand">New Zealand</option>
            <option value="france">France</option>
            <option value="singapore">Singapore</option>
            <option value="uae">United Arab Emirates (Dubai)</option>
            <option value="italy">Italy</option>
            <option value="netherlands">Netherlands</option>
            <option value="sweden">Sweden</option>
            <option value="spain">Spain</option>
            <option value="switzerland">Switzerland</option>
            <option value="china">China</option>
            <option value="russia">Russia</option>
            <option value="south_korea">South Korea</option>
            <option value="japan">Japan</option>
            <option value="malaysia">Malaysia</option>
          </select>
        </div>
      </div>

      <button disabled={loading} type="submit" className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white border-none rounded-xl font-semibold text-sm transition-all duration-200 flex justify-center items-center gap-2 shadow-[0_4px_12px_rgba(37,99,235,0.2)] hover:shadow-[0_6px_16px_rgba(37,99,235,0.3)] hover:-translate-y-0.5 mt-1 disabled:opacity-70 disabled:hover:translate-y-0">
        {loading ? "Sending..." : "Start Assessment"} {!loading && <Send size={16} />}
      </button>
      
      {success && (
        <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-600 dark:text-green-400 text-sm text-center font-medium">
          Request submitted! Check your email.
        </div>
      )}
      {!success && (
        <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-2">
          100% free. No credit card required.
        </p>
      )}
    </form>
  );
}
