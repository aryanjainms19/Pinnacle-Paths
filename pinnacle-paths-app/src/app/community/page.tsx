"use client";

import { useState } from "react";

interface Dispatch {
  id: string;
  author: string;
  initials: string;
  avatarColor: string;
  altitude: string;
  route: string;
  quote: string;
  likes: number;
  image: string;
  category: "Summits" | "Teahouses";
}

const INITIAL_DISPATCHES: Dispatch[] = [
  {
    id: "1",
    author: "@maya_wanders",
    initials: "MW",
    avatarColor: "bg-amber-glow/20 text-amber-glow",
    altitude: "4,130m",
    route: "ABC Loop • 7d",
    quote: "Skip Bamboo buffet; get Didi’s fresh dal bhat across the bridge. Fermented greens cure altitude lethargy.",
    likes: 142,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3L3L24URrcKeklJNMvhh5LCe8tg65IU-RmQr8OB46MfOZwwl_LmeeMy-Hg_14f3K4zc3VE_OASdrrYEINk7o6v88sau0e4403-5ELncX5UuIxy4Dp5vB6xtCA2y3CbhREX1MelJx2pHKqVwGTfDe_6pvYFqG7OV-OXAFJ38-z5Bm070jfqq2_XDL3Et1y1WfzyB46a3i5wZeYidXRAI7FmddXsplj8Exmn-AbqwCR7nnOXveLctf5Cg",
    category: "Summits",
  },
  {
    id: "2",
    author: "@liam_ridges",
    initials: "LR",
    avatarColor: "bg-sage/20 text-primary",
    altitude: "5,160m",
    route: "Manaslu • Solo",
    quote: "Start 3:45 AM from Dharamsala before headwind kicks in. Microspikes mandatory on the black ice ridge.",
    likes: 98,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPs_AvabC21EvHD5xin2SFOIT2GYRX6JPHgdkLnMOzT2uDhgJxIGPtxWAL3HTkLfO7n-1N1roRh6wi9-eCKcxm4WTe4TUQ9QuVGfciPgWKBw24NemtreT_Wzo_aWpy2gW7hQr2FnJ2l6yeM1TfxRUtrhPBcJKDWC3QWVPWzj7XRAHnSYW6F6uq6bBzg5LtfAaFbRiA0j_8Ot4NqADBPj1wPZKZaNSXdEcc1S_eeKHWUT9pfj_USi1QbA",
    category: "Summits",
  },
  {
    id: "3",
    author: "@anaya_treks",
    initials: "AT",
    avatarColor: "bg-walnut/15 text-walnut",
    altitude: "4,790m",
    route: "Gokyo Ri • 11d",
    quote: "Rent solar power in Namche. Lake stupa reflection peaks at exactly 07:10 AM before morning wind ripples form.",
    likes: 215,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQ4VG6C0SUr4Gx99XbKGjSSg8mt9NjRzQMzz07eMLH2eaCCJd5TiVob8r4EQ7SE_s87S1EJNaIW4JeL7FZ5rUdlUC_MTsihu2GMGi0Hg6NAOguRaHtlPqMPOmTj9E2qTj4gzdTqIexyGvo8YPTkcwW88mMrt7hKYAyTEZhbVJG9S-bCGcwa09k8GwcbvVhqz0LWnYSxozDnYxrjiLsxb3C5rZzfLxYz1udhg0Q46UQEH4tKLE5aCwAdw",
    category: "Teahouses",
  },
];

export default function CommunityPage() {
  const [dispatches, setDispatches] = useState<Dispatch[]>(INITIAL_DISPATCHES);
  const [filterCategory, setFilterCategory] = useState<"All" | "Summits" | "Teahouses">("All");
  const [uploadedFileName, setUploadedFileName] = useState("DSC_4892_ABC_SIGN.RAW");
  const [fileSize, setFileSize] = useState("18.4 MB");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isMinted, setIsMinted] = useState(false);
  const [selectedMedalTier, setSelectedMedalTier] = useState<number | null>(null);

  const handleLike = (id: string) => {
    setDispatches((prev) =>
      prev.map((d) => (d.id === id ? { ...d, likes: d.likes + 1 } : d))
    );
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedFileName(file.name);
      setFileSize(`${(file.size / (1024 * 1024)).toFixed(1)} MB`);
      setIsMinted(false);
      setIsVerifying(true);
      setTimeout(() => setIsVerifying(false), 1200);
    }
  };

  const handleMint = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setIsMinted(true);
    }, 1500);
  };

  const filteredDispatches = dispatches.filter((d) => {
    if (filterCategory === "All") return true;
    return d.category === filterCategory;
  });

  return (
    <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full space-y-12">
      {/* MINIMAL HERO HEADER */}
      <section className="text-center max-w-3xl mx-auto pt-2 pb-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sage/15 text-primary text-xs font-bold clay-tag mb-3 bg-[#faf7f2] border border-white">
          <span className="w-2 h-2 rounded-full bg-amber-glow animate-pulse"></span>
          Autonomous Alpine Ledger
        </div>
        <h1 className="text-3xl md:text-5xl font-headline font-bold text-walnut tracking-tight mb-2">
          Proof of Summit &amp; Trail Community
        </h1>
        <p className="text-sm md:text-base text-walnut/75 font-normal max-w-xl mx-auto">
          Zero commercial fluff. Verified alpine telemetry, authentic teahouse dispatches, and decentralized Proof-of-Hike medals.
        </p>
      </section>

      {/* SECTION 1: 3-TIER VIRTUAL MEDALS (Luxury Clay Pedestals with Glass Elements) */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-walnut/15 pb-3">
          <div>
            <span className="text-xs font-bold text-amber-glow uppercase tracking-wider">
              Summit Recognition
            </span>
            <h2 className="text-2xl sm:text-3xl font-headline font-bold text-walnut">
              3-Tier Virtual Medals
            </h2>
          </div>
          <span className="text-xs text-walnut/60 font-semibold mt-1 sm:mt-0">
            Verified Telemetry &amp; Marker AI
          </span>
        </div>

        {/* 3 Tier Pedestal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tier 1: Sage Bronze */}
          <div
            onClick={() => setSelectedMedalTier(1)}
            className="glass-clay-card glass-clay-card-hover rounded-3xl p-6 flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-sage/20 text-primary font-bold text-xs clay-tag bg-[#faf7f2]">
                  Tier 01 • Pass
                </span>
                <span className="text-xs font-bold text-walnut/60">≤ 3,500m</span>
              </div>

              {/* Tactile Soft Pedestal */}
              <div className="glass-debossed rounded-2xl p-5 flex flex-col items-center justify-center relative aspect-square max-h-56 mx-auto w-full mb-4">
                <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-[#6b8d4f] to-[#96b87b] p-1 shadow-lg flex items-center justify-center text-white">
                  <div className="w-full h-full rounded-full border-2 border-white/60 flex flex-col items-center justify-center bg-[#87a96b]">
                    <span className="material-symbols-outlined text-4xl">hiking</span>
                    <span className="text-[10px] font-bold tracking-wider uppercase mt-1">Tier 01</span>
                  </div>
                </div>
                <span className="absolute bottom-2.5 px-3 py-0.5 rounded-full bg-white/95 text-[11px] font-bold text-primary clay-tag shadow-sm">
                  Sage Bronze
                </span>
              </div>

              <h3 className="text-lg font-headline font-bold text-walnut">
                Light Work Wanderer
              </h3>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs px-2.5 py-1 rounded-lg bg-[#f3efe8] text-walnut/70 font-semibold">
                  Acclimatization
                </span>
                <span className="text-xs px-2.5 py-1 rounded-lg bg-[#f3efe8] text-walnut/70 font-semibold">
                  Low Loops
                </span>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-walnut/10 flex items-center justify-between text-xs">
              <span className="flex items-center gap-1 font-semibold text-walnut">
                <span className="material-symbols-outlined text-[15px] text-sage">location_on</span>
                Poon Hill • Langtang
              </span>
              <span className="font-bold text-primary">1,248 Verified</span>
            </div>
          </div>

          {/* Tier 2: Sunrise Amber */}
          <div
            onClick={() => setSelectedMedalTier(2)}
            className="glass-clay-card glass-clay-card-hover rounded-3xl p-6 flex flex-col justify-between relative cursor-pointer border-amber-glow/40"
          >
            <div className="absolute -top-3 left-6 px-3.5 py-0.5 rounded-full clay-button-amber text-white font-bold text-[11px] shadow-md">
              Most Wandered
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 pt-1">
                <span className="px-3 py-1 rounded-full bg-amber-glow/15 text-amber-glow font-bold text-xs clay-tag bg-[#faf7f2]">
                  Tier 02 • Sanctuary
                </span>
                <span className="text-xs font-bold text-walnut/60">4,100 – 5,360m</span>
              </div>

              {/* Tactile Soft Pedestal */}
              <div className="glass-debossed rounded-2xl p-5 flex flex-col items-center justify-center relative aspect-square max-h-56 mx-auto w-full mb-4">
                <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-[#b86e14] to-[#f49f33] p-1 shadow-lg flex items-center justify-center text-white">
                  <div className="w-full h-full rounded-full border-2 border-white/60 flex flex-col items-center justify-center bg-[#d5851f]">
                    <span className="material-symbols-outlined text-4xl">terrain</span>
                    <span className="text-[10px] font-bold tracking-wider uppercase mt-1">Tier 02</span>
                  </div>
                </div>
                <span className="absolute bottom-2.5 px-3 py-0.5 rounded-full bg-white/95 text-[11px] font-bold text-amber-glow clay-tag shadow-sm">
                  Amber Glow
                </span>
              </div>

              <h3 className="text-lg font-headline font-bold text-walnut">
                Main Character Ridge
              </h3>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs px-2.5 py-1 rounded-lg bg-[#f3efe8] text-walnut/70 font-semibold">
                  Glacial Cirques
                </span>
                <span className="text-xs px-2.5 py-1 rounded-lg bg-[#f3efe8] text-walnut/70 font-semibold">
                  Dawn Freezing
                </span>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-walnut/10 flex items-center justify-between text-xs">
              <span className="flex items-center gap-1 font-semibold text-walnut">
                <span className="material-symbols-outlined text-[15px] text-amber-glow">location_on</span>
                ABC • Mardi Himal
              </span>
              <span className="font-bold text-amber-glow">842 Verified</span>
            </div>
          </div>

          {/* Tier 3: Walnut Col */}
          <div
            onClick={() => setSelectedMedalTier(3)}
            className="glass-clay-card glass-clay-card-hover rounded-3xl p-6 flex flex-col justify-between cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-walnut/15 text-walnut font-bold text-xs clay-tag bg-[#faf7f2]">
                  Tier 03 • Col Alpinist
                </span>
                <span className="text-xs font-bold text-walnut/60">≥ 5,400m</span>
              </div>

              {/* Tactile Soft Pedestal */}
              <div className="glass-debossed rounded-2xl p-5 flex flex-col items-center justify-center relative aspect-square max-h-56 mx-auto w-full mb-4">
                <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-[#38261a] to-[#775843] p-1 shadow-lg flex items-center justify-center text-white">
                  <div className="w-full h-full rounded-full border-2 border-white/60 flex flex-col items-center justify-center bg-[#5a3e2b]">
                    <span className="material-symbols-outlined text-4xl">ac_unit</span>
                    <span className="text-[10px] font-bold tracking-wider uppercase mt-1">Tier 03</span>
                  </div>
                </div>
                <span className="absolute bottom-2.5 px-3 py-0.5 rounded-full bg-white/95 text-[11px] font-bold text-walnut clay-tag shadow-sm">
                  Walnut Bronze
                </span>
              </div>

              <h3 className="text-lg font-headline font-bold text-walnut">
                Final Boss Alpinist
              </h3>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs px-2.5 py-1 rounded-lg bg-[#f3efe8] text-walnut/70 font-semibold">
                  Technical Scree
                </span>
                <span className="text-xs px-2.5 py-1 rounded-lg bg-[#f3efe8] text-walnut/70 font-semibold">
                  Thin Air
                </span>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-walnut/10 flex items-center justify-between text-xs">
              <span className="flex items-center gap-1 font-semibold text-walnut">
                <span className="material-symbols-outlined text-[15px] text-walnut">location_on</span>
                Thorong La • 3-Passes
              </span>
              <span className="font-bold text-walnut">319 Verified</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: AI SCANNER & VERIFICATION MODULE (Glassmorphic + Clay) */}
      <section className="glass-clay-card rounded-3xl p-6 md:p-8 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-walnut/15 gap-3">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-2xl bg-amber-glow/15 text-amber-glow flex items-center justify-center clay-tag bg-[#faf7f2]">
              <span className="material-symbols-outlined text-[22px]">document_scanner</span>
            </span>
            <div>
              <h2 className="text-xl sm:text-2xl font-headline font-bold text-walnut">
                AI Summit Verification Engine
              </h2>
              <p className="text-xs text-walnut/65 font-medium">
                Topographic landmark matching &amp; EXIF sensor inspection
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill w-fit">
            <span className="w-2 h-2 rounded-full bg-sage animate-ping"></span>
            <span className="text-xs font-bold text-walnut">Vision Model v4.2 Active</span>
          </div>
        </div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Column A: Upload Debossed Zone */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <label className="glass-debossed rounded-2xl p-6 text-center flex flex-col items-center justify-center cursor-pointer hover:border-sage transition-all border border-dashed border-walnut/30">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              <div className="w-14 h-14 rounded-2xl bg-[#faf7f2] flex items-center justify-center text-sage mb-3 clay-tag shadow-sm">
                <span className="material-symbols-outlined text-[28px]">cloud_upload</span>
              </div>
              <h4 className="font-bold text-walnut text-sm mb-1">
                Drop Summit Marker or Sign RAW
              </h4>
              <p className="text-xs text-walnut/60 mb-4">
                HEIC, RAW, or JPG (up to 25MB)
              </p>
              <span className="px-4 py-1.5 rounded-full bg-[#faf7f2] text-walnut text-xs font-bold clay-tag hover:text-primary transition-colors border border-white">
                Select Photo
              </span>
            </label>

            {/* Current Loaded File */}
            <div className="p-3.5 rounded-2xl glass-clay-card border border-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-walnut/60 text-[22px]">image</span>
                <div>
                  <p className="text-xs font-bold text-walnut">{uploadedFileName}</p>
                  <p className="text-[11px] text-walnut/60">{fileSize} • 4,130m GPS</p>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-sage/20 text-primary text-[11px] font-bold">
                {isVerifying ? "Auditing..." : "Telemetry Parsed"}
              </span>
            </div>
          </div>

          {/* Column B: Embossed Clay Inspection Checklist */}
          <div className="lg:col-span-7 glass-debossed rounded-2xl p-5 sm:p-6 flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-walnut/10">
              <span className="text-xs font-bold text-walnut uppercase tracking-wider flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-amber-glow">verified</span>
                Himalayan Sensor Audit
              </span>
              <span className="text-xs text-primary font-bold">
                {isVerifying ? "Processing..." : "3/3 Checks Passed"}
              </span>
            </div>

            <div className="space-y-2.5">
              {/* Check 1 */}
              <div className="p-3 rounded-xl bg-[#faf7f2] clay-tag flex items-center justify-between border border-white">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-sage/15 text-primary flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                  </span>
                  <div>
                    <p className="text-xs font-bold text-walnut">Annapurna Signboard Match</p>
                    <p className="text-[11px] text-walnut/60">Weathered timber grain &amp; Fishtail backdrop</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-primary px-2.5 py-0.5 rounded-full bg-sage/10">
                  99.4% Match
                </span>
              </div>

              {/* Check 2 */}
              <div className="p-3 rounded-xl bg-[#faf7f2] clay-tag flex items-center justify-between border border-white">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-amber-glow/15 text-amber-glow flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-[18px]">satellite_alt</span>
                  </span>
                  <div>
                    <p className="text-xs font-bold text-walnut">GPS &amp; Barometric Altitude</p>
                    <p className="text-[11px] text-walnut/60">28.5300° N, 83.8780° E • 4,128m (±4m)</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-primary px-2.5 py-0.5 rounded-full bg-sage/10">
                  Verified
                </span>
              </div>

              {/* Check 3 */}
              <div className="p-3 rounded-xl bg-[#faf7f2] clay-tag flex items-center justify-between border border-white">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-walnut/10 text-walnut flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-[18px]">shield</span>
                  </span>
                  <div>
                    <p className="text-xs font-bold text-walnut">Anti-Tamper Noise Audit</p>
                    <p className="text-[11px] text-walnut/60">Natural sensor noise &amp; morning sun bloom</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-primary px-2.5 py-0.5 rounded-full bg-sage/10">
                  100% RAW
                </span>
              </div>
            </div>

            {/* Claim Action Bar */}
            <div className="pt-3 border-t border-walnut/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs text-walnut/60 font-medium">Eligible Award:</span>
                <span className="text-xs font-bold text-amber-glow">
                  Main Character Ridge (Tier 02)
                </span>
              </div>

              {isMinted ? (
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-sage text-white text-xs font-bold shadow-md">
                  <span className="material-symbols-outlined text-base">check_circle</span>
                  <span>Medal Minted &amp; Recorded on Ledger!</span>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={handleMint}
                  disabled={isVerifying}
                  className="px-5 py-2.5 rounded-full clay-button-amber text-white text-xs font-bold tracking-wide transition-all active:scale-95 flex items-center justify-center gap-1.5 shadow-md"
                >
                  <span className="material-symbols-outlined text-[16px]">token</span>
                  <span>
                    {isVerifying ? "Inspecting Telemetry..." : "Mint Proof-of-Hike Virtual Medal"}
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: COMMUNITY DISPATCHES */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-walnut/15 pb-3">
          <div>
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              Field Notes
            </span>
            <h2 className="text-2xl sm:text-3xl font-headline font-bold text-walnut">
              Community Dispatches
            </h2>
          </div>

          <div className="flex items-center gap-2 mt-2 sm:mt-0 text-xs font-bold">
            <button
              onClick={() => setFilterCategory("All")}
              className={`px-3.5 py-1 rounded-full transition-all ${
                filterCategory === "All" ? "clay-pill-active" : "clay-pill-subtle text-walnut bg-[#faf7f2]"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilterCategory("Summits")}
              className={`px-3.5 py-1 rounded-full transition-all ${
                filterCategory === "Summits" ? "clay-pill-active" : "clay-pill-subtle text-walnut bg-[#faf7f2]"
              }`}
            >
              Summits
            </button>
            <button
              onClick={() => setFilterCategory("Teahouses")}
              className={`px-3.5 py-1 rounded-full transition-all ${
                filterCategory === "Teahouses" ? "clay-pill-active" : "clay-pill-subtle text-walnut bg-[#faf7f2]"
              }`}
            >
              Teahouses
            </button>
          </div>
        </div>

        {/* 3 Clean Minimal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredDispatches.map((dispatch) => (
            <article
              key={dispatch.id}
              className="glass-clay-card rounded-3xl p-4 flex flex-col justify-between hover:-translate-y-1 transition-transform"
            >
              <div>
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-3 bg-[#eae5dc]">
                  <img
                    alt={dispatch.author}
                    className="w-full h-full object-cover"
                    src={dispatch.image}
                    loading="lazy"
                  />
                  <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-[#faf7f2]/90 text-primary font-bold text-[11px] shadow-sm">
                    {dispatch.altitude}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center ${dispatch.avatarColor}`}
                    >
                      {dispatch.initials}
                    </span>
                    <span className="text-xs font-bold text-walnut">{dispatch.author}</span>
                  </div>
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    verified
                  </span>
                </div>

                {/* Micro Quote Field Tip */}
                <div className="glass-debossed rounded-xl p-3 mt-2">
                  <p className="text-xs text-walnut font-medium italic leading-relaxed">
                    &ldquo;{dispatch.quote}&rdquo;
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-2.5 border-t border-walnut/10 flex items-center justify-between text-[11px] text-walnut/60">
                <span className="font-semibold">{dispatch.route}</span>
                <button
                  type="button"
                  onClick={() => handleLike(dispatch.id)}
                  className="flex items-center gap-1 font-bold text-walnut hover:text-amber-glow transition-colors"
                >
                  <span className="material-symbols-outlined text-[15px] text-amber-glow">
                    favorite
                  </span>
                  <span>{dispatch.likes}</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* STREAMLINED ETHOS PILL */}
      <section className="glass-debossed rounded-3xl p-6 text-center max-w-3xl mx-auto flex flex-wrap items-center justify-around gap-4 text-xs font-bold text-walnut">
        <span className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-primary text-[18px]">compost</span>
          Leave No Trace
        </span>
        <span className="text-walnut/25">•</span>
        <span className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-amber-glow text-[18px]">verified_user</span>
          Unmanipulated Telemetry
        </span>
        <span className="text-walnut/25">•</span>
        <span className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-walnut text-[18px]">lock</span>
          Zero Commercial Fluff
        </span>
      </section>
    </div>
  );
}
