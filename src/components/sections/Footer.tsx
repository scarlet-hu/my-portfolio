// components/Footer.tsx
"use client";

import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
              
              {/* CHANGE 1: Contrast. Text is now white/80 (brighter) for better readability */}
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
          {/* CHANGE 2: Form Container. Removed border, kept subtle bg-white/5 fill. */}
          <div className="lg:col-span-3 bg-white/5 p-8 md:p-12 rounded-3xl">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name Input */}
                <div className="group">
                  <label htmlFor="name" className="sr-only">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    // CHANGE 1: Contrast. placeholder-white/70 makes it much easier to read
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors text-lg"
                  />
                </div>
                {/* Email Input */}
                <div className="group">
                  <label htmlFor="email" className="sr-only">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors text-lg"
                  />
                </div>
              </div>

              {/* Message Input */}
              <div className="group">
                <label htmlFor="message" className="sr-only">Tell me about it...</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors resize-none text-lg"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-white text-brand-dark font-bold py-4 px-10 rounded-full hover:bg-brand-light hover:text-white transition-all duration-300 flex items-center gap-2 shadow-lg"
                >
                  Send Message
                  <ArrowRight size={20} />
                </button>
              </div>
            </form>
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