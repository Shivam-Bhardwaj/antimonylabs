"use client";

import Link from "next/link";

const stats = [
  { value: "40+", label: "Engineers Worldwide" },
  { value: "6", label: "Countries" },
  { value: "100+", label: "Systems Deployed" },
];

const clientLogos = ["Tesla", "Meta", "Applied", "GoPro"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-28 pb-16 md:px-12 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-secondary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto w-full relative z-10 text-center">
        {/* Urgency badge */}
        <div
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-accent/10 to-accent-secondary/10 border border-accent/20 mb-8 opacity-0 animate-fade-slide-up"
          style={{ animationDelay: "0s" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="font-mono text-xs text-text-primary tracking-wide">
            The AI transformation is happening now
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-[clamp(2.2rem,6vw,4.5rem)] font-bold leading-[1.1] tracking-[-0.03em] mb-6">
          <span className="block overflow-hidden">
            <span
              className="inline-block animate-reveal-line"
              style={{ animationDelay: "0.1s" }}
            >
              Your engineering partner
            </span>
          </span>
          <span className="block overflow-hidden">
            <span
              className="inline-block animate-reveal-line"
              style={{ animationDelay: "0.25s" }}
            >
              for the <span className="gradient-text">AI era</span>
            </span>
          </span>
        </h1>

        {/* Value prop */}
        <p
          className="max-w-[700px] mx-auto text-lg md:text-xl text-text-secondary leading-relaxed mb-10 opacity-0 animate-fade-slide-up"
          style={{ animationDelay: "0.5s" }}
        >
          We&apos;re a global team of engineers helping manufacturers and enterprises
          integrate <strong className="text-text-primary">AI infrastructure</strong> and{" "}
          <strong className="text-text-primary">intelligent hardware systems</strong>—before
          your competitors do.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-wrap gap-4 items-center justify-center mb-16 opacity-0 animate-fade-slide-up"
          style={{ animationDelay: "0.65s" }}
        >
          <Link
            href="#contact"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-accent to-accent-secondary text-bg-primary no-underline font-semibold text-sm overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <span className="relative z-10">Talk to Our Team</span>
            <svg
              className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          <Link
            href="#services"
            className="group inline-flex items-center gap-2 px-6 py-4 rounded-full border border-border text-text-secondary no-underline text-sm font-medium transition-all duration-300 hover:border-accent/50 hover:text-text-primary"
          >
            <span>See What We Build</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </Link>
        </div>

        {/* Social proof - Client logos */}
        <div
          className="mb-16 opacity-0 animate-fade-slide-up"
          style={{ animationDelay: "0.8s" }}
        >
          <p className="text-xs text-text-muted uppercase tracking-[0.2em] mb-6">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((logo) => (
              <span
                key={logo}
                className="text-xl md:text-2xl font-bold text-text-muted/50 hover:text-text-secondary transition-colors duration-300"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div
          className="flex flex-wrap justify-center gap-8 md:gap-16 pt-10 border-t border-border opacity-0 animate-fade-slide-up"
          style={{ animationDelay: "0.95s" }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-text-muted uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
