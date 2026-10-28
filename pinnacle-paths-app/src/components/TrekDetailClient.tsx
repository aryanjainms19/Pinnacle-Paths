"use client";

import { useState } from "react";
import Link from "next/link";

interface Waypoint {
  name: string;
  elevation: string;
  elevationMeters: number;
  distanceFromStart: string;
  shelterType: string;
  notes: string;
  waterSource: string;
}

const TRAIL_WAYPOINTS: Waypoint[] = [
  {
    name: "Pokhara (Lake Phewa)",
    elevation: "820m",
    elevationMeters: 820,
    distanceFromStart: "0 km",
    shelterType: "Valley Hub",
    notes: "Permit checkpoints (ACAP counter) and trail staging point.",
    waterSource: "Filtered Municipal",
  },
  {
    name: "Tikhedhunga",
    elevation: "1,540m",
    elevationMeters: 1540,
    distanceFromStart: "12 km",
    shelterType: "Riverside Lodge",
    notes: "Foot of the legendary 3,200 Ulleri stone stair climb.",
    waterSource: "Spring Pipe Tap",
  },
  {
    name: "Ghorepani & Poon Hill",
    elevation: "3,210m",
    elevationMeters: 3210,
    distanceFromStart: "23 km",
    shelterType: "Alpine Teahouse",
    notes: "World-renowned 360° panorama of Dhaulagiri & Annapurna ranges.",
    waterSource: "Safe Drinking Water Station",
  },
  {
    name: "Tadapani",
    elevation: "2,630m",
    elevationMeters: 2630,
    distanceFromStart: "33 km",
    shelterType: "Stone Ridge Loft",
    notes: "Rhododendron canopy with direct views of Machapuchare spire.",
    waterSource: "Gravity Spring Feed",
  },
  {
    name: "Chhomrong Village",
    elevation: "2,170m",
    elevationMeters: 2170,
    distanceFromStart: "45 km",
    shelterType: "Gurung Homestead",
    notes: "Gateway to the high sanctuary gorge. Last bakery and gear shop.",
    waterSource: "Village UV Filter Hub",
  },
  {
    name: "Hinku Cave & Deurali",
    elevation: "3,230m",
    elevationMeters: 3230,
    distanceFromStart: "58 km",
    shelterType: "Gorge Refuge",
    notes: "Overhanging stone shelter, cold glacial winds, avalanche corridor awareness.",
    waterSource: "Boiled Glacier Stream",
  },
  {
    name: "Machapuchare Base Camp (MBC)",
    elevation: "3,700m",
    elevationMeters: 3700,
    distanceFromStart: "66 km",
    shelterType: "High Plateau Refuge",
    notes: "Acclimatization outpost below the sacred unclimbed Fishtail peak.",
    waterSource: "High Glacial Runoff",
  },
  {
    name: "Annapurna Base Camp (ABC) Apex",
    elevation: "4,130m",
    elevationMeters: 4130,
    distanceFromStart: "72 km",
    shelterType: "Summit Amphitheater",
    notes: "360-degree ring of colossal 8,000m peaks: Annapurna I, South, Hiunchuli.",
    waterSource: "Boiled Snow / Glacier",
  },
];

interface GearItem {
  id: string;
  name: string;
  weight: string;
  category: "Warmth" | "Hydration" | "Navigation" | "Apparel";
  checked: boolean;
}

const INITIAL_GEAR: GearItem[] = [
  { id: "1", name: "-10°C Goose Down Quilt / Bag", weight: "720g", category: "Warmth", checked: true },
  { id: "2", name: "Silk Sleeping Liner (Hygiene & Warmth)", weight: "120g", category: "Warmth", checked: true },
  { id: "3", name: "0.1 Micron Micro Hollow Fiber Squeeze Filter", weight: "58g", category: "Hydration", checked: true },
  { id: "4", name: "Collapsible 1L TPU Water Flasks (x2)", weight: "74g", category: "Hydration", checked: true },
  { id: "5", name: "Pre-downloaded Offline Topo Maps & Compass", weight: "180g", category: "Navigation", checked: true },
  { id: "6", name: "Merino Wool Base Layers (Top & Bottom)", weight: "340g", category: "Apparel", checked: true },
  { id: "7", name: "Ultralight Windproof Shell & Rain Poncho", weight: "210g", category: "Apparel", checked: false },
  { id: "8", name: "Carbon Fiber Trekking Poles", weight: "290g", category: "Navigation", checked: true },
];

export default function TrekDetailClient({ slug }: { slug: string }) {
  const [gearList, setGearList] = useState(INITIAL_GEAR);
  const [selectedWaypoint, setSelectedWaypoint] = useState<Waypoint>(TRAIL_WAYPOINTS[7]);
  const [copiedNotification, setCopiedNotification] = useState(false);

  const toggleGear = (id: string) => {
    setGearList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const handleCopyGPX = () => {
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2500);
  };

  return (
    <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-10">
      {/* Breadcrumb & Navigation */}
      <div className="flex items-center gap-2 text-xs font-semibold text-walnut/60">
        <Link href="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/explore" className="hover:text-primary transition-colors">
          Open Treks
        </Link>
        <span>/</span>
        <span className="text-walnut font-bold capitalize">
          {slug.replace("-", " ")}
        </span>
      </div>

      {/* Hero Title & Status Card */}
      <section className="glass-clay-card rounded-3xl p-6 sm:p-10 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sage/20 text-primary text-xs font-bold clay-tag bg-[#faf7f2]">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            ACAP Protected Sanctuary
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-amber-glow font-mono bg-[#fff7ee] border border-amber-glow/30 px-3 py-1 rounded-full">
              4,130m Summit Apex
            </span>
            <span className="text-xs font-bold text-primary font-mono bg-primary/10 px-3 py-1 rounded-full">
              ₹1,800 / day average
            </span>
          </div>
        </div>

        <div>
          <h1 className="text-3xl sm:text-5xl font-headline font-bold text-walnut tracking-tight">
            Annapurna Sanctuary Trail Guide
          </h1>
          <p className="mt-3 text-sm sm:text-base text-walnut/75 font-normal max-w-3xl leading-relaxed">
            The crown jewel of Himalayan independent trekking. Ascend through lush bamboo groves, historic stone stairways, and sub-alpine rhododendrons into a monumental glacial colosseum of 8,000m peaks.
          </p>
        </div>

        {/* Quick Facts Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-walnut/15 text-xs">
          <div className="p-3 rounded-2xl glass-debossed">
            <span className="text-walnut/50 block font-semibold text-[11px] uppercase">
              Total Distance
            </span>
            <span className="font-headline font-bold text-walnut text-lg">72 km</span>
          </div>
          <div className="p-3 rounded-2xl glass-debossed">
            <span className="text-walnut/50 block font-semibold text-[11px] uppercase">
              Standard Tempo
            </span>
            <span className="font-headline font-bold text-walnut text-lg">11 Days</span>
          </div>
          <div className="p-3 rounded-2xl glass-debossed">
            <span className="text-walnut/50 block font-semibold text-[11px] uppercase">
              Required Permits
            </span>
            <span className="font-headline font-bold text-walnut text-lg">ACAP + TIMS</span>
          </div>
          <div className="p-3 rounded-2xl glass-debossed">
            <span className="text-walnut/50 block font-semibold text-[11px] uppercase">
              Shelter Format
            </span>
            <span className="font-headline font-bold text-primary text-lg">Teahouses</span>
          </div>
        </div>
      </section>

      {/* SECTION 1: INTERACTIVE ELEVATION & WAYPOINT PROFILE */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-walnut/15 pb-3">
          <div>
            <span className="text-xs font-bold text-amber-glow uppercase tracking-wider">
              Contour Map
            </span>
            <h2 className="text-2xl sm:text-3xl font-headline font-bold text-walnut">
              Elevation Stages &amp; Teahouses
            </h2>
          </div>
          <span className="text-xs text-walnut/60 font-semibold mt-1 sm:mt-0">
            Click waypoint node to inspect teahouse details
          </span>
        </div>

        {/* Visual Elevation Profile Nodes */}
        <div className="glass-clay-card rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
            {TRAIL_WAYPOINTS.map((wp, idx) => {
              const isSelected = selectedWaypoint.name === wp.name;
              return (
                <button
                  key={wp.name}
                  type="button"
                  onClick={() => setSelectedWaypoint(wp)}
                  className={`p-3 rounded-2xl text-left transition-all flex flex-col justify-between ${
                    isSelected
                      ? "clay-button-sage text-white shadow-md scale-105 z-10"
                      : "glass-debossed hover:bg-white/60 text-walnut"
                  }`}
                >
                  <span className="text-[10px] font-bold opacity-75 uppercase">
                    Stage {idx + 1}
                  </span>
                  <span className="font-headline font-bold text-xs truncate mt-2">
                    {wp.name.split(" ")[0]}
                  </span>
                  <span className="font-mono text-xs font-bold mt-1">
                    {wp.elevation}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Waypoint Card */}
          <div className="p-5 rounded-2xl glass-debossed space-y-3 border border-white">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-walnut/10 pb-3">
              <div>
                <span className="text-[11px] font-bold text-amber-glow uppercase tracking-wider">
                  Waypoint Spotlight
                </span>
                <h3 className="text-xl font-headline font-bold text-walnut">
                  {selectedWaypoint.name}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold font-mono">
                  {selectedWaypoint.elevation}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#f3efe8] text-secondary text-xs font-bold font-mono">
                  {selectedWaypoint.distanceFromStart}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <span className="text-walnut/50 font-bold block">Lodging Category:</span>
                <span className="font-semibold text-walnut">{selectedWaypoint.shelterType}</span>
              </div>
              <div>
                <span className="text-walnut/50 font-bold block">Water Reliability:</span>
                <span className="font-semibold text-walnut">{selectedWaypoint.waterSource}</span>
              </div>
              <div>
                <span className="text-walnut/50 font-bold block">Trail Advice:</span>
                <span className="font-semibold text-walnut">{selectedWaypoint.notes}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FAST & LIGHT 8.2KG GEAR MATRIX */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-walnut/15 pb-3">
          <div>
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              Packing Checklist
            </span>
            <h2 className="text-2xl sm:text-3xl font-headline font-bold text-walnut">
              8.2 kg Fast &amp; Light Gear Matrix
            </h2>
          </div>
          <span className="text-xs text-walnut/60 font-semibold mt-1 sm:mt-0">
            Interactive packing checklist
          </span>
        </div>

        <div className="glass-clay-card rounded-3xl p-6 sm:p-8 space-y-4">
          <p className="text-xs text-walnut/70 leading-relaxed font-medium">
            Overpacking kills Himalayan enjoyment. Since teahouses supply heavy quilts, boiled meals, and solar power, your base weight should comfortably sit beneath 9kg.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {gearList.map((item) => (
              <div
                key={item.id}
                onClick={() => toggleGear(item.id)}
                className={`p-3.5 rounded-2xl flex items-center justify-between cursor-pointer transition-all border border-white ${
                  item.checked ? "glass-debossed opacity-95" : "bg-[#faf7f2] opacity-60"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs ${
                      item.checked ? "bg-primary text-white" : "border border-walnut/30"
                    }`}
                  >
                    {item.checked && <span className="material-symbols-outlined text-sm">check</span>}
                  </div>
                  <div>
                    <p className={`text-xs font-bold text-walnut ${item.checked ? "" : "line-through"}`}>
                      {item.name}
                    </p>
                    <span className="text-[10px] text-walnut/50 font-semibold">{item.category}</span>
                  </div>
                </div>
                <span className="font-mono text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-lg">
                  {item.weight}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: PERMITS & TRAIL ACTIONS */}
      <section className="glass-clay-card rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-headline font-bold text-walnut">
            Ready to formulate this route?
          </h3>
          <p className="text-xs text-walnut/70 mt-1 max-w-xl font-medium">
            Load this exact itinerary into our DIY Builder to customize dates, adjust daily food allowances, and reserve direct homestays.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handleCopyGPX}
            className="px-5 py-3 rounded-full clay-button-cream text-walnut text-xs font-bold flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-base text-primary">download</span>
            <span>{copiedNotification ? "GPX Downloaded!" : "Offline Topo GPX"}</span>
          </button>
          <Link
            href="/planner"
            className="px-6 py-3 rounded-full clay-button-sage text-white text-xs font-bold flex items-center gap-1.5"
          >
            <span>Open in DIY Builder</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
