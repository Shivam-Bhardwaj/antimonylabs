"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-border max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <span className="font-mono text-[0.75rem] text-text-muted">
          © {new Date().getFullYear()} Antimony Labs. All rights reserved.
        </span>
        <div className="flex gap-6">
          <Link
            href="/privacy"
            className="text-[0.8rem] text-text-secondary no-underline transition-colors duration-300 hover:text-accent"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-[0.8rem] text-text-secondary no-underline transition-colors duration-300 hover:text-accent"
          >
            Terms
          </Link>
        </div>
      </div>
      <div className="flex gap-6">
        <Link
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.8rem] text-text-secondary no-underline transition-colors duration-300 hover:text-accent"
        >
          LinkedIn
        </Link>
        <Link
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[0.8rem] text-text-secondary no-underline transition-colors duration-300 hover:text-accent"
        >
          GitHub
        </Link>
      </div>
    </footer>
  );
}
