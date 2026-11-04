import React, { useEffect, useRef, useState } from "react";
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle, AlertTriangle, X } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
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
    if (errorMessage) {
      setErrorMessage(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
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
      setTimeout(() => {
        setErrors({});
      }, 3000);
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setErrorMessage("Email service configuration is missing. Please reach out directly at hassinsaghir6@gmail.com.");
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formState.name,
          from_name: formState.name,
          email: formState.email,
          reply_to: formState.email,
          subject: formState.subject,
          message: formState.message,
        },
        publicKey
      );

      setIsSuccess(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      console.error("EmailJS dispatch failed:", err);
      const errDetails = err instanceof Error ? err.message : (typeof err === "object" && err !== null && "text" in err ? String((err as { text: unknown }).text) : "Unknown error");
      setErrorMessage(`Failed to send message (${errDetails}). Please try again or reach out directly at hassinsaghir6@gmail.com.`);
    } finally {
      setIsSubmitting(false);
    }
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
          <p className="font-mono text-sm text-[#C48452] mb-2">// 06 CONTACT</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#F5F5F4] tracking-tight mb-4">
            Let's Work Together
          </h2>
          <div className="w-[60px] h-1 bg-[#C48452]" />
        </div>

        {/* Content Columns split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info Cards */}
          <div
            className={`lg:col-span-5 space-y-6 transition-all duration-800 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <p className="font-sans text-[#A1A1AA] text-base leading-relaxed mb-6">
              Whether it's an AI agentic pipeline, a full-stack engineering challenge, or discussing distributed architectures — my inbox is always open. Send a direct message and let's build something remarkable.
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

          {/* Right Column: Contact form box with EmailJS */}
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
                    Thank you! Your message has been sent successfully via EmailJS. I will respond to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="py-2.5 px-6 bg-[#C48452] hover:bg-[#E2A46E] text-white font-medium text-xs font-mono uppercase tracking-wider rounded-xl transition-colors shadow-md"
                  >
                    Send Another Message
                  </button>
                </div>
              )}

              {/* Inline Error Alert */}
              {errorMessage && (
                <div className="mb-6 p-4 rounded-xl bg-red-950/40 border border-red-500/40 text-red-200 text-xs font-mono flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2">
                    <AlertTriangle size={16} className="text-red-400 shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                  <button
                    onClick={() => setErrorMessage(null)}
                    className="text-red-400 hover:text-red-200 p-1"
                    aria-label="Dismiss error"
                  >
                    <X size={14} />
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
                    placeholder="AI / Full-Stack Collaboration"
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
                    placeholder="Hey Hassin, let's connect and discuss an opportunity..."
                    className={`w-full bg-[#1C1C1F] text-[#F5F5F4] text-sm px-4 py-3 rounded-xl border transition-all duration-300 outline-none resize-none ${
                      errors.message ? "border-red-400/40" : "border-[#3F3F46]/40 focus:border-[#C48452] focus:shadow-[0_0_12px_rgba(196,132,82,0.15)] focus:ring-1 focus:ring-[#C48452]/20"
                    }`}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#C48452] hover:bg-[#E2A46E] text-white py-3.5 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-lg active:scale-[0.98] disabled:opacity-60 cursor-pointer"
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
