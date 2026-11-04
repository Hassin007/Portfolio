import React, { useEffect, useRef, useState } from "react";
import { Mail, Linkedin, Github, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: boolean } = {};
    let hasError = false;

    // Validate inputs
    Object.keys(formState).forEach((key) => {
      const val = formState[key as keyof typeof formState];
      if (!val.trim()) {
        newErrors[key] = true;
        hasError = true;
      }
    });

    if (hasError) {
      setErrors(newErrors);
      // Automatically reset shake animations after a delay so it can shake again on next submission
      setTimeout(() => {
        setErrors({});
      }, 3000);
      return;
    }

    // Success submission trigger animation
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
      
      // Hide success notification after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1200);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-6 lg:px-12 bg-[#0B0B0C] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div 
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="font-mono text-sm text-[#C48452] mb-2">// 05 contact</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#F5F5F4] tracking-tight mb-4">
            Let's Work Together
          </h2>
          <div className="w-[60px] h-1 bg-[#C48452]" />
        </div>

        {/* Content Columns split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Cards */}
          <div
            className={`lg:col-span-5 space-y-6 transition-all duration-800 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <p className="font-sans text-[#A1A1AA] text-base leading-relaxed mb-6">
              Whether it's a full-stack project, an AI integration, or just a conversation about building something cool — my inbox is always open. Let's make something impressive together!
            </p>

            {/* Direct Information connections */}
            <div className="space-y-4">
              {/* Email Card */}
              <a
                href="mailto:hassinsaghir6@gmail.com"
                className="flex items-center gap-4 bg-[#141416]/90 border border-[#3F3F46] p-4 rounded-xl hover:border-[#C48452] hover:shadow-[0_0_20px_rgba(196,132,82,0.08)] transition-all duration-300 group"
              >
                <div className="p-3 bg-[#1C1C1F] border border-[#3F3F46] group-hover:border-[#C48452] text-[#A1A1AA] group-hover:text-[#C48452] rounded-lg transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block font-mono text-[10px] uppercase text-[#A1A1AA] tracking-wider mb-0.5">
                    Email me
                  </span>
                  <span className="text-sm font-medium text-[#F5F5F4] break-all">
                    hassinsaghir6@gmail.com
                  </span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/hsn9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#141416]/90 border border-[#3F3F46] p-4 rounded-xl hover:border-[#C48452] hover:shadow-[0_0_20px_rgba(196,132,82,0.08)] transition-all duration-300 group"
              >
                <div className="p-3 bg-[#1C1C1F] border border-[#3F3F46] group-hover:border-[#C48452] text-[#A1A1AA] group-hover:text-[#C48452] rounded-lg transition-colors">
                  <Linkedin size={18} />
                </div>
                <div>
                  <span className="block font-mono text-[10px] uppercase text-[#A1A1AA] tracking-wider mb-0.5">
                    Connect on LinkedIn
                  </span>
                  <span className="text-sm font-medium text-[#F5F5F4]">
                    linkedin.com/in/hsn9
                  </span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Hassin007"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#141416]/90 border border-[#3F3F46] p-4 rounded-xl hover:border-[#C48452] hover:shadow-[0_0_20px_rgba(196,132,82,0.08)] transition-all duration-300 group"
              >
                <div className="p-3 bg-[#1C1C1F] border border-[#3F3F46] group-hover:border-[#C48452] text-[#A1A1AA] group-hover:text-[#C48452] rounded-lg transition-colors">
                  <Github size={18} />
                </div>
                <div>
                  <span className="block font-mono text-[10px] uppercase text-[#A1A1AA] tracking-wider mb-0.5">
                    Explore Repositories
                  </span>
                  <span className="text-sm font-medium text-[#F5F5F4]">
                    github.com/Hassin007
                  </span>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:0319-0332960"
                className="flex items-center gap-4 bg-[#141416]/90 border border-[#3F3F46] p-4 rounded-xl hover:border-[#C48452] hover:shadow-[0_0_20px_rgba(196,132,82,0.08)] transition-all duration-300 group"
              >
                <div className="p-3 bg-[#1C1C1F] border border-[#3F3F46] group-hover:border-[#C48452] text-[#A1A1AA] group-hover:text-[#C48452] rounded-lg transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="block font-mono text-[10px] uppercase text-[#A1A1AA] tracking-wider mb-0.5">
                    Call Direct
                  </span>
                  <span className="text-sm font-medium text-[#F5F5F4]">
                    0319-0332960
                  </span>
                </div>
              </a>

              {/* Map Location */}
              <div className="flex items-center gap-4 bg-[#141416]/90 border border-[#3F3F46] p-4 rounded-xl hover:border-[#C48452] transition-colors duration-300">
                <div className="p-3 bg-[#1C1C1F] border border-[#3F3F46] text-[#A1A1AA] rounded-lg">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="block font-mono text-[10px] uppercase text-[#A1A1AA] tracking-wider mb-0.5">
                    Location
                  </span>
                  <span className="text-sm font-medium text-[#F5F5F4]">
                    Karachi, Pakistan
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form box */}
          <div
            className={`lg:col-span-7 transition-all duration-800 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="bg-[#141416] border border-[#3F3F46] p-6 sm:p-8 rounded-xl shadow-lg relative">
              
              {/* Success Notification */}
              {isSuccess && (
                <div className="absolute inset-0 bg-[#141416] rounded-xl z-20 flex flex-col items-center justify-center p-6 text-center animate-fadeInUp">
                  <CheckCircle size={48} className="text-[#F1C9A5] mb-4 animate-bounce" />
                  <h3 className="font-display font-semibold text-xl text-[#F5F5F4] mb-2">Message Dispatched!</h3>
                  <p className="text-sm text-[#A1A1AA] max-w-sm mb-6">
                    Thank you! Your message has been sent successfully. I will get back to you inside 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="py-2 px-6 bg-[#C48452] hover:bg-[#E2A46E] text-white font-medium text-xs rounded transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className={`relative ${errors.name ? "animate-shake" : ""}`}>
                  <label 
                    htmlFor="name" 
                    className={`block font-mono text-[10px] uppercase tracking-wider mb-2 transition-colors ${
                      errors.name ? "text-red-400" : "text-[#A1A1AA]"
                    }`}
                  >
                    Your Name {errors.name && <span className="text-red-400 font-sans ml-1">*Required</span>}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="Muhammad Hassin Saghir"
                    className={`w-full bg-[#1C1C1F] text-[#F5F5F4] text-sm px-4 py-3 rounded-xl border transition-all duration-300 outline-none ${
                      errors.name ? "border-red-400/40" : "border-[#3F3F46]/40 focus:border-[#C48452] focus:shadow-[0_0_12px_rgba(196,132,82,0.15)] focus:ring-1 focus:ring-[#C48452]/20"
                    }`}
                  />
                </div>

                {/* Email */}
                <div className={`relative ${errors.email ? "animate-shake" : ""}`}>
                  <label 
                    htmlFor="email" 
                    className={`block font-mono text-[10px] uppercase tracking-wider mb-2 transition-colors ${
                      errors.email ? "text-red-400" : "text-[#A1A1AA]"
                    }`}
                  >
                    Email Address {errors.email && <span className="text-red-400 font-sans ml-1">*Required</span>}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="hassin@example.com"
                    className={`w-full bg-[#1C1C1F] text-[#F5F5F4] text-sm px-4 py-3 rounded-xl border transition-all duration-300 outline-none ${
                      errors.email ? "border-red-400/40" : "border-[#3F3F46]/40 focus:border-[#C48452] focus:shadow-[0_0_12px_rgba(196,132,82,0.15)] focus:ring-1 focus:ring-[#C48452]/20"
                    }`}
                  />
                </div>

                {/* Subject */}
                <div className={`relative ${errors.subject ? "animate-shake" : ""}`}>
                  <label 
                    htmlFor="subject" 
                    className={`block font-mono text-[10px] uppercase tracking-wider mb-2 transition-colors ${
                      errors.subject ? "text-red-400" : "text-[#A1A1AA]"
                    }`}
                  >
                    Subject {errors.subject && <span className="text-red-400 font-sans ml-1">*Required</span>}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleInputChange}
                    placeholder="Full-Stack Internship Opportunity"
                    className={`w-full bg-[#1C1C1F] text-[#F5F5F4] text-sm px-4 py-3 rounded-xl border transition-all duration-300 outline-none ${
                      errors.subject ? "border-red-400/40" : "border-[#3F3F46]/40 focus:border-[#C48452] focus:shadow-[0_0_12px_rgba(196,132,82,0.15)] focus:ring-1 focus:ring-[#C48452]/20"
                    }`}
                  />
                </div>

                {/* Message */}
                <div className={`relative ${errors.message ? "animate-shake" : ""}`}>
                  <label 
                    htmlFor="message" 
                    className={`block font-mono text-[10px] uppercase tracking-wider mb-2 transition-colors ${
                      errors.message ? "text-red-400" : "text-[#A1A1AA]"
                    }`}
                  >
                    Message {errors.message && <span className="text-red-400 font-sans ml-1">*Required</span>}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Hey Hassin, let's connect and schedule a talk..."
                    className={`w-full bg-[#1C1C1F] text-[#F5F5F4] text-sm px-4 py-3 rounded-xl border transition-all duration-300 outline-none resize-none ${
                      errors.message ? "border-red-400/40" : "border-[#3F3F46]/40 focus:border-[#C48452] focus:shadow-[0_0_12px_rgba(196,132,82,0.15)] focus:ring-1 focus:ring-[#C48452]/20"
                    }`}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#C48452] hover:bg-[#E2A46E] text-white py-3.5 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
