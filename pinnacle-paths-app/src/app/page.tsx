import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-grow">
      {/* Hero Section with Himalayan Vista */}
      <section className="relative w-full min-h-[85vh] flex flex-col justify-between overflow-hidden">
        {/* Background Canvas */}
        <div className="absolute inset-0 z-0">
          <img
            alt="Snowy apex of Annapurna Base Camp at sunrise"
            className="w-full h-full object-cover object-center scale-[1.01]"
            src="/annapurna-sunrise-bg.jpg"
          />
          {/* Soft Earthy Dawn Scrim preserving the golden sunrise glow and snowy apex */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#fbf9f5]/70 via-[#fbf9f5]/30 to-[#fbf9f5] pointer-events-none"></div>
        </div>

        {/* Breathing Top Space */}
        <div className="relative z-10 pt-8 sm:pt-14"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full text-center flex flex-col items-center py-10">
          {/* Location Tag */}
          <div className="clay-pill-subtle inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-bold text-walnut shadow-sm bg-[#faf7f2]/95 backdrop-blur-md border border-white/60">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-glow animate-pulse"></span>
            <span>Annapurna Sanctuary • 4,130m</span>
          </div>

          {/* Headline */}
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl text-walnut font-bold tracking-tight max-w-3xl leading-[1.12] drop-shadow-sm">
            money would return but your 20&apos;s won&apos;t
          </h1>

          {/* Subtitle */}
          <p className="mt-4 font-body text-base md:text-lg text-walnut font-medium max-w-xl bg-[#faf7f2]/80 backdrop-blur-md px-6 py-2.5 rounded-2xl border border-white/50 shadow-sm">
            Curated independent ridges for free spirits. Real teahouse prices, offline elevation tempos, and verified summit logs.
          </p>

          {/* Clay CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/explore"
              className="clay-button-sage px-7 py-3.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all duration-200"
            >
              <span>Explore Routes</span>
              <span className="material-symbols-outlined text-base">north_east</span>
            </Link>
            <Link
              href="/planner"
              className="clay-button-cream px-7 py-3.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all duration-200"
            >
              <span className="material-symbols-outlined text-base text-primary">tune</span>
              <span>DIY Itinerary Builder</span>
            </Link>
          </div>
        </div>

        {/* Floating Status Pill Ticker */}
        <div className="relative z-10 w-full pb-8 px-6">
          <div className="max-w-4xl mx-auto clay-card rounded-full py-2.5 px-6 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-walnut/80 bg-[#faf7f2]/95 backdrop-blur-md">
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
              <span className="flex items-center gap-1.5 text-walnut font-bold">
                <span className="w-2 h-2 rounded-full bg-sage"></span>
                Spring Bloom Active
              </span>
              <span className="text-walnut/30 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-sage">eco</span>
                0% Agency Markups
              </span>
              <span className="text-walnut/30 hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-amber-glow">home</span>
                Direct Teahouse Stays
              </span>
            </div>
            <a
              className="inline-flex items-center gap-1 font-bold text-walnut hover:text-sage transition-colors ml-auto sm:ml-0"
              href="#active-routes"
            >
              <span>Active Treks</span>
              <span className="material-symbols-outlined text-sm">arrow_downward</span>
            </a>
          </div>
        </div>
      </section>

      {/* Open Treks Bento Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14" id="active-routes">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <span className="clay-pill-amber text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full inline-block mb-2">
              Seasonal Trails
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-walnut">Active Himalayan Routes</h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-walnut/60 font-bold">
              Daily Snowpack &amp; Teahouse Sync
            </span>
            <Link
              href="/explore"
              className="text-xs font-bold text-primary hover:underline flex items-center gap-0.5"
            >
              <span>View All 6</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* Clean Clay Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Annapurna Sanctuary (8 cols) */}
          <div className="md:col-span-8 clay-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between hover:translate-y-[-2px] transition-transform bg-[#faf7f2]">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="clay-button-sage text-white text-xs font-bold px-3 py-1 rounded-full">
                    High Pass
                  </span>
                  <span className="clay-pill-subtle text-walnut text-xs font-bold px-3 py-1 rounded-full bg-[#f4efeb]">
                    11 Days
                  </span>
                  <span className="clay-pill-subtle text-primary text-xs font-bold px-3 py-1 rounded-full bg-[#eef4e8]">
                    ₹1,800 / day
                  </span>
                </div>
                <div className="clay-pill-subtle text-xs font-semibold text-walnut/70 px-3 py-1 rounded-full flex items-center gap-1 bg-[#f4efeb]">
                  <span className="material-symbols-outlined text-[14px] text-amber-glow">ac_unit</span>
                  <span>-4°C Summit</span>
                </div>
              </div>
              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-walnut mb-2">
                Annapurna Sanctuary Amphitheater
              </h3>
              <p className="text-sm text-walnut/75 font-normal max-w-2xl leading-relaxed">
                Pristine amphitheater of 8,000m peaks, sacred Machapuchare sunrise ridges, and authentic Gurung stone villages with woodstove dining.
              </p>
            </div>

            {/* Metrics Strip */}
            <div className="mt-8 pt-5 border-t border-walnut/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-walnut/50 font-bold block">
                    Apex
                  </span>
                  <span className="font-headline text-xl font-bold text-walnut">4,130m</span>
                </div>
                <div className="w-px h-7 bg-walnut/15"></div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-walnut/50 font-bold block">
                    Pace
                  </span>
                  <span className="font-headline text-xl font-bold text-walnut">14 km/d</span>
                </div>
                <div className="w-px h-7 bg-walnut/15"></div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-walnut/50 font-bold block">
                    Permit
                  </span>
                  <span className="font-headline text-xl font-bold text-walnut">ACAP</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href="/treks/annapurna-sanctuary"
                  className="clay-button-cream text-walnut text-xs font-bold px-5 py-2.5 rounded-full transition-all flex items-center gap-1"
                >
                  <span>Full Trail Guide</span>
                  <span className="material-symbols-outlined text-sm">map</span>
                </Link>
                <Link
                  href="/planner"
                  className="clay-button-sage text-white text-xs font-bold px-4 py-2.5 rounded-full transition-all"
                >
                  Plan Trip
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Langtang Valley (4 cols) */}
          <div className="md:col-span-4 clay-card rounded-3xl p-7 flex flex-col justify-between hover:translate-y-[-2px] transition-transform bg-[#faf7f2]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="clay-pill-subtle text-primary text-xs font-bold px-3 py-1 rounded-full bg-[#f4efeb]">
                  Quiet Valley
                </span>
                <span className="text-xs font-bold text-walnut/60">Langtang Range</span>
              </div>
              <h3 className="font-headline text-xl font-bold text-walnut mb-1">
                Kyanjin Gompa &amp; Ri
              </h3>
              <p className="text-sm text-walnut/70 font-normal leading-relaxed">
                Glacial torrents, peaceful yak pastures, and warm cheese factories nestled under Dorje Lakpa.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-walnut/10">
              <div className="flex justify-between items-center text-xs font-semibold mb-4">
                <span className="text-walnut/60">Crowd Density</span>
                <span className="clay-pill-subtle text-primary font-bold px-2.5 py-0.5 rounded-full bg-[#eef4e8]">
                  Low (12/100)
                </span>
              </div>
              <Link
                href="/explore"
                className="block w-full text-center clay-button-sage text-white text-xs font-bold py-2.5 rounded-full transition-all"
              >
                View 7-Day Itinerary
              </Link>
            </div>
          </div>

          {/* Card 3: Teahouse Direct Code (4 cols) */}
          <div className="md:col-span-4 clay-card rounded-3xl p-7 flex flex-col justify-between bg-[#faf7f2]">
            <div>
              <span className="clay-pill-subtle text-walnut text-xs font-bold px-3 py-1 rounded-full inline-block mb-3 bg-[#f4efeb]">
                Field Code
              </span>
              <h3 className="font-headline text-lg font-bold text-walnut mb-1">
                Teahouse Direct
              </h3>
              <p className="text-sm text-walnut/75">
                100% of your stay fees go directly to mountain families and kitchen didis, keeping local villages thriving.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-walnut/10 flex items-center justify-between text-xs font-semibold">
              <span className="text-walnut/60">Middleman Markup</span>
              <span className="clay-pill-amber text-white px-3 py-0.5 rounded-full font-bold">
                ₹0 Agency Fee
              </span>
            </div>
          </div>

          {/* Card 4: Light Kit (8 cols) */}
          <div className="md:col-span-8 clay-card rounded-3xl p-7 flex flex-col justify-between bg-[#faf7f2]">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-walnut/50 font-bold block">
                  Fast &amp; Light Kit
                </span>
                <h3 className="font-headline text-lg font-bold text-walnut">
                  8.2 kg Base Load Blueprint
                </h3>
              </div>
              <span className="clay-button-sage text-white text-xs font-bold px-3.5 py-1 rounded-full">
                Sub-10kg Verified
              </span>
            </div>

            {/* Sleek Pill Items */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-2">
              <div className="clay-card-inset p-3.5 rounded-2xl text-center sm:text-left bg-[#f3efe8]">
                <span className="text-xs font-bold text-walnut block">Warmth Sleep</span>
                <span className="text-xs text-walnut/75 font-medium">-10°C Down Quilt &amp; Silk Liner</span>
              </div>
              <div className="clay-card-inset p-3.5 rounded-2xl text-center sm:text-left bg-[#f3efe8]">
                <span className="text-xs font-bold text-walnut block">Hydration</span>
                <span className="text-xs text-walnut/75 font-medium">0.1μm Micro Hollow Filter Bottle</span>
              </div>
              <div className="clay-card-inset p-3.5 rounded-2xl text-center sm:text-left bg-[#f3efe8]">
                <span className="text-xs font-bold text-walnut block">Navigation</span>
                <span className="text-xs text-walnut/75 font-medium">Offline Topo Tiles + Compass</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-walnut/10 flex items-center justify-between">
              <span className="text-xs text-walnut/60 font-semibold">
                Open Source Ultralight Packing List
              </span>
              <Link
                href="/treks/annapurna-sanctuary"
                className="inline-flex items-center gap-1 text-xs font-bold text-walnut hover:text-primary transition-colors"
              >
                <span>Inspect Gear Matrix</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Quick Discovery Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="clay-card rounded-3xl p-6 sm:p-8 bg-[#faf7f2] flex flex-col md:flex-row items-center justify-between gap-6 border border-white">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-glow/20 text-amber-glow flex items-center justify-center clay-pill-subtle shrink-0">
              <span className="material-symbols-outlined text-2xl">hiking</span>
            </div>
            <div>
              <h2 className="text-xl font-headline font-bold text-walnut">
                Ready to plan your independent traverse?
              </h2>
              <p className="text-xs sm:text-sm text-walnut/70 font-medium">
                Calculate village teahouse costs, adjust acclimatization days, and unlock verified Proof-of-Summit medals.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <Link
              href="/planner"
              className="w-full sm:w-auto text-center px-6 py-3 rounded-full clay-button-sage text-white text-xs font-bold shadow-md"
            >
              Launch DIY Planner
            </Link>
            <Link
              href="/community"
              className="w-full sm:w-auto text-center px-5 py-3 rounded-full clay-button-cream text-walnut text-xs font-bold"
            >
              Community Medals
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
