// components/Footer.tsx
"use client";

import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useForm, ValidationError } from '@formspree/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [state, handleSubmit] = useForm("manrpvrw");

  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mb-24">

          {/* LEFT COLUMN: The Vibe (40% width) */}
          <div className="lg:col-span-2 flex flex-col justify-center space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-widest opacity-60 mb-4">
                Get In Touch
              </h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
                Let's Build <br /> Something Great.
              </h3>

              <p className="text-lg text-white/80 leading-relaxed max-w-sm">
                Have a project in mind? Let's create something friendly, functional, and approachable together.
              </p>
            </div>

            {/* Social Proof / Icons - Moved closer to text block */}
            <div className="flex gap-6">
              <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="GitHub">
                <FaGithub size={26} />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: The Action Form (60% width) */}
          <div className="lg:col-span-3 bg-white/5 p-8 md:p-12 rounded-3xl">

            {state.succeeded ? (
              // ✅ SUCCESS STATE (Visible only after sending)
              <div className="flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                <div className="bg-white/10 p-4 rounded-full mb-6 text-brand-light">
                  <CheckCircle size={48} />
                </div>
                <h3 className="text-3xl font-bold font-heading mb-4">Message Sent!</h3>
                <p className="text-white/70 max-w-sm mx-auto mb-8">
                  Thanks for reaching out! I've received your message and will get back to you shortly.
                </p>
                {/* Optional: Button to reset the form (requires page refresh or state reset logic) */}
                <button
                  onClick={() => window.location.reload()}
                  className="text-sm text-white/50 hover:text-white underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name Input */}
                  <div className="group">
                    <label htmlFor="name" className="sr-only">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors text-lg"
                      required
                    />

                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>
                  {/* Email Input */}
                  <div className="group">
                    <label htmlFor="email" className="sr-only">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors text-lg"
                      required
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>

                </div>

                {/* Message Input */}
                <div className="group">
                  <label htmlFor="message" className="sr-only">Tell me about it...</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors resize-none text-lg"
                    required
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="bg-white text-brand-dark font-bold py-4 px-10 rounded-full hover:bg-brand-light hover:text-white transition-all duration-300 flex items-center gap-2 shadow-lg"
                  >
                    {state.submitting ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight size={20} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>

        {/* BOTTOM ROW: Copyright */}
        <div className="pt-8 border-t border-white/10 text-center md:text-left">
          <p className="text-white/40 text-sm">
            © {currentYear} Scarlett. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}