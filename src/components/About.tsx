"use client";

const locations = [
  { city: "San Francisco", role: "HQ & AI Research" },
  { city: "Berlin", role: "Robotics Engineering" },
  { city: "Singapore", role: "APAC Operations" },
  { city: "Toronto", role: "ML Infrastructure" },
  { city: "Tel Aviv", role: "Computer Vision" },
  { city: "Bangalore", role: "Systems Engineering" },
];

const principles = [
  {
    title: "Ship, Don't Study",
    description: "We build production systems, not proof-of-concepts that gather dust.",
  },
  {
    title: "Hardware + Software",
    description: "Real-world AI needs both. We're one of the few teams that does both well.",
  },
  {
    title: "Your Team, Extended",
    description: "We work as an extension of your engineering org, not an outside vendor.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 md:px-12 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/3 rounded-full blur-[200px] pointer-events-none" />

      <div className="container-lg relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-soft border border-accent/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="font-mono text-xs text-accent tracking-wide uppercase">
              Global Team
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Engineers across <span className="gradient-text">6 countries</span>
          </h2>

          <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto text-center text-balance">
            We&apos;ve assembled a distributed team of specialists—roboticists, ML engineers,
            firmware developers, and systems architects—who&apos;ve built at companies like
            Tesla, Google, Boston Dynamics, and NVIDIA.
          </p>
        </div>

        {/* Global presence grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-16 max-w-3xl mx-auto">
          {locations.map((loc) => (
            <div
              key={loc.city}
              className="bg-bg-card rounded-xl p-5 border border-border text-center hover:border-accent/30 transition-all duration-300"
            >
              <div className="text-lg font-semibold mb-1">{loc.city}</div>
              <div className="text-xs text-text-muted">{loc.role}</div>
            </div>
          ))}
        </div>

        {/* Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {principles.map((principle, i) => (
            <div
              key={principle.title}
              className="bg-bg-card rounded-2xl p-8 border border-border text-center"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-soft flex items-center justify-center mx-auto mb-5">
                <span className="font-mono text-sm text-accent font-bold">
                  0{i + 1}
                </span>
              </div>
              <h4 className="text-lg font-semibold mb-2">{principle.title}</h4>
              <p className="text-text-muted text-sm leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-bg-card border border-border">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/50 to-accent-secondary/50 border-2 border-bg-card"
                />
              ))}
            </div>
            <div className="text-left">
              <div className="text-sm font-medium">Join 40+ engineers worldwide</div>
              <div className="text-xs text-text-muted">Building the future of manufacturing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
