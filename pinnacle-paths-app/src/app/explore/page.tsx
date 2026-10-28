"use client";

import Link from "next/link";
import { useState } from "react";

interface Trek {
  id: string;
  name: string;
  slug: string;
  altitude: string;
  elevationMeters: number;
  costPerDay: string;
  difficulty: "Light Work" | "Main Character" | "Final Boss";
  tag: string;
  category: "Solo Friendly" | "Teahouse Routes" | "High Passes";
  image: string;
  days: number;
  description: string;
  keyFeature: string;
}

const TREKS_DATA: Trek[] = [
  {
    id: "annapurna-sanctuary",
    name: "Annapurna Sanctuary",
    slug: "annapurna-sanctuary",
    altitude: "4,130m",
    elevationMeters: 4130,
    costPerDay: "₹1,800/day",
    difficulty: "Main Character",
    tag: "High Pass",
    category: "High Passes",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBhC1mgGABZ2p2aU9eDp4VafbxkWDALASR2foFIjb5W0gNdw_9zK4MxCrP1NHsZy0Snr39qy5h4c_0XqdG2evyn-ToK6Ia88XM3hjB9PI598BGu5CVxyxmwXCT8E08sp8EU8_DAGRZaT-GO7yuIk_A3JkU0tRrqpAR8EeFJ4O8T3LCOCfkbNciQ7aNZe8XqpMQtZuYogw6jyOQST2Y3NPBtxXopl7b_BUXBgLp96Wu6fGyTs-R6kkUd3Q",
    days: 11,
    description:
      "A sacred amphitheater ringed by 10 colossal 7,000m+ Himalayan peaks, starting from sub-tropical river rhododendrons into high glacial moraine.",
    keyFeature: "Machapuchare base camp & Gurung hospitality",
  },
  {
    id: "langtang-kyanjin",
    name: "Langtang & Kyanjin Ri",
    slug: "langtang-kyanjin",
    altitude: "4,773m",
    elevationMeters: 4773,
    costPerDay: "₹1,550/day",
    difficulty: "Light Work",
    tag: "Quiet Valley",
    category: "Solo Friendly",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCu2jyGd5vlfTGE0nX_PTmu3f_3LVX73LRKtKxouAW6mjpIGVUcNnByj797T_RJu3bHl8KwAdlR02c0mwYxER5z15y0ltB7NPo-w94qKGEgd9uOTk8xQ8R91EyFt3ORi6aVRn7FFjy6oBq5hADOSRcLzGr5focnJpYtN7OPBq0r58G8vf4wwTuTlxduH1Pyg9XmUkmqDAWG6isFxjHjz_O-4FXwjbxsC_BKCBE4H-bp8vuLgsCEgfcU5Q",
    days: 7,
    description:
      "The 'Valley of Glaciers' close to Kathmandu. Intimate Tibetan culture, world-famous high altitude yak cheese, and serene trails without crowds.",
    keyFeature: "Low crowd density (12/100) & direct teahouses",
  },
  {
    id: "manaslu-circuit",
    name: "Manaslu & Larkya La",
    slug: "manaslu-circuit",
    altitude: "5,106m",
    elevationMeters: 5106,
    costPerDay: "₹2,800/day",
    difficulty: "Final Boss",
    tag: "Remote Pass",
    category: "High Passes",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAemqDPBZYYqsNWFAUpthImu5VUYpzgVZrpUW934pjTDRpJ1sgolSlrM25AljU7bQvuEBEPdILEoTHOAy7xQDeb4p6YqOWuUX6HXZ0CRraUMgqC321q4n6KaIIP7rLTMMsC_0P7evlcafY7QGRK0JiIX98KI0DecinhIm9pnvXN9krvsuuikLWpNPUtM-wfkKaxl1MfqO2LhVDAzkO37RctAX9DzJxdQL-ZKl52DdmagYqXT2WRuGjjxw",
    days: 14,
    description:
      "Circumnavigating the world's 8th highest mountain. Ancient Bhotia gompas, dramatic suspension bridges, and a wild crossing over Larkya La.",
    keyFeature: "Restricted wild trail with alpine pass telemetry",
  },
  {
    id: "mardi-himal",
    name: "Mardi Himal Ridge",
    slug: "mardi-himal",
    altitude: "4,500m",
    elevationMeters: 4500,
    costPerDay: "₹1,650/day",
    difficulty: "Main Character",
    tag: "Razor Ridge",
    category: "Teahouse Routes",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuALOubkObSRj8-8t7gWVAx6uFVbEP7jjxtJ65NY5ulGCL1z8u11SWWFyBH94tpFd5tIIzjqW2QmGzfeLPZbBikAo0YYLuvI_HB5bXYoCJIEn1qdyHo_lKr4dIN4mk4pNHFYlfhyzYUU7yCdNWE1FI1RV5AtX9aAdx_KRZ2JBEl-NPi1OvBs2h-UBkDE6v9RLylsozaJNp4w-qLgHaSbkcrTM7XumO0E4PVw5dimz1SBVk92F9mjUihW6Q",
    days: 5,
    description:
      "An exhilarating ridge route tracking directly beneath the soaring spine of Machapuchare with cloud seas lapping against cliffside teahouses.",
    keyFeature: "Unbroken 360° panoramas & fast 5-day tempo",
  },
  {
    id: "ghorepani-poon-hill",
    name: "Ghorepani Poon Hill",
    slug: "ghorepani-poon-hill",
    altitude: "3,210m",
    elevationMeters: 3210,
    costPerDay: "₹1,500/day",
    difficulty: "Light Work",
    tag: "Sunrise Vista",
    category: "Solo Friendly",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDG5sdkmCmTRdU-q7w57XI0AFpL0heSxCyD0RbrC6Ys5DyON3k0k2GKvxnGqkJ3HV0RmaDJdUB3uob5hzguZbkDOduZIJuqQJ6P-TXl2XtRmHBATnJA_4u0KmR_qM7qKmxB5suS2DxxBKHk5Dy8L6f2sN7lbR1Vqd0WVpCZZU7HAVQGJJauarkigE1gIGBo3sn2k4E97WzsvJGXvgWW-vgjwivocLcJeDtJWW7QZih2HV3p4068tBr-KA",
    days: 4,
    description:
      "A classic beginner-friendly Himalayan trek through ancient mossy oak and red rhododendron forests leading to world-famous sunrise over Dhaulagiri.",
    keyFeature: "Gentle acclimatization & friendly village lodges",
  },
  {
    id: "gokyo-cho-la",
    name: "Gokyo & Cho La Pass",
    slug: "gokyo-cho-la",
    altitude: "5,368m",
    elevationMeters: 5368,
    costPerDay: "₹2,500/day",
    difficulty: "Final Boss",
    tag: "Turquoise Lakes",
    category: "High Passes",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAw97QmNd3RUHbVUkoem7CXmNsF7Ws9DNyAvWCZAI9T_g3mbRg_97A9Vkh6H7oGfHJ3j0RSn2P9sIc_Z81E7AJuh3glizRAEJ21SqyW0GMhvsCrDDy9lCgVzIVy3RBf6LXyWijCC71xdiAbt997t-6qmsedr6tZtLxVMxEUKV2O5itJ-PoWCO4Ac9Ct2kTdKagy0ZAcMwI7vNTogm_LaB3Z14N9VCCEmHjLp39Bogd-wXLcm0-G4iTGOQ",
    days: 12,
    description:
      "Glacial high pass traverse bypassing crowded Everest highway via 5 pristine cobalt and turquoise alpine lakes and the Ngozumpa Glacier.",
    keyFeature: "Highest freshwater alpine lake chain in the world",
  },
];

export default function ExplorePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Treks");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalTrek, setActiveModalTrek] = useState<Trek | null>(null);

  const filterChips = ["All Treks", "Solo Friendly", "Teahouse Routes", "High Passes"];

  const filteredTreks = TREKS_DATA.filter((trek) => {
    const matchesCategory =
      selectedCategory === "All Treks" || trek.category === selectedCategory;
    const matchesSearch =
      trek.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trek.altitude.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trek.difficulty.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 space-y-8">
      {/* Header / Alpine Status */}
      <section className="max-w-3xl mx-auto text-center pt-2 pb-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#faf7f2] border border-amber-glow/40 shadow-sm mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-glow animate-pulse"></span>
          <span className="text-xs font-bold text-amber-glow uppercase tracking-wider">
            In Season • Live Alpine Status
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-headline font-bold text-walnut tracking-tight">
          Open Himalayan Treks
        </h1>
        <p className="mt-3 text-sm md:text-base text-walnut/70 font-medium max-w-xl mx-auto">
          Independent trails with transparent daily costs, direct village teahouse booking, and live trail conditions.
        </p>
      </section>

      {/* CLAY TRAIL HEALTH RADAR (Glassmorphic + Clay surface) */}
      <section className="rounded-3xl p-5 md:p-6 glass-clay-card border border-white/80">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3.5 w-full md:w-auto">
            <div className="w-12 h-12 rounded-2xl bg-primary-container text-white flex items-center justify-center shadow-md">
              <span className="material-symbols-outlined text-2xl">radar</span>
            </div>
            <div>
              <div className="text-[11px] font-bold text-amber-glow uppercase tracking-wider">
                Himalaya Telemetry Pulse
              </div>
              <div className="text-base font-bold text-walnut">
                Central &amp; Western Corridor
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full md:w-auto justify-start md:justify-end">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-2xl glass-pill">
              <span className="material-symbols-outlined text-primary text-lg">partly_cloudy_day</span>
              <span className="text-xs font-bold text-walnut">Stable Ridge Winds</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-2xl glass-pill">
              <span className="material-symbols-outlined text-primary text-lg">cottage</span>
              <span className="text-xs font-bold text-walnut">94% Lodges Open</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-2xl glass-pill">
              <span className="material-symbols-outlined text-primary text-lg">verified_user</span>
              <span className="text-xs font-bold text-walnut">Passes Cleared</span>
            </div>
          </div>
        </div>
      </section>

      {/* TACTILE FILTER CHIPS & SEARCH */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Category Filter Chips */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
          {filterChips.map((chip) => {
            const isSelected = selectedCategory === chip;
            return (
              <button
                key={chip}
                type="button"
                onClick={() => setSelectedCategory(chip)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                  isSelected
                    ? "clay-pill-active shadow-md"
                    : "clay-pill-subtle text-walnut hover:bg-white bg-[#faf7f2]"
                }`}
              >
                {chip}
              </button>
            );
          })}
        </div>

        {/* Search input with debossed inset treatment */}
        <div className="relative min-w-[240px]">
          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-walnut/50 text-lg">
            search
          </span>
          <input
            type="text"
            placeholder="Search altitude, pass, name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full glass-debossed text-xs font-semibold text-walnut placeholder:text-walnut/40 focus:outline-none focus:ring-2 focus:ring-sage"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-walnut/60 hover:text-walnut"
            >
              clear
            </button>
          )}
        </div>
      </div>

      {/* CLAY & GLASS TREK DISCOVERY GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {filteredTreks.map((trek) => (
          <article
            key={trek.id}
            className="group rounded-3xl p-3.5 glass-clay-card glass-clay-card-hover flex flex-col justify-between"
          >
            <div>
              {/* Image Preview with Badges */}
              <div className="relative h-60 rounded-2xl overflow-hidden shadow-inner bg-[#eae5dc]">
                <img
                  alt={trek.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={trek.image}
                  loading="lazy"
                />

                {/* Difficulty Pill Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#faf7f2]/90 text-walnut backdrop-blur-md shadow-sm border border-white">
                    {trek.difficulty}
                  </span>
                </div>

                {/* Amber Glow Altitude Accent */}
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-glow text-white shadow-md flex items-center gap-1 font-mono">
                    <span className="material-symbols-outlined text-[13px]">terrain</span>
                    {trek.altitude}
                  </span>
                </div>

                {/* Days Badge */}
                <div className="absolute bottom-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#1b1c1a]/70 text-white backdrop-blur-sm">
                    {trek.days} Days
                  </span>
                </div>
              </div>

              {/* Title & Micro Meta */}
              <div className="px-2 pt-4 pb-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                    {trek.tag}
                  </span>
                  <span className="text-[11px] text-walnut/60 font-semibold">
                    {trek.category}
                  </span>
                </div>
                <h3 className="text-xl font-headline font-bold text-walnut tracking-tight group-hover:text-primary transition-colors">
                  {trek.name}
                </h3>
                <p className="text-xs text-walnut/70 mt-1 line-clamp-2 leading-relaxed">
                  {trek.description}
                </p>
              </div>
            </div>

            {/* Pricing & Actions */}
            <div className="px-2 pt-3 border-t border-[#ebdcca]/60 flex items-center justify-between mt-2">
              <div>
                <span className="text-xs text-walnut/50 font-semibold block">Estimated</span>
                <span className="text-sm font-bold text-primary font-mono bg-primary-container/20 px-2.5 py-0.5 rounded-xl inline-block">
                  {trek.costPerDay}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveModalTrek(trek)}
                  className="px-3.5 py-2 rounded-full text-xs font-bold bg-[#faf7f2] border border-white text-walnut shadow-sm hover:bg-white transition-all flex items-center gap-1"
                >
                  <span>Quick View</span>
                </button>
                <Link
                  href={trek.slug === "annapurna-sanctuary" ? "/treks/annapurna-sanctuary" : "/planner"}
                  className="px-3.5 py-2 rounded-full text-xs font-bold clay-button-sage text-white shadow-sm flex items-center gap-1"
                >
                  <span>Details</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredTreks.length === 0 && (
        <div className="p-12 text-center rounded-3xl glass-clay-card max-w-md mx-auto">
          <span className="material-symbols-outlined text-4xl text-walnut/40 mb-2">search_off</span>
          <h3 className="font-headline font-bold text-walnut text-lg">No treks found</h3>
          <p className="text-xs text-walnut/70 mt-1">Try resetting your filter or search keywords.</p>
          <button
            onClick={() => {
              setSelectedCategory("All Treks");
              setSearchQuery("");
            }}
            className="mt-4 px-4 py-2 rounded-full clay-button-cream text-xs font-bold"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* MINIMAL TACTILE CTA BANNER */}
      <section className="rounded-3xl glass-clay-card p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-glow/20 text-amber-glow flex items-center justify-center clay-pill-subtle shrink-0">
            <span className="material-symbols-outlined text-2xl">route</span>
          </div>
          <div>
            <h2 className="text-xl font-headline font-bold text-walnut">Custom Trail Blueprint</h2>
            <p className="text-xs font-semibold text-walnut/70">
              Build your customized independent route with transparent teahouse budgets in 2 minutes.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/planner"
            className="px-6 py-3 rounded-full clay-button-sage text-white text-xs font-bold transition-all active:scale-95"
          >
            Launch DIY Planner
          </Link>
        </div>
      </section>

      {/* QUICK VIEW MODAL */}
      {activeModalTrek && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setActiveModalTrek(null)}
        >
          <div
            className="glass-clay-card rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-5 bg-[#faf7f2] relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalTrek(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full clay-pill-subtle flex items-center justify-center text-walnut hover:text-primary"
            >
              <span className="material-symbols-outlined text-base">close</span>
            </button>

            <div className="flex items-center gap-3">
              <span className="clay-pill-amber text-white text-[11px] font-bold px-3 py-0.5 rounded-full">
                {activeModalTrek.difficulty}
              </span>
              <span className="text-xs font-bold text-primary font-mono">
                {activeModalTrek.costPerDay}
              </span>
            </div>

            <div>
              <h2 className="text-2xl font-headline font-bold text-walnut">
                {activeModalTrek.name}
              </h2>
              <p className="text-xs text-amber-glow font-bold mt-0.5">
                Max Apex: {activeModalTrek.altitude} • {activeModalTrek.days} Days Recommended
              </p>
            </div>

            <p className="text-sm text-walnut/80 leading-relaxed font-normal">
              {activeModalTrek.description}
            </p>

            <div className="clay-card-inset p-4 rounded-2xl bg-[#f3efe8] space-y-2 text-xs">
              <div className="flex items-center gap-2 text-walnut font-bold">
                <span className="material-symbols-outlined text-primary text-base">verified</span>
                <span>Highlight Feature:</span>
              </div>
              <p className="text-walnut/70 pl-6">{activeModalTrek.keyFeature}</p>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setActiveModalTrek(null)}
                className="px-4 py-2 rounded-full clay-button-cream text-xs font-bold"
              >
                Close
              </button>
              <Link
                href="/planner"
                className="px-5 py-2.5 rounded-full clay-button-sage text-white text-xs font-bold flex items-center gap-1"
              >
                <span>Add to DIY Planner</span>
                <span className="material-symbols-outlined text-sm">tune</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
