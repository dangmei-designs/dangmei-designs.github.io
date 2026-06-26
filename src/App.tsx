import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import MarqueeBorder from "./components/MarqueeBorder";
import ContactForm from "./components/ContactForm";
import { Zap, AlertCircle, ArrowUpRight, CheckCircle, ChevronUp, Lock } from "lucide-react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  // Store theme state, default to true (dark mode has exceptional SaaS minimalist look)
  const [isDark, setIsDark] = useState<boolean>(true);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.004, // Ultra-fast response matching near-native speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Snappy exponential curve
      smoothWheel: true,
      wheelMultiplier: 1.0, // Standard 1:1 mapping (no velocity amplification)
      touchMultiplier: 1.0, // Standard touch mapping
    });

    (window as any).lenis = lenis;

    // Synchronize ScrollTrigger with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    const rafHandler = (time: number) => {
      lenis.raf(time);
    };

    gsap.ticker.add(rafHandler);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(rafHandler);
      (window as any).lenis = undefined;
    };
  }, []);

  // Monitor scroll height to show sticky back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const handleScrollToSection = (id: string) => {
    const customLenis = (window as any).lenis;
    if (customLenis) {
      customLenis.scrollTo(`#${id}`, {
        duration: 0.005,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className={isDark ? "dark" : ""}>
      {/* Outer layout container adhering perfectly to Light/Dark presets */}
      <div className="min-h-screen bg-[#F9F9FB] text-[#121214] dark:bg-[#0B0F19] dark:text-[#F5F5F7] transition-colors duration-300 font-sans relative antialiased selection:bg-blue-600 selection:text-white">
        
        {/* Global sticky navigation bar */}
        <Navbar
          isDark={isDark}
          onToggleTheme={toggleTheme}
          onOpenContact={() => handleScrollToSection("contact-strategy-section")}
        />

        {/* Outer content container bound by Desktop-First constraints */}
        <main className="relative">
          
          {/* 1. Hero Block */}
          <Hero
            onOpenContact={() => handleScrollToSection("contact-strategy-section")}
            onOpenTestimonials={() => handleScrollToSection("testimonials")}
          />

          {/* 2. Star Testimonials and Client reviews */}
          <Testimonials />

          {/* Scrolling Marquee Border Separator */}
          <MarqueeBorder />

          {/* 3. Contact and strategy request booking block */}
          <ContactForm />

        </main>

        {/* Sleek Minimalist Footer */}
        <footer className="bg-neutral-100 dark:bg-neutral-950/70 py-12 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              
              {/* Brand and mini tag copy */}
              <div className="text-center md:text-left space-y-1.5">
                <span className="font-sans font-extrabold text-lg tracking-tight text-[#121214] dark:text-[#F5F5F7]">
                  dangmei.designs
                </span>
              </div>

              {/* Legal copyright and compliance seals */}
              <div className="text-center md:text-right space-y-2">
                <p className="text-[10px] font-mono text-neutral-450 dark:text-neutral-500 tracking-wide">
                  @ 2026 dangmei.designs. All rights reserved.
                </p>
              </div>

            </div>
          </div>
        </footer>



      </div>
    </div>
  );
}
