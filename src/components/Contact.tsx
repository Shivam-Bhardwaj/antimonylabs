"use client";

import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6 md:px-12 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-secondary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-sm relative z-10">
        {/* Main CTA card */}
        <div className="relative bg-bg-card rounded-3xl border border-border p-10 md:p-14 text-center overflow-hidden">
          {/* Decorative gradient border effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/10 via-transparent to-accent-secondary/10 opacity-50" />

          {/* Content */}
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to move fast?
            </h2>

            <p className="text-text-secondary text-lg max-w-md mx-auto mb-8 leading-relaxed text-center text-balance">
              Tell us what you&apos;re building. We&apos;ll tell you how we can help—no
              sales pitch, just engineers talking to engineers.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="mailto:hello@antimonylabs.com"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-accent to-accent-secondary text-bg-primary no-underline font-semibold text-sm overflow-hidden transition-transform duration-300 hover:scale-105 w-full sm:w-auto justify-center"
              >
                <span className="relative z-10">hello@antimonylabs.com</span>
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
            </div>

            {/* Response time */}
            <p className="mt-6 text-xs text-text-muted">
              We respond within 24 hours. Usually faster.
            </p>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent-secondary/10 to-transparent rounded-tr-full" />
        </div>

        {/* Alternative contact */}
        <div className="mt-8 text-center">
          <p className="text-text-muted text-sm">
            Prefer a call?{" "}
            <Link
              href="https://cal.com/antimonylabs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Book 30 minutes with our team
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
