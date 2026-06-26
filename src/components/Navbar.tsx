import { Calendar, Layers, ShieldCheck, Mail, ArrowRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { motion } from "motion/react";

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenContact: () => void;
}

export default function Navbar({ isDark, onToggleTheme, onOpenContact }: NavbarProps) {
  return (
    <nav
      id="main-navbar"
      className="absolute top-0 left-0 right-0 w-full z-50 border-b border-transparent bg-transparent transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="font-sans font-extrabold text-lg tracking-tight text-white select-none">
              dangmei.designs
            </span>
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-3">
            <motion.button
              id="nav-cta-btn"
              onClick={onOpenContact}
              className="relative group overflow-hidden px-4 py-2 font-display font-bold text-xs tracking-tight rounded-md bg-white text-neutral-950 flex items-center gap-1.5 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
              initial={{ 
                boxShadow: '0 4px 0 0 #cbd5e1',
                y: 0 
              }}
              whileHover={{ 
                scale: 1.02,
                y: -1.5,
                boxShadow: '0 5.5px 0 0 #cbd5e1',
              }}
              whileTap={{ 
                scale: 0.98,
                y: 3,
                boxShadow: '0 1px 0 0 #cbd5e1',
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
            >
              <span>Book Free Meeting</span>
              <Calendar className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
}
