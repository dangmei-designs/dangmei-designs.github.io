import { useState, FormEvent } from "react";
import { Send, CheckCircle2, PhoneCall, Calendar, Mail, FileText, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ScrollFloat from "./ScrollFloat";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "05ddcdd7-f7f2-4864-82aa-32e53b626c0d",
          name: formData.name,
          email: formData.email,
          businessName: formData.businessName,
          message: formData.message,
          from_name: "Lead Generation Portfolio"
        })
      });
      
      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
      } else {
        alert(result.message || "Failed to submit form. Please check your access key or try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error sending your request. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-strategy-section" className="min-h-screen flex items-center justify-center py-20 transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12 flex flex-col items-center space-y-1">
          <ScrollFloat
            containerClassName="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl tracking-[6px] xs:tracking-[12px] sm:tracking-[24px] md:tracking-[34px] lg:tracking-[44px] pl-[6px] xs:pl-[12px] sm:pl-[24px] md:pl-[34px] lg:pl-[44px] text-[#121214] dark:text-[#F5F5F7] display-header !my-0 mx-auto w-full flex justify-center flex-wrap"
            textClassName="font-black uppercase !leading-none"
            stagger={0.04}
            animationDuration={1.2}
            scrollStart="top bottom-=5%"
            scrollEnd="bottom center-=10%"
          >
            Got something in
          </ScrollFloat>
          <ScrollFloat
            containerClassName="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl tracking-[6px] xs:tracking-[12px] sm:tracking-[24px] md:tracking-[34px] lg:tracking-[44px] pl-[6px] xs:pl-[12px] sm:pl-[24px] md:pl-[34px] lg:pl-[44px] text-[#121214] dark:text-[#F5F5F7] display-header !my-0 mx-auto w-full flex justify-center flex-wrap"
            textClassName="font-black uppercase !leading-none"
            stagger={0.04}
            animationDuration={1.2}
            scrollStart="top bottom-=5%"
            scrollEnd="bottom center-=10%"
          >
            your mind?
          </ScrollFloat>
          <p className="text-[13px] sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal pt-2">
            Book a free meeting request!
          </p>
        </div>

        {/* Secure Form - Centered Layout */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white dark:bg-neutral-950 p-6 md:p-8 rounded-2xl shadow-2xl relative">
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  id="booking-form-element"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4 text-left"
                >

                  <div className="space-y-4">
                    <div className="space-y-1">
                      <label className="block text-[10px] font-mono tracking-wider font-bold text-neutral-400 uppercase">NAME</label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 text-xs sm:text-sm rounded-md border border-neutral-200 dark:border-neutral-800 bg-[#F9F9FB] dark:bg-neutral-900 text-[#121214] dark:text-[#F5F5F7] focus:outline-none focus:ring-1.5 focus:ring-blue-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[10px] font-mono tracking-wider font-bold text-neutral-400 uppercase">EMAIL ADDRESS</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g., mail@summitbuilders.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 text-xs sm:text-sm rounded-md border border-neutral-200 dark:border-neutral-800 bg-[#F9F9FB] dark:bg-neutral-900 text-[#121214] dark:text-[#F5F5F7] focus:outline-none focus:ring-1.5 focus:ring-blue-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[10px] font-mono tracking-wider font-bold text-neutral-400 uppercase">COMPANY NAME</label>
                      <input
                        type="text"
                        placeholder="e.g., Summit Builders"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full px-3 py-2 text-xs sm:text-sm rounded-md border border-neutral-200 dark:border-neutral-800 bg-[#F9F9FB] dark:bg-neutral-900 text-[#121214] dark:text-[#F5F5F7] focus:outline-none focus:ring-1.5 focus:ring-blue-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-[10px] font-mono tracking-wider font-bold text-neutral-400 uppercase">MESSAGE</label>
                      <textarea
                        rows={3}
                        placeholder="Need an upgrade for our site, make a new site, or custom request..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3 py-2 text-xs sm:text-sm rounded-md border border-neutral-200 dark:border-neutral-800 bg-[#F9F9FB] dark:bg-neutral-900 text-[#121214] dark:text-[#F5F5F7] focus:outline-none focus:ring-1.5 focus:ring-blue-500"
                      ></textarea>
                    </div>
                  </div>

                  <motion.button
                    id="submit-booking-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-3 py-4 font-display font-black text-xs uppercase tracking-wider text-white bg-blue-600 dark:bg-blue-500 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    initial={{ 
                      boxShadow: '0 5px 0 0 #1e40af',
                      y: 0 
                    }}
                    whileHover={isSubmitting ? {} : { 
                      scale: 1.01,
                      y: -1.5,
                      boxShadow: '0 6.5px 0 0 #1e40af',
                    }}
                    whileTap={isSubmitting ? {} : { 
                      scale: 0.99,
                      y: 4,
                      boxShadow: '0 1px 0 0 #1e40af',
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Submitting Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit!</span>
                      </>
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  id="contact-form-success-alert"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 space-y-6 w-full"
                >
                  <div className="h-16 w-16 bg-blue-500/15 text-blue-500 rounded-full flex items-center justify-center">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-display font-black tracking-tight text-neutral-900 dark:text-neutral-50">
                      Message Sent!
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-md font-normal leading-relaxed text-center mx-auto">
                      Hey <strong>{formData.name}</strong>, your request succeeded.
                      <br /><br />
                      Expect an email within 24 hours to schedule your session. Talk to you soon!
                    </p>
                  </div>

                  <motion.button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2 border border-neutral-200 dark:border-neutral-800 font-mono text-[11px] tracking-wide font-bold uppercase rounded text-neutral-500 dark:text-neutral-450 cursor-pointer"
                    initial={{ 
                      boxShadow: '0 4px 0 0 rgba(0, 0, 0, 0.05)',
                      y: 0 
                    }}
                    whileHover={{ 
                      scale: 1.02,
                      y: -1.5,
                      boxShadow: '0 5.5px 0 0 rgba(0, 0, 0, 0.08)',
                    }}
                    whileTap={{ 
                      scale: 0.98,
                      y: 3,
                      boxShadow: '0 1px 0 0 rgba(0, 0, 0, 0.02)',
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    }}
                  >
                    RETURN TO FORM
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
