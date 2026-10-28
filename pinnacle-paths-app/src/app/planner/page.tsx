"use client";

import { useState } from "react";
import Link from "next/link";

interface DayItinerary {
  day: number;
  title: string;
  subtitle: string;
  distance: string;
  gain: string;
  outlay: number;
  elevation: string;
  isApex?: boolean;
}

const INITIAL_DAYS: DayItinerary[] = [
  {
    day: 1,
    title: "Pokhara to Ghandruk",
    subtitle: "Gurung stone trail via Birethanti",
    distance: "11.2 km",
    gain: "+940m",
    outlay: 28,
    elevation: "1,940m",
  },
  {
    day: 2,
    title: "Chhomrong Stairway",
    subtitle: "Kimrong Khola bridge to high village ridge",
    distance: "13.8 km",
    gain: "+780m",
    outlay: 32,
    elevation: "2,170m",
  },
  {
    day: 3,
    title: "Deurali Glacial Gorge",
    subtitle: "Bamboo glades past Hinku rock cave",
    distance: "10.5 km",
    gain: "+1,050m",
    outlay: 35,
    elevation: "3,230m",
  },
  {
    day: 4,
    title: "Annapurna Base Camp",
    subtitle: "Sunrise sanctuary amphitheater & 8,000m peaks",
    distance: "8.4 km",
    gain: "+900m",
    outlay: 38,
    elevation: "4,130m",
    isApex: true,
  },
  {
    day: 5,
    title: "Sanctuary Dawn to Bamboo",
    subtitle: "Descent through cascading snow melt streams",
    distance: "14.2 km",
    gain: "-1,820m",
    outlay: 26,
    elevation: "2,310m",
  },
  {
    day: 6,
    title: "Jhinu Danda Hot Springs",
    subtitle: "Natural mineral thermal pools along Modi Khola",
    distance: "9.6 km",
    gain: "-550m",
    outlay: 25,
    elevation: "1,760m",
  },
];

export default function PlannerPage() {
  const [budget, setBudget] = useState(450);
  const [days, setDays] = useState(8);
  const [selectedVibe, setSelectedVibe] = useState<"teahouse" | "monastery" | "homestay">("teahouse");
  const [activeTab, setActiveTab] = useState<"blueprint" | "directory">("blueprint");
  const [itineraryList, setItineraryList] = useState<DayItinerary[]>(INITIAL_DAYS);
  const [notification, setNotification] = useState<string | null>(null);

  const dailyAvg = Math.round(budget / days);
  const estimatedAgencyCost = Math.round(budget * 3.8 + 250);
  const totalSaved = estimatedAgencyCost - budget;

  const handleAdjustDays = (delta: number) => {
    setDays((prev) => Math.max(3, Math.min(21, prev + delta)));
  };

  const handleExport = () => {
    const text = `Pinnacle Paths DIY Itinerary\nDuration: ${days} Days\nBudget: $${budget} USD (~$${dailyAvg}/day)\nStay Vibe: ${selectedVibe}\nEstimated Direct Savings: $${totalSaved}\n\nStages:\n` +
      itineraryList.map(d => `Day ${d.day}: ${d.title} (${d.distance}, ${d.gain}, $${d.outlay})`).join('\n');
    
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `pinnacle-paths-itinerary-${days}d.txt`;
    a.click();
    showToast("Itinerary exported successfully!");
  };

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 clay-card px-5 py-3 rounded-2xl bg-[#faf7f2] border border-sage shadow-xl text-xs font-bold text-walnut flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
          <span className="material-symbols-outlined text-primary text-base">check_circle</span>
          <span>{notification}</span>
        </div>
      )}

      {/* Minimal Page Title Header */}
      <section className="max-w-3xl space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold shadow-inner">
          <span className="material-symbols-outlined text-[15px]">tune</span>
          <span>Independent Field Formulation</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-headline font-bold text-walnut tracking-tight">
          Interactive DIY Itinerary Builder
        </h1>
        <p className="text-sm text-walnut/75 font-normal">
          Accurate direct teahouse expenses, acclimatization tempos, and village community homestays.
        </p>
      </section>

      {/* Step 1: Glassmorphic + Clay Parameter Hub */}
      <section className="glass-clay-card rounded-3xl p-6 md:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shadow-sm">
              1
            </span>
            <span className="text-base font-headline font-bold text-walnut">
              Curate Baseline Metrics
            </span>
          </div>
          <span className="text-xs font-bold text-primary flex items-center gap-1 bg-[#faf7f2] px-3 py-1 rounded-full shadow-sm border border-white">
            <span className="material-symbols-outlined text-[15px]">verified</span>
            Live Estimates
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* 1. Total Budget Slider */}
          <div className="md:col-span-4 space-y-3 p-5 rounded-2xl glass-clay-card bg-[#faf7f2]/90 border border-white/80">
            <div className="flex justify-between items-baseline">
              <label htmlFor="budgetRange" className="text-xs font-bold text-secondary uppercase tracking-wider">
                Budget Total
              </label>
              <span className="text-lg font-headline font-bold text-primary">
                ${budget} USD
              </span>
            </div>
            <input
              id="budgetRange"
              type="range"
              min="200"
              max="1000"
              step="25"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full cursor-pointer clay-slider"
            />
            <div className="flex justify-between text-xs font-medium text-walnut/60">
              <span>$200 Min</span>
              <span className="text-amber-glow font-bold">${dailyAvg}/day avg</span>
              <span>$1,000 Max</span>
            </div>
          </div>

          {/* 2. Duration Window Stepper */}
          <div className="md:col-span-3 space-y-3 p-5 rounded-2xl glass-clay-card bg-[#faf7f2]/90 border border-white/80">
            <label className="text-xs font-bold text-secondary uppercase tracking-wider block">
              Duration Window
            </label>
            <div className="flex items-center justify-between">
              <button
                type="button"
                aria-label="Decrease days"
                onClick={() => handleAdjustDays(-1)}
                className="w-10 h-10 rounded-full bg-[#fbf9f5] border border-white shadow-sm flex items-center justify-center text-walnut hover:text-primary active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">remove</span>
              </button>
              <div className="text-center">
                <span className="text-lg font-headline font-bold text-walnut block">
                  {days} Days
                </span>
                <p className="text-[11px] font-semibold text-walnut/50">
                  {days <= 5 ? "Fast Ridge Arc" : days <= 10 ? "Sanctuary Arc" : "Full Circuit Arc"}
                </p>
              </div>
              <button
                type="button"
                aria-label="Increase days"
                onClick={() => handleAdjustDays(1)}
                className="w-10 h-10 rounded-full bg-[#fbf9f5] border border-white shadow-sm flex items-center justify-center text-walnut hover:text-primary active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">add</span>
              </button>
            </div>
          </div>

          {/* 3. Stay Vibe Pills */}
          <div className="md:col-span-5 space-y-3">
            <label className="text-xs font-bold text-secondary uppercase tracking-wider block">
              Stay Vibe &amp; Rhythm
            </label>
            <div className="flex flex-wrap gap-2.5">
              <button
                type="button"
                onClick={() => setSelectedVibe("teahouse")}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedVibe === "teahouse"
                    ? "clay-button-sage text-white shadow-md"
                    : "clay-pill-subtle text-secondary bg-[#faf7f2] hover:bg-white"
                }`}
              >
                Teahouse Lofts
              </button>
              <button
                type="button"
                onClick={() => setSelectedVibe("monastery")}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedVibe === "monastery"
                    ? "clay-button-sage text-white shadow-md"
                    : "clay-pill-subtle text-secondary bg-[#faf7f2] hover:bg-white"
                }`}
              >
                Monk Monasteries
              </button>
              <button
                type="button"
                onClick={() => setSelectedVibe("homestay")}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedVibe === "homestay"
                    ? "clay-button-sage text-white shadow-md"
                    : "clay-pill-subtle text-secondary bg-[#faf7f2] hover:bg-white"
                }`}
              >
                Family Homestays
              </button>
            </div>
            <p className="text-[11px] text-walnut/60 font-medium">
              {selectedVibe === "teahouse" && "Standard alpine lodges with hearty dal bhat and cozy woodstoves."}
              {selectedVibe === "monastery" && "Quiet stone monastery lodgings with butter tea & meditation spaces."}
              {selectedVibe === "homestay" && "Direct family-run rooms with organic farm vegetables and hearth fire."}
            </p>
          </div>
        </div>
      </section>

      {/* Step 2: Controls & Financial Comparison */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Mode Switcher */}
          <div className="inline-flex p-1.5 rounded-full bg-[#f3efe8] shadow-inner self-start">
            <button
              type="button"
              onClick={() => setActiveTab("blueprint")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === "blueprint"
                  ? "bg-primary text-white shadow-sm"
                  : "text-walnut/70 hover:text-walnut"
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">timeline</span>
              <span>Blueprint Timeline</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("directory")}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === "directory"
                  ? "bg-primary text-white shadow-sm"
                  : "text-walnut/70 hover:text-walnut"
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">roofing</span>
              <span>Shelters Directory</span>
            </button>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => showToast("Offline Map & GPS GPX saved to local storage!")}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#faf7f2] text-walnut text-xs font-bold shadow-sm hover:bg-white transition-all active:scale-95 border border-white"
            >
              <span className="material-symbols-outlined text-[16px] text-primary">download</span>
              <span>Save Offline GPX</span>
            </button>
            <button
              type="button"
              onClick={handleExport}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#faf7f2] text-secondary text-xs font-bold shadow-sm hover:bg-white transition-all active:scale-95 border border-white"
            >
              <span className="material-symbols-outlined text-[16px] text-amber-glow">ios_share</span>
              <span>Export Notes</span>
            </button>
          </div>
        </div>

        {/* Financial Mini Banner */}
        <div className="rounded-3xl glass-clay-card p-4 sm:p-5 border border-secondary/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-secondary text-white flex items-center justify-center shadow-md shrink-0">
              <span className="material-symbols-outlined text-[20px]">savings</span>
            </div>
            <div>
              <div className="text-xs font-bold text-secondary uppercase tracking-wider">
                Independent vs Commercial Tour
              </div>
              <p className="text-xs text-walnut/80 font-medium">
                Direct village payments eliminate middleman commission &amp; markup fees.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 self-end sm:self-auto text-right">
            <div>
              <span className="text-[10px] text-walnut/50 uppercase font-bold block">
                Independent Total
              </span>
              <span className="text-base font-headline font-bold text-primary">
                ${budget} USD
              </span>
            </div>
            <div className="h-7 w-px bg-walnut/15"></div>
            <div>
              <span className="text-[10px] text-walnut/50 uppercase font-bold block">
                Agency Tour
              </span>
              <span className="text-sm font-headline font-bold line-through text-walnut/40">
                ${estimatedAgencyCost}
              </span>
              <span className="text-[10px] font-bold text-red-600 ml-1">
                +${totalSaved} markup
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* VIEW 1: TAB A - Chronological Itinerary Blueprint */}
      {activeTab === "blueprint" && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-secondary uppercase tracking-wider">
              Chronological Sequence ({itineraryList.length} Stages)
            </span>
            <span className="text-walnut/60 font-medium">
              Annapurna Sanctuary Ridge • 4,130m Max
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {itineraryList.map((item) => (
              <div
                key={item.day}
                className={`rounded-3xl p-5 shadow-clay-card flex flex-col justify-between space-y-3 transition-all hover:-translate-y-1 ${
                  item.isApex
                    ? "glass-clay-card border-2 border-amber-glow/60 bg-[#faf6ef]"
                    : "glass-clay-card bg-[#faf7f2]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-xs font-bold shadow-sm ${
                      item.isApex
                        ? "clay-pill-amber"
                        : item.day % 2 === 1
                        ? "bg-primary-container"
                        : "bg-secondary"
                    }`}
                  >
                    Day 0{item.day} {item.isApex && "• Apex Summit"}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#f3efe8] text-secondary text-xs font-semibold shadow-inner flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">straighten</span>
                    {item.distance} • {item.gain}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-headline font-bold text-walnut">
                    {item.title}
                  </h3>
                  <p className="text-xs text-walnut/65 font-medium mt-0.5">
                    {item.subtitle}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-walnut/10 text-xs">
                  <span className="font-bold text-primary px-3 py-1 rounded-full bg-primary/10">
                    ${item.outlay} Outlay
                  </span>
                  <span className="font-semibold text-secondary">
                    {item.isApex ? "Apex: " : "Elevation: "}
                    {item.elevation}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl glass-debossed flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-walnut/70 font-medium">
              Need custom pacing? Acclimatization rest days at Machapuchare Base Camp are highly recommended for altitudes &gt;3,700m.
            </span>
            <button
              type="button"
              onClick={() => {
                const newDay: DayItinerary = {
                  day: itineraryList.length + 1,
                  title: "Acclimatization Ridge Hike",
                  subtitle: "High moraine rest day & sunset panorama",
                  distance: "4.5 km",
                  gain: "+320m",
                  outlay: 22,
                  elevation: "3,700m",
                };
                setItineraryList([...itineraryList, newDay]);
                setDays(days + 1);
                showToast("Added Acclimatization Day!");
              }}
              className="clay-button-cream px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap text-walnut"
            >
              + Add Rest / Acclimatization Day
            </button>
          </div>
        </div>
      )}

      {/* VIEW 2: TAB B - Free-Roam Directory */}
      {activeTab === "directory" && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-secondary uppercase tracking-wider">
              Independent Shelters &amp; Lodges
            </span>
            <span className="text-walnut/60 font-medium">4 Verified Spots</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Main Lodge Card */}
            <div className="md:col-span-8 glass-clay-card rounded-3xl overflow-hidden flex flex-col">
              <div className="relative h-64 w-full bg-[#eae5dc]">
                <img
                  alt="Rustic wooden tea house window"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhIiCjlaRAja16Im7AFlO6E8aNdbijc2cJg3bFU7UybUqIVgyx67AexVXqDl6UMCU5aawwhsFNgSyfhDvj1cqFXpoE-kASsURAzflxOqgjUIYGo1-qRD1BPlf7Ue6DCa91pyC7nfi3wTlqPu2K5VWcn5TreF85Qqi4wW2sxnZbmVhjTy7Sc5OiBjC1k_oqJw_CRg597ECtiIk27sSxUM5Gy1xx3JDt2vTeOhX-T6dVIxZ1L4Vef7XYTA"
                />
                <div className="absolute top-4 left-4 bg-[#faf7f2]/90 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold text-walnut shadow-sm border border-white">
                  ★ 4.9 • Annapurna South Vista
                </div>
                <div className="absolute bottom-4 right-4 bg-primary text-white px-3.5 py-1 rounded-full text-xs font-bold shadow-md">
                  $16 USD / Night
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-headline font-bold text-walnut">
                      Tadapani Sunset Stone Loft
                    </h3>
                    <p className="text-xs text-walnut/65 mt-0.5">
                      Warm oak woodstove, Gurung hospitality &amp; fresh highland mint tea
                    </p>
                  </div>
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    2,630m
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2.5 rounded-2xl bg-[#f3efe8] shadow-inner">
                    <span className="text-walnut/50 block text-[10px] font-bold">Shower</span>
                    <span className="font-bold text-walnut">Solar Hot ($2)</span>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-[#f3efe8] shadow-inner">
                    <span className="text-walnut/50 block text-[10px] font-bold">Connectivity</span>
                    <span className="font-bold text-walnut">Starlink SAT</span>
                  </div>
                  <div className="p-2.5 rounded-2xl bg-[#f3efe8] shadow-inner">
                    <span className="text-walnut/50 block text-[10px] font-bold">Dal Bhat</span>
                    <span className="font-bold text-walnut">Unlimited Refills</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => showToast("Tadapani Stone Loft added as Waypoint!")}
                  className="w-full py-2.5 rounded-full clay-button-sage text-white text-xs font-bold transition-all"
                >
                  Mark as Waypoint Stay
                </button>
              </div>
            </div>

            {/* Quick Directory List */}
            <div className="md:col-span-4 flex flex-col gap-3.5">
              {/* Spot 1 */}
              <div className="glass-clay-card rounded-2xl p-4 space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-wider">
                    Monastery
                  </span>
                  <span className="text-xs font-bold text-primary">$12 / night</span>
                </div>
                <h4 className="text-sm font-headline font-bold text-walnut">
                  Ulleri Monk Sanctuary Pods
                </h4>
                <div className="flex justify-between items-center text-xs pt-1.5 border-t border-walnut/10">
                  <span className="text-walnut/60 text-[11px]">2,050m Altitude</span>
                  <button
                    onClick={() => showToast("Selected Ulleri Monk Pods")}
                    className="text-primary font-bold text-xs hover:underline"
                  >
                    Select
                  </button>
                </div>
              </div>

              {/* Spot 2 */}
              <div className="glass-clay-card rounded-2xl p-4 space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-wider">
                    Homestay
                  </span>
                  <span className="text-xs font-bold text-primary">$15 / night</span>
                </div>
                <h4 className="text-sm font-headline font-bold text-walnut">
                  Landruk Heritage Courtyard
                </h4>
                <div className="flex justify-between items-center text-xs pt-1.5 border-t border-walnut/10">
                  <span className="text-walnut/60 text-[11px]">1,565m Altitude</span>
                  <button
                    onClick={() => showToast("Selected Landruk Heritage")}
                    className="text-primary font-bold text-xs hover:underline"
                  >
                    Select
                  </button>
                </div>
              </div>

              {/* Spot 3 */}
              <div className="glass-clay-card rounded-2xl p-4 space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-wider">
                    Ridge Vista
                  </span>
                  <span className="text-xs font-bold text-primary">$19 / night</span>
                </div>
                <h4 className="text-sm font-headline font-bold text-walnut">
                  Poon Hill High Vista Hut
                </h4>
                <div className="flex justify-between items-center text-xs pt-1.5 border-t border-walnut/10">
                  <span className="text-walnut/60 text-[11px]">3,190m Altitude</span>
                  <button
                    onClick={() => showToast("Selected Poon Hill High Vista")}
                    className="text-primary font-bold text-xs hover:underline"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Minimal Charter Strip */}
      <section className="rounded-2xl glass-clay-card p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px] text-primary">eco</span>
          <span className="font-semibold text-walnut/80">
            100% of all estimated room fees go directly to mountain families and kitchen didis.
          </span>
        </div>
        <Link
          href="/treks/annapurna-sanctuary"
          className="px-4 py-1.5 rounded-full clay-button-cream text-secondary font-bold"
        >
          Trail Ethics Code
        </Link>
      </section>
    </div>
  );
}
