"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Explore Treks", href: "/explore" },
    { label: "DIY Planner", href: "/planner" },
    { label: "Community & Medals", href: "/community" },
    { label: "Trail Guide", href: "/treks/annapurna-sanctuary" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#fbf9f5]/85 border-b border-[#ebdcca]/40 py-2.5 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="clay-card rounded-full px-4 sm:px-6 py-2 flex justify-between items-center bg-[#faf7f2]">
          {/* Brand Logo */}
          <Link
            href="/"
            className="font-headline font-bold text-lg sm:text-xl text-walnut flex items-center gap-2.5 tracking-tight group"
          >
            <div className="w-8 h-8 rounded-full bg-sage/20 flex items-center justify-center text-primary shadow-inner group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-[19px] text-[#486730]">landscape</span>
            </div>
            <span>Pinnacle Paths</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 p-1 rounded-full bg-[#f3efe8] shadow-inner text-xs font-semibold">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full transition-all duration-150 ${
                    isActive
                      ? "bg-primary text-white shadow-clay-pill-active font-bold"
                      : "text-walnut/75 hover:text-walnut hover:bg-white/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Trailing Actions */}
          <div className="flex items-center gap-2.5">
            <Link
              href="/planner"
              className="clay-button-sage text-white text-xs font-bold px-4 py-2 rounded-full hidden sm:inline-flex items-center gap-1.5 transition-all"
            >
              <span className="material-symbols-outlined text-[16px]">explore</span>
              <span>Start Trail</span>
            </Link>

            <Link
              href="/community"
              aria-label="Trekker badge profile"
              className="clay-pill-subtle w-8 h-8 rounded-full hidden sm:flex items-center justify-center text-walnut/80 hover:text-walnut transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">military_tech</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-8 h-8 rounded-full clay-pill-subtle flex items-center justify-center text-walnut"
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-[20px]">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-4 rounded-3xl glass-clay-card flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-bold flex items-center justify-between ${
                    isActive
                      ? "bg-primary text-white shadow-sm"
                      : "text-walnut hover:bg-white/70"
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
                </Link>
              );
            })}
            <div className="pt-2 border-t border-walnut/10 flex items-center gap-2">
              <Link
                href="/planner"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center clay-button-sage text-white text-xs font-bold py-2.5 rounded-full"
              >
                Start Trail Planner
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
