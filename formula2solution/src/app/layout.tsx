import type { Metadata } from "next";
import { Inter, Sora, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Formula2Solution | AI, Automation & Software Solutions",
  description:
    "Premium AI, RPA, Power BI, workflow automation, and custom software solutions for modern businesses, manufacturing, engineering, and enterprise operations.",
  keywords: [
    "AI Automation",
    "Robotic Process Automation",
    "RPA",
    "Power BI Analytics",
    "Workflow Automation",
    "Next.js Web Development",
    "Enterprise Software",
    "Manufacturing Automation",
    "Formula2Solution",
  ],
  authors: [{ name: "Formula2Solution" }],
  creator: "Formula2Solution",
  metadataBase: new URL("https://formula2solution.com"),
  openGraph: {
    title: "Formula2Solution | AI, Automation & Software Solutions",
    description:
      "We build intelligent software, AI systems, and end-to-end automation solutions that eliminate manual work, accelerate operations, and unlock business growth.",
    url: "https://formula2solution.com",
    siteName: "Formula2Solution",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Formula2Solution | AI, Automation & Software Solutions",
    description:
      "Enterprise AI & Automation solutions: RPA, Power BI, Workflow Automation, and Bespoke Engineering.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <body className="bg-[#050816] text-[#F8FAFC] antialiased selection:bg-cyan-500/30 selection:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
