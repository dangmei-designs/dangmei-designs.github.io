import { useEffect, useMemo, useState, Suspense, lazy, useRef } from "react";
import { ArrowRight, PhoneCall, Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import TextPressure from "./TextPressure";
import VariableProximity from "./VariableProximity";

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
);

interface HeroProps {
  onOpenContact: () => void;
  onOpenTestimonials: () => void;
}

export default function Hero({ onOpenContact, onOpenTestimonials }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const [titleNumber, setTitleNumber] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const titles = useMemo(
    () => [
      "high-converting",
      "perfectly-optimized",
      "lead-generating"
    ],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2500);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section
      ref={heroRef}
      id="hero-section"
      className="relative overflow-hidden h-screen min-h-screen flex items-center justify-center bg-[#0B0F19] transition-colors duration-300 px-4 md:px-6 z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Full screen Dithering Shader Background */}
      <Suspense fallback={<div className="absolute inset-0 bg-slate-900/20" />}>
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-30 mix-blend-screen">
          <Dithering
            colorBack="#00000000" // Transparent
            colorFront="#3b82f6"  // High quality brand blue
            shape="warp"
            type="4x4"
            speed={isHovered ? 0.5 : 0.2}
            className="w-full h-full"
            minPixelRatio={1}
          />
        </div>
      </Suspense>

      <motion.div
        className="relative z-10 px-4 sm:px-6 max-w-4xl mx-auto text-center flex flex-col items-center py-8 sm:py-12"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.1,
            }
          }
        }}
        initial="hidden"
        animate="visible"
      >
        {/* Headline */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
            }
          }}
          className="font-display text-[1.65rem] xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-2 sm:mb-3 md:mb-4 leading-[1.1] flex flex-col items-center"
        >
          <span className="w-full max-w-full flex justify-center">
            <TextPressure
              text="I build websites that are"
              flex={false}
              scale={false}
              useClassSize={true}
              textColor="#FFFFFF"
              containerRef={heroRef}
              className="font-black tracking-tighter text-center font-display text-[1.65rem] xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl block"
            />
          </span>
          <div className="relative flex items-center justify-center h-[1.25em] overflow-hidden mt-1 sm:mt-2 w-full">
            <AnimatePresence mode="wait">
              <motion.span
                key={titleNumber}
                className="absolute text-blue-500 dark:text-blue-400 font-extrabold pb-1.5 whitespace-nowrap leading-none"
                initial={{ y: "70%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-70%", opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                {titles[titleNumber]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.h1>
        
        {/* Description */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
            }
          }}
          className="text-neutral-300/90 text-xs xs:text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed tracking-wide font-light px-4"
        >
          designed to convert <br className="hidden sm:inline" />
          online visitors into paying clients.
        </motion.p>

        {/* Button container */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
            }
          }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center w-full max-w-md sm:max-w-none px-2 sm:px-4 relative z-20"
        >
          <motion.button
            id="hero-primary-cta"
            onClick={onOpenContact}
            className="group relative inline-flex h-12 sm:h-14 w-full sm:w-auto items-center justify-center gap-2.5 overflow-hidden rounded-full bg-blue-600 px-6 sm:px-8 text-xs sm:text-sm md:text-base font-bold text-white hover:bg-blue-500 hover:ring-4 hover:ring-blue-500/20 cursor-pointer transition-colors duration-200"
            initial={{ 
              boxShadow: '0 5px 0 0 #1e40af',
              y: 0 
            }}
            whileHover={{ 
              scale: 1.02,
              y: -2,
              boxShadow: '0 7px 0 0 #1e40af',
            }}
            whileTap={{ 
              scale: 0.98,
              y: 4,
              boxShadow: '0 2px 0 0 #1e40af',
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
          >
            <span className="relative z-10">Book a Free Meeting</span>
            <PhoneCall className="h-4 sm:h-4.5 w-4 sm:w-4.5 relative z-10 transition-transform duration-300 group-hover:scale-110" />
          </motion.button>

          <motion.button
            id="hero-testimonials-cta"
            onClick={onOpenTestimonials}
            className="group relative inline-flex h-12 sm:h-14 w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-full bg-white/10 px-6 sm:px-8 text-xs sm:text-sm md:text-base font-semibold text-white border border-white/20 hover:bg-white/15 hover:ring-4 hover:ring-white/10 cursor-pointer backdrop-blur-md transition-colors duration-200"
            initial={{ 
              boxShadow: '0 5px 0 0 rgba(255, 255, 255, 0.12)',
              y: 0 
            }}
            whileHover={{ 
              scale: 1.02,
              y: -2,
              boxShadow: '0 7px 0 0 rgba(255, 255, 255, 0.18)',
            }}
            whileTap={{ 
              scale: 0.98,
              y: 4,
              boxShadow: '0 2px 0 0 rgba(255, 255, 255, 0.05)',
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
          >
            <span>See Client Reviews</span>
            <Star className="h-4 sm:h-4.5 w-4 sm:w-4.5 text-blue-400 transition-transform duration-300 group-hover:scale-110 fill-blue-400/20" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
