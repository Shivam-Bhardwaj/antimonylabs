"use client";

const capabilities = [
  "PhD-level research expertise",
  "Full-stack hardware & software capabilities",
  "Rapid prototyping to production deployment",
  "IP protection and technology transfer",
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* Visual */}
        <div className="aspect-square bg-bg-secondary border border-border relative overflow-hidden max-w-[400px] mx-auto lg:max-w-none">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[12rem] italic text-border opacity-50">
            Sb
          </span>
          <span className="absolute inset-[20%] border border-accent-dim animate-pulse-border" />
        </div>

        {/* Text */}
        <div>
          <div className="font-mono text-[0.7rem] text-accent tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
            <span className="w-2 h-2 bg-accent" />
            About Us
          </div>
          <h2 className="text-[2.5rem] font-bold mb-6 tracking-[-0.02em]">
            Where <span className="text-accent">research</span> meets reality
          </h2>
          <p className="text-text-secondary text-base leading-[1.8] mb-6">
            Antimony Labs was founded on the belief that breakthrough research
            should translate into real-world impact. Our team of engineers,
            researchers, and designers work at the intersection of robotics and
            artificial intelligence.
          </p>
          <p className="text-text-secondary text-base leading-[1.8] mb-8">
            We partner with forward-thinking companies to solve problems that
            haven&apos;t been solved before—building systems that are not just
            functional, but transformative.
          </p>

          <ul className="list-none">
            {capabilities.map((item) => (
              <li
                key={item}
                className="flex items-center gap-4 py-3 border-b border-border text-[0.9rem]"
              >
                <span className="text-accent font-mono">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
