"use client";

import Link from "next/link";

const footerLinks = {
  company: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Clients", href: "#clients" },
    { label: "Contact", href: "#contact" },
  ],
  connect: [
    { label: "LinkedIn", href: "https://linkedin.com/company/antimonylabs", external: true },
    { label: "GitHub", href: "https://github.com/antimonylabs", external: true },
    { label: "Twitter", href: "https://twitter.com/antimonylabs", external: true },
  ],
};

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 md:px-12 border-t border-border">
      <div className="max-w-[1100px] mx-auto">
        {/* Main footer content - centered */}
        <div className="text-center mb-12">
          {/* Brand */}
          <Link href="/" className="inline-flex items-center gap-3 no-underline mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent-secondary flex items-center justify-center font-serif text-lg italic text-bg-primary font-medium">
              Sb
            </div>
            <div className="flex flex-col text-left">
              <span className="font-semibold text-sm tracking-wide text-text-primary">
                ANTIMONY
              </span>
              <span className="text-[10px] tracking-[0.3em] text-text-muted uppercase">
                Labs
              </span>
            </div>
          </Link>
          <p className="text-text-secondary text-sm leading-relaxed max-w-md mx-auto">
            Advanced research and development in robotics and AI.
            Building intelligent systems for industry leaders.
          </p>
        </div>

        {/* Links - centered */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="text-center">
            <h4 className="font-semibold text-xs uppercase tracking-wider text-text-muted mb-4">Company</h4>
            <ul className="flex flex-wrap justify-center gap-6">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-text-secondary text-sm no-underline hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center">
            <h4 className="font-semibold text-xs uppercase tracking-wider text-text-muted mb-4">Connect</h4>
            <ul className="flex flex-wrap justify-center gap-6">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-text-secondary text-sm no-underline hover:text-accent transition-colors duration-300 inline-flex items-center gap-1"
                  >
                    {link.label}
                    {link.external && (
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar - centered */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-text-muted text-xs mb-4">
            © {new Date().getFullYear()} Antimony Labs, Inc. All rights reserved.
          </p>
          <div className="flex justify-center gap-6">
            <Link
              href="/privacy"
              className="text-text-muted text-xs no-underline hover:text-text-secondary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-text-muted text-xs no-underline hover:text-text-secondary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
