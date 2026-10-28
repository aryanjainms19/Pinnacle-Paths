import type { Metadata } from "next";
import { Epilogue, Plus_Jakarta_Sans } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pinnacle Paths — Mindful Alpine Wandering & Independent Treks",
  description: "Curated independent Himalayan ridges, DIY teahouse itinerary builder, transparent local costs, and verified Proof of Summit medals.",
};

function NavbarFallback() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#fbf9f5]/85 border-b border-[#ebdcca]/40 py-2.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="clay-card rounded-full px-6 py-2 flex justify-between items-center bg-[#faf7f2] h-12">
          <div className="font-headline font-bold text-lg text-walnut flex items-center gap-2">
            <span>Pinnacle Paths</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${epilogue.variable} ${plusJakartaSans.variable} scroll-smooth antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#fbf9f5] text-[#1b1c1a] selection:bg-[#87a96b]/25 selection:text-[#5a3e2b]">
        <Suspense fallback={<NavbarFallback />}>
          <Navbar />
        </Suspense>
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
