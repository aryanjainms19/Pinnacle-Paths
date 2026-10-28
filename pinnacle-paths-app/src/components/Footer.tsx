"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full pb-8 pt-8 px-4 sm:px-6 lg:px-8 mt-auto border-t border-[#ebdcca]/50">
      <div className="max-w-7xl mx-auto clay-card rounded-3xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 bg-[#faf7f2]">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sage inline-block"></span>
            <span className="font-headline text-base font-bold text-walnut">Pinnacle Paths</span>
          </div>
          <p className="text-xs text-walnut/65 mt-1 font-medium">
            © 2026 Mindful Alpine Wandering. Independent Teahouses &amp; Verified Trails.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center items-center gap-6 text-xs font-semibold text-walnut/70">
          <Link href="/explore" className="hover:text-primary transition-colors">
            Open Routes
          </Link>
          <Link href="/planner" className="hover:text-primary transition-colors">
            DIY Itinerary
          </Link>
          <Link href="/community" className="hover:text-primary transition-colors">
            Proof of Summit
          </Link>
          <Link href="/treks/annapurna-sanctuary" className="hover:text-primary transition-colors">
            Field Ethics
          </Link>
          <span className="hover:text-primary transition-colors flex items-center gap-1 cursor-default text-walnut/80">
            <span className="material-symbols-outlined text-sm text-sage">eco</span>
            Leave No Trace
          </span>
        </nav>
      </div>
    </footer>
  );
}
