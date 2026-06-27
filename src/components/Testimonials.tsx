import { Star, Quote, ShieldCheck, MapPin } from "lucide-react";
import { Testimonial } from "../types";
import { motion } from "motion/react";
import ScrollFloat from "./ScrollFloat";

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: "test-1",
      clientName: "Marcus Vance",
      role: "Owner",
      businessName: "Vance Residential Roofing",
      businessType: "Residential Cleaning Services",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=120&h=120",
      rating: 5,
      review: "Dangmei transformed our residential cleaning business. Our old website looked decent but generated zero clients. Dangmei built a custom landing page and integrated an online booking calculator. This setup brings 4 to 5 recurring cleaning clients every week. Highly recommend!",
      date: "May 2026"
    },
    {
      id: "test-2",
      clientName: "Elena Rostova",
      role: "Marketing Director",
      businessName: "Northstar Geothermal & HVAC",
      businessType: "Junk Removal Contractor",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120&h=120",
      rating: 5,
      review: "Our previous agency charged $1,200 monthly for search ranking, but we received zero booked junk removal jobs. Dangmei built a custom site with high search rankings. Our conversion rate rose from 2.1% to nearly 8% in weeks. The project paid for itself within a week!",
      date: "April 2026"
    },
    {
      id: "test-3",
      clientName: "David 'Red' Callahan",
      role: "General Manager",
      businessName: "Callahan Pipeline & Plumbing",
      businessType: "Auto Detailing Services",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120&h=120",
      rating: 5,
      review: "I doubted paying for a custom site when generic builders cost $20 monthly. Speed and quality drive auto detailing conversions. Car owners search online. A site failing to load instantly on mobile forces prospects to call competitors. Dangmei’s site loads instantly. Our booking rate doubled.",
      date: "March 2026"
    }
  ];

  return (
    <section id="testimonials" className="min-h-screen flex items-center justify-center py-20 bg-neutral-50/50 dark:bg-neutral-900/10 transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <ScrollFloat
            containerClassName="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl tracking-[6px] xs:tracking-[12px] sm:tracking-[24px] md:tracking-[34px] lg:tracking-[44px] pl-[6px] xs:pl-[12px] sm:pl-[24px] md:pl-[34px] lg:pl-[44px] text-[#121214] dark:text-[#F5F5F7] display-header !my-0 mx-auto w-full flex justify-center flex-wrap"
            textClassName="font-black uppercase !leading-none"
            stagger={0.03}
            scrollStart="top bottom-=5%"
            scrollEnd="bottom center-=10%"
          >
            Testimonials
          </ScrollFloat>
          <p className="text-[13px] sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal mt-1">
            Review stories from real service owners.
          </p>
        </div>

        {/* Reviews layout */}
        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map(item => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 35 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1]
                  }
                }
              }}
              className="w-full h-full"
            >
              <motion.div
                id={`testimonial-card-${item.id}`}
                className="relative p-6 sm:p-8 rounded-xl border border-neutral-200 dark:border-neutral-850 bg-white dark:bg-neutral-950 flex flex-col justify-between space-y-6 text-left cursor-pointer h-full"
                initial={{ 
                  boxShadow: '0 4px 0 0 rgba(0, 0, 0, 0.05)',
                  y: 0 
                }}
                whileHover={{ 
                  scale: 1.015,
                  y: -3,
                  boxShadow: '0 8px 16px -4px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03), 0 6px 0 0 rgba(0, 0, 0, 0.04)',
                }}
                whileTap={{ 
                  scale: 0.985,
                  y: 2,
                  boxShadow: '0 2px 0 0 rgba(0, 0, 0, 0.02)',
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 22
                }}
              >
                {/* Decorative Quote Icon */}
                <div className="absolute right-6 top-6 text-neutral-100 dark:text-neutral-900 pointer-events-none">
                  <Quote className="w-10 h-10 fill-current opacity-70" />
                </div>

                {/* Core review test */}
                <div className="space-y-4">
                  {/* Star rating component */}
                  <div className="flex items-center space-x-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-blue-500 text-blue-500" />
                    ))}
                  </div>

                  <p className="text-[13px] sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                    &ldquo;{item.review}&rdquo;
                  </p>
                </div>

                {/* Owner metadata footprint */}
                <div className="flex items-center space-x-3 pt-6 border-t border-neutral-100 dark:border-neutral-900">
                  {/* Business details */}
                  <div className="space-y-0.5">
                    <h4 className="font-display font-extrabold text-xs text-neutral-900 dark:text-neutral-50 tracking-tight">
                      {item.clientName}
                    </h4>
                    <div className="flex items-center space-x-1 text-[9px] text-[#52525B] dark:text-[#94A3B8]">
                      <MapPin className="w-3 h-3 text-blue-500" />
                      <span>{item.businessType}</span>
                    </div>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
