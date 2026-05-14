import { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Uniguidance Career Consultant",
  description: "Get in touch with Uniguidance Career Consultant. Find our global office locations, contact numbers, and email addresses.",
};

const LOCATIONS = [
  {
    city: "Dubai, UAE",
    type: "Global Headquarters",
    address: "Level 41, Emirates Towers, Sheikh Zayed Road, Dubai",
    phone: "+971 4 123 4567",
    email: "dubai@uniguidance.com",
    hours: "Mon - Sat: 9:00 AM - 6:00 PM",
  },
  {
    city: "London, UK",
    type: "European Regional Office",
    address: "15 St Botolph St, London EC3A 7BB",
    phone: "+44 20 7123 4567",
    email: "uk@uniguidance.com",
    hours: "Mon - Fri: 9:00 AM - 5:00 PM",
  },
  {
    city: "New Delhi, India",
    type: "South Asia Hub",
    address: "Connaught Place, New Delhi 110001",
    phone: "+91 11 2345 6789",
    email: "india@uniguidance.com",
    hours: "Mon - Sat: 10:00 AM - 7:00 PM",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#010409]">
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden flex items-center justify-center min-h-[50vh]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
            alt="Modern Office"
            className="w-full h-full object-cover object-center opacity-80 dark:opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white dark:from-[#010409]/90 dark:via-[#010409]/80 dark:to-[#010409]" />
        </div>

        <div className="container relative z-10 mx-auto px-[5%] text-center max-w-4xl">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 text-blue-700 dark:text-blue-400 text-sm font-bold uppercase tracking-widest">
            Get In Touch
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
            We're Here to Help
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 font-medium max-w-3xl mx-auto leading-relaxed">
            Reach out to our expert counselors worldwide. Your global education journey begins with a simple conversation.
          </p>
        </div>
      </section>

      {/* Global Locations Grid */}
      <section className="relative z-20 -mt-16 mb-24 px-[5%] max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LOCATIONS.map((loc, idx) => (
            <div key={idx} className="bg-white/80 dark:bg-white/5 backdrop-blur-2xl border border-gray-200 dark:border-white/10 rounded-3xl p-8 shadow-xl dark:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-500/20 dark:to-indigo-500/20 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-white dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{loc.city}</h3>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-6">{loc.type}</p>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-gray-400" />
                  <span>{loc.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 shrink-0 text-gray-400" />
                  <a href={`tel:${loc.phone.replace(/\s+/g, '')}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{loc.phone}</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 shrink-0 text-gray-400" />
                  <a href={`mailto:${loc.email}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{loc.email}</a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 shrink-0 text-gray-400" />
                  <span>{loc.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-16 md:py-24 px-[5%] max-w-7xl mx-auto">
        <div className="bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 rounded-[2.5rem] p-8 md:p-16 flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Send Us a Message
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              Have a specific question about universities, scholarships, or the visa process? Drop us a line and our dedicated support team will get back to you within 24 hours.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-white dark:bg-[#010409] p-4 rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">General Inquiries</h4>
                  <p className="text-gray-500 dark:text-gray-400">info@uniguidance.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white dark:bg-[#010409] p-4 rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm">
                <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">WhatsApp Support</h4>
                  <p className="text-gray-500 dark:text-gray-400">+971 50 123 4567</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <form className="bg-white dark:bg-[#010409] p-8 md:p-10 rounded-[2rem] shadow-xl border border-gray-100 dark:border-white/10">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                    <input type="text" className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                    <input type="text" className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                  <input type="email" className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                  Send Message <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
