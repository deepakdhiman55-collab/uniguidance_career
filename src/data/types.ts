export type PageData = {
  id: string;
  category: string;
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  stats?: { label: string; value: string }[];
  content: {
    heading: string;
    description: string;
    features: string[];
  }[];
};
