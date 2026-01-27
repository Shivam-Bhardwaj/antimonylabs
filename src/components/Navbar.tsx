"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-100 px-6 py-6 md:px-12 flex justify-between items-center bg-gradient-to-b from-bg-primary to-transparent">
      <Link href="/" className="flex items-center gap-3 no-underline">
        <div className="w-9 h-9 border-2 border-accent flex items-center justify-center font-serif text-xl italic text-accent relative before:absolute before:inset-[-4px] before:border before:border-accent-dim">
          Sb
        </div>
        <span className="font-bold text-[1.1rem] tracking-[0.05em] uppercase text-text-primary">
          Antimony Labs
        </span>
      </Link>

      <ul className="hidden md:flex gap-10 list-none">
        {["Services", "Clients", "About"].map((item) => (
          <li key={item}>
            <Link
              href={`#${item.toLowerCase()}`}
              className="text-text-secondary no-underline text-[0.85rem] font-medium tracking-[0.05em] uppercase transition-colors duration-300 hover:text-text-primary relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="#contact"
        className="font-mono text-[0.8rem] text-accent no-underline px-5 py-2.5 border border-accent transition-all duration-300 hover:bg-accent hover:text-bg-primary"
      >
        Get in Touch
      </Link>
    </nav>
  );
}
