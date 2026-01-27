"use client";

import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-40 px-6 md:px-12 max-w-[1400px] mx-auto text-center relative before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:h-20 before:bg-gradient-to-b before:from-transparent before:to-accent"
    >
      <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-[-0.03em] mb-6">
        Let&apos;s build{" "}
        <span className="font-serif italic font-normal">something</span>
        <br />
        extraordinary
      </h2>
      <p className="text-text-secondary text-[1.1rem] max-w-[500px] mx-auto mb-12 leading-[1.7]">
        Have a complex technical challenge? We&apos;d love to hear about it.
        Reach out to discuss how we can help bring your vision to life.
      </p>
      <Link
        href="mailto:hello@antimonylabs.com"
        className="inline-flex items-center gap-3 font-mono text-[1.2rem] text-accent no-underline px-8 py-4 border border-accent transition-all duration-300 hover:bg-accent hover:text-bg-primary"
      >
        hello@antimonylabs.com
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
    </section>
  );
}
