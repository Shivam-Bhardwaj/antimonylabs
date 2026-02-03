"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-border-subtle"
          : "bg-transparent"
      }`}
    >
      <div className="container-2xl flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 no-underline group">
          <div className="relative">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center font-serif text-lg italic text-bg-primary font-medium">
              Sb
            </div>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent to-accent-secondary opacity-0 blur-xl group-hover:opacity-50 transition-opacity duration-500" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-wide text-text-primary">
              ANTIMONY
            </span>
            <span className="text-[10px] tracking-[0.3em] text-text-muted uppercase">
              Labs
            </span>
          </div>
        </Link>

        <ul className="hidden md:flex gap-8 list-none">
          {["Services", "Clients", "About", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-text-secondary no-underline text-sm font-medium transition-colors duration-300 hover:text-text-primary relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-accent to-accent-secondary transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contact"
          className="relative px-6 py-2.5 text-sm font-medium text-text-primary no-underline rounded-full overflow-hidden group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-accent to-accent-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="absolute inset-[1px] bg-bg-primary rounded-full group-hover:bg-transparent transition-colors duration-500" />
          <span className="relative z-10 group-hover:text-bg-primary transition-colors duration-500">
            Get in Touch
          </span>
        </Link>
      </div>
    </nav>
  );
}
