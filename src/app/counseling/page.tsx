"use client";

import React from "react";
import { MultiStepCounselingForm } from "@/components/forms/MultiStepCounselingForm";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Trophy, Star } from "lucide-react";

export default function CounselingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200 overflow-hidden relative">
      {/* Dynamic Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-[120px] mix-blend-multiply opacity-70 animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-amber-100/50 blur-[150px] mix-blend-multiply opacity-60" />
      </div>

      <main className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-6 border border-blue-200">
              Premium Education Consulting
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-gray-900 leading-tight">
              Start Your Global <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-amber-500">
                Education Journey
              </span> Today
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Book a free expert counseling session and take the first step towards your dream university abroad.
            </p>
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 md:gap-12"
          >
            <div className="flex items-center gap-2">
              <div className="p-2 bg-green-100 rounded-lg text-green-700">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium text-gray-700">100% Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-700">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium text-gray-700">10k+ Students</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-amber-100 rounded-lg text-amber-700">
                <Trophy className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium text-gray-700">Top Universities</span>
            </div>
          </motion.div>
        </div>

        {/* Main Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <MultiStepCounselingForm />
        </motion.div>

        {/* Testimonials snippet */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
            <div className="flex justify-center gap-1 mb-2">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
            </div>
            <p className="text-gray-500">Rated 4.9/5 by our successful students</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah L.", uni: "University of Toronto", text: "The counseling session completely clarified my doubts. Now I'm in my dream university!" },
              { name: "Rahul M.", uni: "Monash University", text: "Uniguidance helped me with everything from course selection to visa processing." },
              { name: "Emily C.", uni: "NYU", text: "A premium experience. The experts know exactly what top universities are looking for." }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-blue-600">{testimonial.uni}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </main>

      <WhatsAppButton />
    </div>
  );
}
