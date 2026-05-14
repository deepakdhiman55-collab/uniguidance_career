"use client";

import { Compass, Mail, Phone, MapPin, ArrowUpRight, Share2, Link, MessageCircle, Video } from "lucide-react";

const LINKS = {
  Services: [
    { name: "Career Counseling", href: "/services/career-counselling" },
    { name: "University Selection", href: "/services/university-selection" },
    { name: "Admission Assistance", href: "/services/admission-assistance" },
    { name: "Scholarship Guidance", href: "/services/scholarship-guidance" },
    { name: "Visa Processing", href: "/services/visa-processing" },
  ],
  Destinations: [
    { name: "United Kingdom", href: "/study-destinations/united-kingdom" },
    { name: "Canada", href: "/study-destinations/canada" },
    { name: "Australia", href: "/study-destinations/australia" },
    { name: "USA", href: "/study-destinations/usa" },
    { name: "Europe", href: "/study-destinations/europe" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Success Stories", href: "/success-stories/testimonials" },
    { name: "Blogs", href: "/resources/blogs" },
    { name: "FAQs", href: "/resources/faqs" },
  ],
};

const SOCIALS = [
  { icon: Share2, label: "Instagram", href: "#" },
  { icon: Link, label: "LinkedIn", href: "#" },
  { icon: MessageCircle, label: "Twitter / X", href: "#" },
  { icon: Video, label: "YouTube", href: "#" },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative w-full pt-20 pb-10 px-[5%] overflow-hidden"
      style={{ background: "var(--navy-light)" }}
    >
      {/* Top border glow */}
      <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[var(--gold-accent)]/30 to-transparent" />

      {/* Ambient */}
      <div className="pointer-events-none absolute top-0 left-0 w-[500px] h-[400px] rounded-full bg-blue-900/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full bg-[var(--gold-glow)] blur-[100px]" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--gold-accent)] to-amber-500 flex items-center justify-center shadow-[0_4px_16px_var(--gold-glow)]">
                <Compass size={20} className="text-[#010409]" strokeWidth={2} />
              </div>
              <span className="text-[1.4rem] font-extrabold tracking-tight text-[var(--text-main)]">
                Uniguidance
              </span>
            </div>
            <p className="text-[var(--text-muted)] text-[0.9rem] leading-relaxed mb-7 max-w-[320px]">
              Premium study abroad and career consultancy. Trusted by 2,500+ ambitious students from the UAE to the world&apos;s top universities.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3 mb-7">
              {[
                { icon: MapPin, text: "Dubai, UAE — Al Barsha Business Center" },
                { icon: Phone, text: "+971 50 123 4567" },
                { icon: Mail, text: "hello@uniguidance.com" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-[0.875rem] text-[var(--text-muted)]">
                  <Icon size={15} className="text-[var(--gold-accent)] shrink-0" strokeWidth={1.5} />
                  {text}
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-white/10 dark:border-white/10 border-black/10 bg-white/5 dark:bg-white/5 bg-black/5 flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--gold-accent)] hover:border-[var(--gold-accent)]/40 hover:bg-[var(--gold-accent)]/5 transition-all duration-300"
                >
                  <Icon size={15} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[0.8rem] font-bold uppercase tracking-widest text-[var(--gold-accent)] mb-5">
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[0.875rem] text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors duration-200 inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 -translate-y-0.5 translate-x-0.5 transition-all duration-200"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="p-8 rounded-2xl border border-white/8 dark:border-white/8 border-black/8 bg-white/4 dark:bg-white/4 bg-white/50 backdrop-blur-xl mb-12">
          <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
            <div>
              <h3 className="text-[1.1rem] font-bold text-[var(--text-main)] mb-1">
                Get Free Study Abroad Insights
              </h3>
              <p className="text-[var(--text-muted)] text-[0.875rem]">
                Weekly tips on university selection, scholarships & visa success.
              </p>
            </div>
            <form className="flex w-full md:w-auto gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 md:w-[280px] px-5 py-3 rounded-xl bg-white/10 dark:bg-white/10 bg-black/5 border border-white/10 dark:border-white/10 border-black/10 text-[var(--text-main)] text-[0.9rem] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--gold-accent)]/60 focus:shadow-[0_0_0_3px_rgba(251,191,36,0.1)] transition-all duration-300"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl font-bold text-[0.9rem] bg-gradient-to-br from-[var(--gold-accent)] to-amber-500 text-[#010409] shadow-[0_4px_20px_var(--gold-glow)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_var(--gold-glow)] transition-all duration-300 whitespace-nowrap"
              >
                Subscribe →
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-7 border-t border-white/8 dark:border-white/8 border-black/8">
          <p className="text-[var(--text-muted)] text-[0.8rem]">
            © 2026 Uniguidance Career Consultant. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/legal/privacy" className="text-[var(--text-muted)] text-[0.8rem] hover:text-[var(--text-main)] transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/legal/terms" className="text-[var(--text-muted)] text-[0.8rem] hover:text-[var(--text-main)] transition-colors duration-200">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
