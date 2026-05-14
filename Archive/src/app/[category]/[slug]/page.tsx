import { getPageData } from "@/lib/pageData";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

type Props = {
  params: Promise<{
    category: string;
    slug: string;
  }>;
};

export default async function DynamicDropdownPage({ params }: Props) {
  const { category, slug } = await params;
  
  const pageData = getPageData(category, slug);

  // If no data exists in our mock DB, show a beautiful "Coming Soon" or fallback UI
  if (!pageData) {
    return (
      <main className="min-h-screen bg-[#010409] flex flex-col items-center justify-center pt-24 px-4 text-center">
        <div className="max-w-2xl">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold tracking-wide">
            Coming Soon
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            We're building something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#var(--gold-accent)]">amazing</span> here.
          </h1>
          <p className="text-lg text-gray-400 mb-10">
            The {slug.replace(/-/g, " ")} page is currently under construction by our experts. Check back soon for comprehensive details.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors"
          >
            Return Home <ArrowRight size={18} />
          </a>
        </div>
      </main>
    );
  }

  // Render the generic premium layout
  return (
    <main className="min-h-screen bg-white dark:bg-[#010409]">
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden flex items-center justify-center min-h-[60vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={pageData.heroImage}
            alt={pageData.title}
            className="w-full h-full object-cover object-center opacity-80 dark:opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/50 to-white dark:from-[#010409]/90 dark:via-[#010409]/70 dark:to-[#010409]" />
        </div>

        <div className="container relative z-10 mx-auto px-[5%] text-center max-w-4xl">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 text-blue-700 dark:text-blue-400 text-sm font-bold uppercase tracking-widest">
            {pageData.category.replace(/-/g, " ")}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
            {pageData.title}
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 font-medium max-w-3xl mx-auto leading-relaxed">
            {pageData.subtitle}
          </p>
        </div>
      </section>

      {/* Stats Section (Glassmorphism overlap) */}
      {pageData.stats && pageData.stats.length > 0 && (
        <section className="relative z-20 -mt-16 mb-20 px-[5%] max-w-6xl mx-auto">
          <div className="bg-white/80 dark:bg-white/5 backdrop-blur-2xl border border-gray-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-xl dark:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-white/10">
              {pageData.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center pt-8 md:pt-0">
                  <span className="text-4xl md:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-2">
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
      )}

      {/* Dynamic Content Sections */}
      <section className="py-16 md:py-24 px-[5%] max-w-5xl mx-auto">
        <div className="space-y-24">
          {pageData.content.map((section, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  {section.heading}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {section.description}
                </p>
              </div>
              <div className="md:w-1/2 bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 rounded-3xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  {section.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-4 text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                      <span className="font-medium text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Bottom Section */}
      <section className="py-24 px-[5%]">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-900 rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Book a free, 1-on-1 consultation with our expert advisors and let's turn your global education dreams into reality.
            </p>
            <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
