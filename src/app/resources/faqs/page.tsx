import { Metadata } from "next";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Uniguidance Career Consultant",
  description: "Find answers to the most common questions about studying abroad, university admissions, scholarships, and student visas.",
};

const GENERAL_FAQS = [
  {
    question: "When should I start the application process for studying abroad?",
    answer: "Ideally, you should start planning 12 to 18 months before your intended intake. This gives you ample time to prepare for standardized tests (IELTS/PTE), gather required documents, write your SOP, and apply for scholarships before deadlines close."
  },
  {
    question: "Do I need to take the IELTS or PTE?",
    answer: "In most cases, if you are applying to an English-speaking country (UK, USA, Canada, Australia), you will need to prove your English proficiency. However, some universities offer waivers if your previous medium of instruction was English. Our counselors can guide you on university-specific requirements."
  },
  {
    question: "Can I get a 100% scholarship to study abroad?",
    answer: "Fully funded scholarships are highly competitive but available for outstanding students (e.g., Chevening, Fulbright). However, partial scholarships and tuition fee waivers are much more common and easier to secure based on academic merit or extracurricular achievements."
  },
  {
    question: "Is it possible to work while studying?",
    answer: "Yes, most major study destinations allow international students to work part-time (usually up to 20 hours per week during the semester and full-time during holidays). This helps cover living expenses."
  },
  {
    question: "What is a Post-Study Work (PSW) Visa?",
    answer: "A PSW visa allows you to stay back and work in the host country after completing your degree. For example, the UK offers a 2-year PSW, while Canada offers up to 3 years depending on the length of your program. This is a great pathway to permanent residency."
  }
];

const ADMISSION_FAQS = [
  {
    question: "What is a Statement of Purpose (SOP)?",
    answer: "An SOP is a crucial essay required by universities that outlines your academic background, career goals, and reasons for choosing that specific program and institution. It's your chance to stand out beyond your grades."
  },
  {
    question: "What happens if my visa gets rejected?",
    answer: "A visa rejection is not the end of your journey. We will carefully analyze the refusal letter to understand the reasons (e.g., insufficient funds, missing documents) and guide you through the process of reapplying or exploring alternative study destinations."
  }
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#010409]">
      {/* Header */}
      <section className="pt-40 pb-20 px-[5%] bg-gradient-to-b from-blue-50/50 to-white dark:from-[#010409] dark:to-[#010409] border-b border-gray-100 dark:border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about your international education journey, answered by our experts.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 px-[5%] max-w-4xl mx-auto space-y-16">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-4">
            <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
            General Process
          </h2>
          <FAQAccordion faqs={GENERAL_FAQS} />
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-4">
            <span className="w-8 h-1 bg-indigo-600 rounded-full"></span>
            Admissions & Visas
          </h2>
          <FAQAccordion faqs={ADMISSION_FAQS} />
        </div>
      </section>
      
      {/* CTA Box */}
      <section className="pb-24 px-[5%]">
         <div className="max-w-4xl mx-auto bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/30 rounded-[2rem] p-10 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Still have questions?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">Can't find the answer you're looking for? Please chat to our friendly team.</p>
            <a href="/contact" className="inline-flex bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors">
              Contact Us
            </a>
         </div>
      </section>
    </main>
  );
}
