import { PageData } from "./types";

export const servicesData: PageData[] = [
  {
    id: "career-counselling",
    category: "services",
    slug: "career-counselling",
    title: "Expert Career Counselling",
    subtitle: "Discover the best path for your future and map out your academic goals.",
    heroImage: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2000&auto=format&fit=crop",
    stats: [
      { label: "Students Guided", value: "10,000+" },
      { label: "Satisfaction Rate", value: "99%" },
      { label: "Countries Covered", value: "15+" },
    ],
    content: [
      {
        heading: "Personalized Roadmap",
        description: "We don't believe in a one-size-fits-all approach. Our expert counselors analyze your strengths, interests, and academic background to create a tailored roadmap for your global education.",
        features: [
          "Psychometric testing and analysis",
          "1-on-1 dedicated mentoring sessions",
          "Industry trend forecasting",
          "Long-term career mapping"
        ]
      }
    ]
  },
  {
    id: "profile-evaluation",
    category: "services",
    slug: "profile-evaluation",
    title: "AI Profile Evaluation",
    subtitle: "Data-driven assessment of your academic and extracurricular profile.",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
    stats: [
      { label: "Data Points Analyzed", value: "50+" },
      { label: "Accuracy", value: "95%" },
      { label: "Instant Results", value: "Yes" },
    ],
    content: [
      {
        heading: "Smart Admissions",
        description: "Leverage our proprietary AI engine to match your profile against historical admission data from top universities worldwide.",
        features: [
          "Chances of admission calculation",
          "Gap identification and recommendations",
          "Scholarship probability assessment",
          "Real-time university shortlisting"
        ]
      }
    ]
  },
  {
    id: "university-selection",
    category: "services",
    slug: "university-selection",
    title: "University & Course Selection",
    subtitle: "Find the perfect institution that matches your academic profile and budget.",
    heroImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2000&auto=format&fit=crop",
    stats: [
      { label: "Partner Universities", value: "500+" },
      { label: "Courses Available", value: "50k+" },
      { label: "Acceptance Rate", value: "92%" },
    ],
    content: [
      {
        heading: "Strategic Shortlisting",
        description: "Choosing the right university is the most critical step. We help you filter through thousands of universities to find your perfect match based on ROI, location, ranking, and post-study work opportunities.",
        features: [
          "Dream, Reach, and Safe university categorization",
          "Detailed course module comparisons",
          "Alumni network and placement statistics analysis",
          "Campus lifestyle and location insights"
        ]
      }
    ]
  },
  {
    id: "admission-assistance",
    category: "services",
    slug: "admission-assistance",
    title: "Admission & SOP Writing",
    subtitle: "Crafting a compelling narrative that universities cannot ignore.",
    heroImage: "https://images.unsplash.com/photo-1455390582262-044cdead27d8?q=80&w=2000&auto=format&fit=crop",
    stats: [
      { label: "SOPs Crafted", value: "15,000+" },
      { label: "Ivy League Admits", value: "250+" },
      { label: "Document Accuracy", value: "100%" },
    ],
    content: [
      {
        heading: "Mastering the Application",
        description: "Your Statement of Purpose (SOP) is the heart of your application. Our expert editorial team helps you craft essays and LORs that showcase your unique story and academic potential.",
        features: [
          "Brainstorming and narrative structuring",
          "Multiple rounds of professional editing",
          "Resume/CV optimization for academia",
          "Interview preparation for selective programs"
        ]
      }
    ]
  },
  {
    id: "scholarship-guidance",
    category: "services",
    slug: "scholarship-guidance",
    title: "Scholarship & Financial Aid",
    subtitle: "Maximize your chances of securing partial or full funding for your studies.",
    heroImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2000&auto=format&fit=crop",
    stats: [
      { label: "Funding Secured", value: "$10M+" },
      { label: "Success Rate", value: "75%" },
      { label: "Scholarships Tracked", value: "2,000+" },
    ],
    content: [
      {
        heading: "Funding Your Dream",
        description: "Don't let finances hold you back. We identify merit-based, need-based, and country-specific scholarships that you are eligible for and guide you through the complex application process.",
        features: [
          "Comprehensive scholarship database matching",
          "Assistance with scholarship essays",
          "Guidance on university-specific financial aid",
          "Education loan procurement assistance"
        ]
      }
    ]
  },
  {
    id: "visa-processing",
    category: "services",
    slug: "visa-processing",
    title: "Visa Processing & Guidance",
    subtitle: "End-to-end student visa support, documentation, and mock interviews.",
    heroImage: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?q=80&w=2000&auto=format&fit=crop",
    stats: [
      { label: "Visa Success", value: "98.5%" },
      { label: "Countries", value: "20+" },
      { label: "Processing Speed", value: "Fast-Track" },
    ],
    content: [
      {
        heading: "Seamless Immigration",
        description: "Navigating immigration laws can be stressful. Our certified visa consultants ensure your documentation is flawless, maximizing your chances of a successful visa outcome.",
        features: [
          "Complete financial documentation review",
          "Rigorous visa mock interviews",
          "Form filling and biometrics scheduling",
          "Pre-departure briefing and compliance rules"
        ]
      }
    ]
  },
  {
    id: "test-preparation",
    category: "services",
    slug: "test-preparation",
    title: "Test Preparation (IELTS/PTE)",
    subtitle: "Achieve your target score with our expert instructors and proven methodologies.",
    heroImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2000&auto=format&fit=crop",
    stats: [
      { label: "Avg. IELTS Band", value: "7.5" },
      { label: "Practice Tests", value: "100+" },
      { label: "Expert Tutors", value: "50+" },
    ],
    content: [
      {
        heading: "Mastering the Exam",
        description: "English proficiency is a key requirement for global universities. We offer comprehensive coaching for IELTS, PTE, TOEFL, and Duolingo with personalized feedback.",
        features: [
          "Intensive crash courses and regular batches",
          "AI-scored mock tests with detailed analytics",
          "Speaking practice with native-level instructors",
          "Extensive study material and vocabulary building"
        ]
      }
    ]
  },
  {
    id: "accommodation-support",
    category: "services",
    slug: "accommodation-support",
    title: "Accommodation & Forex",
    subtitle: "Settle into your new country with ease with our post-landing support.",
    heroImage: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2000&auto=format&fit=crop",
    stats: [
      { label: "Housing Partners", value: "200+" },
      { label: "Cities Covered", value: "50+" },
      { label: "Support", value: "24/7" },
    ],
    content: [
      {
        heading: "Your Home Away from Home",
        description: "We assist you long after you've received your visa. From booking safe student accommodation to setting up your bank account and forex cards, we've got you covered.",
        features: [
          "On-campus and off-campus housing booking",
          "Competitive forex rates and fee transfers",
          "International SIM cards and travel insurance",
          "Airport pickup coordination"
        ]
      }
    ]
  }
];
