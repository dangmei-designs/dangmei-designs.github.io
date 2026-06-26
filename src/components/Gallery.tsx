import { ExternalLink, Zap, TrendingUp, Search, ChevronRight } from "lucide-react";
import { ClientProject } from "../types";
import ScrollFloat from "./ScrollFloat";

export default function Gallery() {
  const projects: ClientProject[] = [
    {
      id: "project-1",
      clientName: "Apex Roofing & Exterior Solutions",
      businessType: "Roofing Contractor",
      niche: "Residential & Commercial Re-Roofing",
      tagline: "Converting clicks to high-ticket roofing jobs",
      description: "Complete redesign and custom software build. Built an interactive local pricing estimate wizard that qualifies leads and pushes homeowner contact rates up by over 180%.",
      image: "/src/assets/images/roofing_mockup_1781956666170.jpg",
      liveUrl: "https://example-apex-roofing.com",
      techStack: ["React", "TailwindCSS", "Vite", "Resend SMS Dispatch", "Google Maps Platform"],
      metrics: {
        speedBoost: "99/100 Mobile",
        conversionChange: "+180% Phone Calls",
        seoRank: "Rank #1 local keywords"
      },
      beforeAfter: {
        beforeDesc: "",
        beforeSpeed: "8.2s",
        afterDesc: "Edge-hosted custom React site. Instant load in 0.3s. Automated quote wizard captures prospect phone number immediately before rendering pricing estimate.",
        afterSpeed: "0.3s"
      }
    },
    {
      id: "project-2",
      clientName: "Ironwood Climate Control",
      businessType: "HVAC Specialist",
      niche: "Emergency AC Repair & Furnace Install",
      tagline: "Converting emergency service requests instantly",
      description: "Designed specifically to capture emergency AC & Heater breakdown calls. Implemented a prominent, thumb-friendly floating contact panel and an automated dispatch routing link that instantly notifies field technicians.",
      image: "/src/assets/images/hvac_mockup_1781956683189.jpg",
      liveUrl: "https://example-ironwood-hvac.com",
      techStack: ["React", "Vite", "TailwindCSS", "Schedule-Trigger SDK", "Geocoding API"],
      metrics: {
        speedBoost: "100/100 Desktop",
        conversionChange: "3.2x Lead submits",
        seoRank: "Top-3 local pack HVAC"
      },
      beforeAfter: {
        beforeDesc: "",
        beforeSpeed: "6.1s",
        afterDesc: "High-contrast action panels and service request tabs. Embedded scheduling calendar shows actual open slots for immediate self-booking.",
        afterSpeed: "0.4s"
      }
    },
    {
      id: "project-3",
      clientName: "Cascade Plumbing & HydroJetting",
      businessType: "Plumbing Company",
      niche: "Residential Plumbing & Rooter Services",
      tagline: "Dominating local water heater searches",
      description: "Engineered a lightning-fast service portal utilizing aggressive caching and clean, semantic schema tagging. Pushed local organic rank straight to #1 for water heater emergency services.",
      image: "/src/assets/images/plumbing_mockup_1781956698755.jpg",
      liveUrl: "https://example-cascade-plumbers.com",
      techStack: ["React", "Vite", "TailwindCSS", "Lighthouse API Integration", "Vercel Edge"],
      metrics: {
        speedBoost: "98/100 Mobile Speed",
        conversionChange: "+220% Job Bookings",
        seoRank: "#1 local pack listing"
      },
      beforeAfter: {
        beforeDesc: "",
        beforeSpeed: "4.9s",
        afterDesc: "Fully accessible digital service menu with clean structured schemas. One-touch telephone links connect prospects directly to dispatched lines.",
        afterSpeed: "0.3s"
      }
    }
  ];

  return (
    <section id="proof-of-work" className="py-20 border-t border-neutral-150 dark:border-neutral-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-left max-w-3xl mb-16 space-y-4">
          <p className="font-mono text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            Proof of Work & Client Case Studies
          </p>
          <ScrollFloat
            containerClassName="text-3xl sm:text-4xl lg:text-5xl tracking-tighter text-[#121214] dark:text-[#F5F5F7] font-extrabold leading-tight display-header my-0"
            textClassName="font-extrabold"
          >
            Curation over volume. Websites that make the phones ring.
          </ScrollFloat>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
            I do not build generic cookie-cutter templates. Here is a look at selected web systems engineered specifically for local home services to dominate their local markets, optimize pay-per-click ad spending, and maximize telephone book-ins.
          </p>
        </div>

        {/* Dynamic Project Grid */}
        <div className="space-y-20">
          {projects.map((project) => {
            return (
              <div
                key={project.id}
                id={`project-item-${project.id}`}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                
                {/* Visual Screenshot of high-fidelity rebuilt site (Take 7 spans) */}
                <div className="lg:col-span-7">
                  <div className="relative group overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-[#F9F9FB] dark:bg-neutral-950 shadow-lg">
                    
                    {/* Header banner showing speed index or viewport check */}
                    <div className="px-4 py-2 bg-neutral-100/85 dark:bg-[#0F1321] border-b border-neutral-200 dark:border-neutral-850 flex items-center justify-between font-mono text-[10px]">
                      <div className="flex items-center space-x-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-800"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-300 dark:bg-blue-800"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500 dark:bg-blue-600"></span>
                        <span className="ml-2 text-neutral-600 dark:text-neutral-400 tracking-tight font-medium">
                          {project.clientName.toLowerCase().replace(/\s+/g, '-')}
                        </span>
                      </div>
                      <div className="text-blue-600 dark:text-blue-400 font-bold bg-blue-500/10 px-2 py-0.5 rounded">
                        HTTPS SECURE SECS: 0.3s
                      </div>
                    </div>

                    {/* Image frame */}
                    <div className="relative aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                      <img
                        src={project.image}
                        alt={`${project.clientName} mockup`}
                        className="w-full h-full object-cover transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />

                      {/* Performance Metric overlay */}
                      <div className="absolute bottom-4 right-4 bg-slate-950/90 text-white rounded-lg p-3 border border-emerald-500/40 shadow-2xl backdrop-blur-sm space-y-1">
                        <p className="text-[10px] font-mono tracking-wider text-emerald-400 uppercase font-black">Lighthouse Auditor</p>
                        <div className="flex items-center space-x-3">
                          <div className="text-center">
                            <span className="block text-xs font-bold text-neutral-400">Performance</span>
                            <span className="text-lg font-black font-display text-emerald-400">{project.metrics.speedBoost.split(" ")[0]}</span>
                          </div>
                          <div className="w-px h-8 bg-neutral-800"></div>
                          <div className="text-center">
                            <span className="block text-xs font-bold text-neutral-400">Inbound Leads</span>
                            <span className="text-lg font-black font-display text-blue-400">{project.metrics.conversionChange.split(" ")[0]}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Project Details Copywriting & KPIs (Take 5 spans) */}
                <div className="lg:col-span-5 space-y-6 text-left">
                  
                  {/* Basic meta */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono tracking-widest font-black uppercase text-blue-600 dark:text-blue-400">
                      {project.businessType}
                    </span>
                    <h3 className="text-2xl sm:text-3xl tracking-tight text-neutral-900 dark:text-neutral-50 font-display font-bold leading-tight">
                      {project.clientName}
                    </h3>
                    <p className="text-xs text-[#52525B] dark:text-[#94A3B8] font-mono tracking-tight font-medium">
                      Focus: <span className="text-[#121214] dark:text-[#F5F5F7] font-semibold">{project.niche}</span>
                    </p>
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#52525B] dark:text-[#94A3B8] font-normal leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Stats Row */}
                  <div className="grid grid-cols-3 gap-3 border-y border-neutral-150 dark:border-neutral-800 py-4">
                    <div className="space-y-0.5">
                      <span className="block text-[9px] font-mono tracking-wider text-neutral-400">MOBILE SPEED</span>
                      <span className="text-sm font-display font-black text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                        <Zap className="w-3 h-3 fill-emerald-500 text-emerald-500" />
                        {project.metrics.speedBoost.split(" ")[0]}
                      </span>
                    </div>
                    <div className="space-y-0.5 border-x border-neutral-150 dark:border-neutral-800 px-2">
                      <span className="block text-[9px] font-mono tracking-wider text-neutral-400">LEAD BOOST</span>
                      <span className="text-sm font-display font-black text-blue-600 dark:text-blue-400 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3 text-blue-500" />
                        {project.metrics.conversionChange.split(" ")[0]}
                      </span>
                    </div>
                    <div className="space-y-0.5 pl-2">
                      <span className="block text-[9px] font-mono tracking-wider text-neutral-400">ORGANIC RANK</span>
                      <span className="text-sm font-display font-black text-teal-600 dark:text-teal-455 flex items-center gap-1">
                        <Search className="w-3 h-3 text-teal-500" />
                        Page #1
                      </span>
                    </div>
                  </div>

                  {/* Exact Tech Stack Badges */}
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-mono font-bold uppercase text-neutral-400 tracking-wider">
                      The Engineered Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map(tech => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-850 text-[10px] font-mono text-neutral-700 dark:text-neutral-300 border border-neutral-150 dark:border-neutral-800 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
