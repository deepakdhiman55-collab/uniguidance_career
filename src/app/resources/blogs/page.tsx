import { Metadata } from "next";
import { ArrowRight, Clock, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Study Abroad Blogs | Uniguidance Career Consultant",
  description: "Stay updated with the latest news, visa regulations, and study abroad tips from our expert counselors.",
};

const BLOG_POSTS = [
  {
    id: 1,
    title: "Australia Student Visa Reality 2026: What You Need to Know",
    category: "Visa Guide",
    date: "May 1, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=800&auto=format&fit=crop",
    excerpt: "Recent changes in Australian visa policies have sparked questions among international students. Here's a breakdown of the new financial requirements and post-study work regulations.",
  },
  {
    id: 2,
    title: "Top 10 Scholarships for International Students in the UK",
    category: "Scholarships",
    date: "April 28, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop",
    excerpt: "Don't let tuition fees stop you from pursuing your dreams. Explore these 10 fully and partially funded scholarships available for international students at top UK universities.",
  },
  {
    id: 3,
    title: "How to Craft a Winning Statement of Purpose (SOP)",
    category: "Admission Tips",
    date: "April 15, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead27d8?q=80&w=800&auto=format&fit=crop",
    excerpt: "Your SOP is more than just an essay; it's your personal brand. Learn the expert techniques to structure your narrative and stand out to admissions committees.",
  },
  {
    id: 4,
    title: "Canada vs. UK: Which is the Best Study Destination?",
    category: "Comparisons",
    date: "April 10, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=800&auto=format&fit=crop",
    excerpt: "Comparing tuition costs, post-study work opportunities, and permanent residency pathways between two of the world's most popular study destinations.",
  },
  {
    id: 5,
    title: "IELTS vs PTE: Which Test Should You Take?",
    category: "Test Prep",
    date: "April 2, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
    excerpt: "Understanding the difference in test formats, scoring systems, and university acceptance rates to help you choose the right English proficiency exam.",
  },
  {
    id: 6,
    title: "A Day in the Life of an International Student in Dubai",
    category: "Student Life",
    date: "March 25, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop",
    excerpt: "Explore the vibrant campus life, networking opportunities, and cultural experiences of studying in the UAE's premier education hub.",
  }
];

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#010409]">
      {/* Header */}
      <section className="pt-40 pb-16 px-[5%] bg-gray-50 dark:bg-white/[0.02] border-b border-gray-100 dark:border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 text-blue-700 dark:text-blue-400 text-sm font-bold uppercase tracking-widest">
            Resources
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Our Latest Insights
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Expert advice, study abroad news, and tips to help you succeed in your global education journey.
          </p>
        </div>
      </section>

      {/* Featured Post (First one) */}
      <section className="py-12 px-[5%] max-w-7xl mx-auto">
        <div className="group relative overflow-hidden rounded-[2rem] bg-gray-900 shadow-2xl cursor-pointer">
          <div className="absolute inset-0">
            <img 
              src={BLOG_POSTS[0].image} 
              alt={BLOG_POSTS[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
          </div>
          <div className="relative z-10 p-8 md:p-16 h-full flex flex-col justify-end min-h-[500px]">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                {BLOG_POSTS[0].category}
              </span>
              <span className="flex items-center text-gray-300 text-sm font-medium">
                <Calendar className="w-4 h-4 mr-1" /> {BLOG_POSTS[0].date}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight group-hover:text-blue-300 transition-colors">
              {BLOG_POSTS[0].title}
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mb-8">
              {BLOG_POSTS[0].excerpt}
            </p>
            <div className="flex items-center text-blue-400 font-bold group-hover:text-white transition-colors">
              Read Full Article <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 px-[5%] pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.slice(1).map((post) => (
            <div key={post.id} className="group bg-white dark:bg-[#010409] border border-gray-200 dark:border-white/10 rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-shadow cursor-pointer">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-black/90 backdrop-blur-sm text-gray-900 dark:text-white text-xs font-bold uppercase tracking-wider rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 font-medium mb-4">
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-bold group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors">
                  Read Article <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
