import { PageData } from "@/data/types";
import { servicesData } from "@/data/servicesData";
import { destinationsData } from "@/data/destinationsData";

export const pageDatabase: PageData[] = [
  ...servicesData,
  ...destinationsData,
];

export function getPageData(category: string, slug: string): PageData | undefined {
  return pageDatabase.find((page) => page.category === category && page.slug === slug);
}

