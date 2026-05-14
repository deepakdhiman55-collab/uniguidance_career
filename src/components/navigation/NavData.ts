import {
  Globe,
  User,
  MapPin,
  GraduationCap,
  Briefcase,
  FileText,
  BadgeCheck,
  Calculator,
  Search,
  BookOpen,
  Award,
  Video,
  FileQuestion,
  Plane,
  Building,
} from "lucide-react";

export type NavItem = {
  name: string;
  description?: string;
  href: string;
  icon?: any;
  highlight?: boolean;
};

export type NavCategory = {
  name: string;
  type: "link" | "mega-menu" | "dropdown";
  href?: string;
  items?: NavItem[];
  featured?: {
    title: string;
    description: string;
    image: string;
    href: string;
  };
};

export const NAVIGATION: NavCategory[] = [
  { name: "Home", href: "/", type: "link" },
  {
    name: "Study Destinations",
    type: "mega-menu",
    items: [
      { name: "United Kingdom", description: "World-class education with top ranking universities.", href: "/study-destinations/united-kingdom", icon: Building },
      { name: "Canada", description: "High quality of life and great post-study work opportunities.", href: "/study-destinations/canada", icon: MapPin },
      { name: "Australia", description: "Excellent weather, friendly people, and leading universities.", href: "/study-destinations/australia", icon: Globe },
      { name: "USA", description: "The most prestigious universities globally with flexible education.", href: "/study-destinations/usa", icon: Award },
      { name: "Europe", description: "Affordable tuition, rich history, and diverse cultures.", href: "/study-destinations/europe", icon: BookOpen },
      { name: "Compare Countries", description: "AI tool to find the best fit for your profile.", href: "/tools/compare-countries", icon: Search, highlight: true },
    ],
    featured: {
      title: "Why Study Abroad in 2026?",
      description: "Discover the latest trends, scholarship opportunities, and top emerging student destinations for the upcoming academic year.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop",
      href: "#",
    }
  },
  {
    name: "Services",
    type: "mega-menu",
    items: [
      { name: "Career Counselling", description: "Discover the best path for your future and map out your goals.", href: "/services/career-counselling", icon: Briefcase },
      { name: "Profile Evaluation", description: "AI-powered assessment of your academic and extracurricular profile.", href: "/services/profile-evaluation", icon: User, highlight: true },
      { name: "University Selection", description: "Find the right university perfectly matching your aspirations.", href: "/services/university-selection", icon: GraduationCap },
      { name: "Admission Assistance", description: "Expert crafting of SOP, LOR, and full application review.", href: "/services/admission-assistance", icon: FileText },
      { name: "Scholarship Guidance", description: "Maximize your chances of securing partial or full funding.", href: "/services/scholarship-guidance", icon: BadgeCheck },
      { name: "Visa Processing", description: "End-to-end student visa support, documentation & mock interviews.", href: "/services/visa-processing", icon: Plane },
    ],
    featured: {
      title: "100% Transparent Process",
      description: "Track your entire application journey in real-time through our exclusive student portal.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
      href: "#",
    }
  },
  {
    name: "Tools",
    type: "dropdown",
    items: [
      { name: "AI Profile Evaluator", href: "/tools/profile-evaluator", icon: User },
      { name: "Visa Success Calculator", href: "/tools/visa-calculator", icon: Calculator },
      { name: "Course Finder", href: "/tools/course-finder", icon: Search },
      { name: "Cost Calculator", href: "/tools/cost-calculator", icon: Calculator },
    ]
  },
  {
    name: "Success Stories",
    type: "dropdown",
    items: [
      { name: "Student Testimonials", href: "/success-stories/testimonials", icon: Video },
      { name: "Case Studies", href: "/success-stories/case-studies", icon: FileText },
    ]
  },
  {
    name: "Resources",
    type: "dropdown",
    items: [
      { name: "Blogs", href: "/resources/blogs", icon: BookOpen },
      { name: "Visa Guides", href: "/resources/visa-guides", icon: Plane },
      { name: "FAQs", href: "/resources/faqs", icon: FileQuestion },
    ]
  },
  { name: "About", href: "/about", type: "link" },
];
