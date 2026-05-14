import { Metadata } from "next";
import { Star, Play, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Student Testimonials | Uniguidance Career Consultant",
  description: "Read success stories and testimonials from students who achieved their study abroad dreams with Uniguidance Career Consultant.",
};

const TESTIMONIALS = [
  {
    id: 1,
    name: "Ayesha Rahman",
    university: "University of Warwick, UK",
    course: "MSc Finance",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop",
    quote: "Uniguidance transformed my dream into reality. From shortlisting universities to helping me secure a 50% scholarship, their dedication was unmatched. My counselor was available 24/7 during the stressful visa processing period.",
    videoUrl: "#",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    university: "University of Toronto, Canada",
    course: "BSc Computer Science",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    quote: "The AI Profile Evaluator gave me a realistic picture of where I stood. But it was the personalized SOP writing assistance that got me into UofT. They didn't just write it for me; they helped me discover my own voice.",
    videoUrl: "#",
  },
  {
    id: 3,
    name: "Sarah Al Mansoori",
    university: "New York University, USA",
    course: "MA Media Studies",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    quote: "Applying to the US felt overwhelming, but the team at Uniguidance broke it down into manageable steps. Their mock visa interviews were identical to the real thing, which gave me immense confidence.",
    videoUrl: "#",
  },
  {
    id: 4,
    name: "David Chen",
    university: "University of Melbourne, Australia",
    course: "Master of Engineering",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    quote: "What impressed me most was their post-landing support. When I arrived in Melbourne, my accommodation was already sorted, and they guided me on setting up my local bank account within the first week.",
    videoUrl: "#",
  },
  {
    id: 5,
    name: "Priya Patel",
    university: "Technical University of Munich, Germany",
    course: "MSc Data Engineering",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400&auto=format&fit=crop",
    quote: "Navigating the European admission process is entirely different. Uniguidance had specialized experts for Germany who knew exactly how to format my CV and motivation letter according to European standards.",
    videoUrl: "#",
  },
  {
    id: 6,
    name: "Omar Tariq",
    university: "McGill University, Canada",
    course: "BEng Mechanical Engineering",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    quote: "The transparency is what I loved. I had full access to my application portal, and they never pushed me towards a partnered university over a better-ranked one. Pure ethical consulting.",
    videoUrl: "#",
  }
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#010409]">
      {/* Header */}
      <section className="pt-40 pb-16 px-[5%] bg-gray-50 dark:bg-white/[0.02] border-b border-gray-100 dark:border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent dark:from-blue-900/20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 text-blue-700 dark:text-blue-400 text-sm font-bold uppercase tracking-widest">
            Success Stories
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Hear From Our Global Scholars
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            10,000+ success stories and counting. See how we've helped ambitious students like you secure admissions to top universities worldwide.
          </p>
        </div>
      </section>

      {/* Video Testimonial Highlight (Mock) */}
      <section className="py-20 px-[5%] max-w-7xl mx-auto">
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-gray-900">
          <div className="aspect-video relative">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop" 
              alt="Student Campus"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 hover:bg-white/30 hover:scale-110 transition-all duration-300 group">
                <Play className="w-8 h-8 text-white ml-1 group-hover:text-blue-400 transition-colors" />
              </button>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 bg-gradient-to-t from-black/90 to-transparent">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">"Uniguidance changed my life trajectory."</h2>
              <p className="text-blue-300 font-medium">Michael Chang — Stanford University (Class of 2027)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="pb-24 px-[5%] max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white dark:bg-[#010409] border border-gray-100 dark:border-white/10 rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-shadow relative group">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-blue-50 dark:text-blue-900/20 group-hover:text-blue-100 dark:group-hover:text-blue-900/40 transition-colors" />
              
              <div className="flex items-center gap-4 mb-8">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-100 dark:border-blue-900"
                />
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{testimonial.university}</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-bold">{testimonial.course}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed relative z-10 italic">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA Box */}
      <section className="pb-24 px-[5%]">
         <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-900 rounded-[2rem] p-12 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-4">Be Our Next Success Story</h3>
              <p className="text-blue-100 mb-8 max-w-xl mx-auto">Join thousands of students who have trusted us with their future. Let's build your profile today.</p>
              <a href="#book-consultation" className="inline-flex bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg">
                Start Your Journey Now
              </a>
            </div>
         </div>
      </section>
    </main>
  );
}
