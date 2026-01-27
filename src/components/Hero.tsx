"use client";

import Link from "next/link";

const stats = [
  { value: "12+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "4", label: "Fortune 500 Clients" },
];

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-32 pb-16 md:px-12 max-w-[1400px] mx-auto">
      <div
        className="font-mono text-[0.75rem] text-accent tracking-[0.2em] uppercase mb-6 flex items-center gap-4 opacity-0 animate-fade-slide-up"
        style={{ animationDelay: "0s" }}
      >
        <span className="w-10 h-px bg-accent" />
        Research & Development Lab
      </div>

      <h1 className="text-[clamp(3rem,8vw,7rem)] font-extrabold leading-[1.05] tracking-[-0.03em] mb-8">
        <span className="block overflow-hidden">
          <span
            className="inline-block animate-reveal-line"
            style={{ animationDelay: "0.2s" }}
          >
            Engineering the
          </span>
        </span>
        <span className="block overflow-hidden">
          <span
            className="inline-block animate-reveal-line"
            style={{ animationDelay: "0.35s" }}
          >
            <em className="text-accent font-serif italic font-normal">
              future
            </em>{" "}
            of intelligent
          </span>
        </span>
        <span className="block overflow-hidden">
          <span
            className="inline-block animate-reveal-line"
            style={{ animationDelay: "0.5s" }}
          >
            machines
          </span>
        </span>
      </h1>

      <p
        className="max-w-[540px] text-[1.1rem] text-text-secondary leading-[1.8] mb-12 opacity-0 animate-fade-slide-up"
        style={{ animationDelay: "0.6s" }}
      >
        We build advanced robotics systems and AI-driven tools that push the
        boundaries of what&apos;s possible. Trusted by industry leaders to solve
        their most complex technical challenges.
      </p>

      <div
        className="flex gap-6 items-center opacity-0 animate-fade-slide-up"
        style={{ animationDelay: "0.8s" }}
      >
        <Link
          href="#contact"
          className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-bg-primary no-underline font-semibold text-[0.9rem] tracking-[0.02em] transition-all duration-300 relative overflow-hidden hover:translate-y-[-2px] hover:shadow-[0_10px_40px_var(--color-accent-dim)] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-all before:duration-500 hover:before:left-full"
        >
          Start a Project
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
        <Link
          href="#services"
          className="text-text-secondary no-underline text-[0.9rem] flex items-center gap-2 transition-colors duration-300 hover:text-text-primary"
        >
          Explore Services
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </Link>
      </div>

      <div
        className="flex gap-16 mt-24 pt-12 border-t border-border opacity-0 animate-fade-slide-up flex-wrap"
        style={{ animationDelay: "1s" }}
      >
        {stats.map((stat) => (
          <div key={stat.label} className="text-left">
            <div className="font-mono text-[2.5rem] text-accent font-medium">
              {stat.value}
            </div>
            <div className="text-[0.8rem] text-text-muted uppercase tracking-[0.1em] mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
