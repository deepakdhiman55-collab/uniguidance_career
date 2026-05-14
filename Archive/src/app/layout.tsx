import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uniguidance Career Consultant | Premium Education",
  description: "Expert Study Abroad & Visa Guidance from the UAE to the World's Top Destinations.",
};

import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/navigation/Navigation";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { CounselingModalProvider } from "@/components/CounselingModalProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <CounselingModalProvider>
            <Navigation />
            {children}
            <WhatsAppCTA />
          </CounselingModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
