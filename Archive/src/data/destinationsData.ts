import { PageData } from "./types";

export const destinationsData: PageData[] = [
  {
    id: "uk-destination",
    category: "study-destinations",
    slug: "united-kingdom",
    title: "Study in the United Kingdom",
    subtitle: "World-class education with rich history and top-ranking universities.",
    heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2000&auto=format&fit=crop",
    stats: [
      { label: "Top Universities", value: "90+" },
      { label: "Visa Success", value: "98%" },
      { label: "Post-Study Work", value: "2 Years" },
    ],
    content: [
      {
        heading: "Academic Excellence",
        description: "The UK is home to some of the world's oldest and most prestigious universities. A degree from the UK is recognized and respected globally, giving you a competitive edge in your career.",
        features: [
          "Shorter course durations (1-year Master's)",
          "Innovative teaching methodology",
          "Focus on practical and analytical skills",
          "Diverse and multicultural environment"
        ]
      },
      {
        heading: "Student Life & Culture",
        description: "Experience a vibrant student life with access to historic landmarks, world-class museums, and diverse communities across England, Scotland, Wales, and Northern Ireland.",
        features: [
          "Free healthcare via NHS",
          "Extensive student discounts",
          "Excellent public transportation",
          "Rich cultural heritage"
        ]
      }
    ]
  },
  {
    id: "canada-destination",
    category: "study-destinations",
    slug: "canada",
    title: "Study in Canada",
    subtitle: "High quality of life, affordable education, and great post-study opportunities.",
    heroImage: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=2000&auto=format&fit=crop",
    stats: [
      { label: "Global Ranking", value: "Top 3" },
      { label: "Post-Study Work", value: "Up to 3 Yrs" },
      { label: "PR Pathways", value: "High" },
    ],
    content: [
      {
        heading: "A Welcoming Environment",
        description: "Consistently ranked as one of the best places to live, Canada offers a safe, welcoming, and inclusive environment for international students from all over the world.",
        features: [
          "Affordable tuition compared to US/UK",
          "High standard of living",
          "Bilingual environment (English/French)",
          "Safe and inclusive communities"
        ]
      },
      {
        heading: "Career and Immigration",
        description: "Canada's post-graduation work permit program allows students to stay and work for up to three years after graduation, offering a clear pathway to permanent residency.",
        features: [
          "Strong tech and engineering sectors",
          "Earn while you learn policies",
          "Favorable immigration policies",
          "High minimum wage standards"
        ]
      }
    ]
  },
  {
    id: "usa-destination",
    category: "study-destinations",
    slug: "usa",
    title: "Study in the USA",
    subtitle: "The most prestigious universities globally with flexible education systems.",
    heroImage: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2000&auto=format&fit=crop",
    stats: [
      { label: "Ivy League", value: "8" },
      { label: "STEM OPT", value: "3 Years" },
      { label: "Global Top 100", value: "30+" },
    ],
    content: [
      {
        heading: "Unmatched Academic Flexibility",
        description: "The US education system is renowned for its flexibility. You can explore different subjects before declaring a major, allowing for a highly customized educational experience.",
        features: [
          "Cutting-edge research facilities",
          "Vast array of majors and minors",
          "Optional Practical Training (OPT) opportunities",
          "Thriving campus life and sports culture"
        ]
      }
    ]
  },
  {
    id: "australia-destination",
    category: "study-destinations",
    slug: "australia",
    title: "Study in Australia",
    subtitle: "Excellent weather, friendly people, and leading universities.",
    heroImage: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2000&auto=format&fit=crop",
    stats: [
      { label: "Group of Eight", value: "Top Tier" },
      { label: "PSW Visa", value: "2-4 Years" },
      { label: "Livability", value: "High" },
    ],
    content: [
      {
        heading: "Innovation and Research",
        description: "Australia is at the forefront of new technology and innovations. Students studying here can take advantage of the country's impressive technology and research resources.",
        features: [
          "Global recognition of degrees",
          "High standard of living in cities like Melbourne & Sydney",
          "Generous post-study work rights",
          "Beautiful natural landscapes and beaches"
        ]
      }
    ]
  },
  {
    id: "europe-destination",
    category: "study-destinations",
    slug: "europe",
    title: "Study in Europe",
    subtitle: "Affordable tuition, rich history, and diverse cultures.",
    heroImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2000&auto=format&fit=crop",
    stats: [
      { label: "Schengen Area", value: "27 Countries" },
      { label: "Tuition Cost", value: "Low/Free" },
      { label: "Languages", value: "English Taught" },
    ],
    content: [
      {
        heading: "The Gateway to the World",
        description: "From Germany's engineering prowess to France's business schools, Europe offers world-class education often at a fraction of the cost of other destinations, with many programs taught entirely in English.",
        features: [
          "Travel freely across the Schengen zone",
          "Learn new languages and experience diverse cultures",
          "Highly subsidized education in countries like Germany",
          "Strong focus on sustainability and innovation"
        ]
      }
    ]
  }
];
