"use client";

const services = [
  {
    category: "AI Infrastructure",
    title: "Modern AI Systems",
    description:
      "Deploy production-ready AI that actually works. From LLM integrations to computer vision pipelines, we build the intelligent systems your operations need—not science projects.",
    capabilities: ["LLM Integration", "Computer Vision", "MLOps & Deployment", "Edge AI"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M12 2a4 4 0 014 4v1a4 4 0 01-8 0V6a4 4 0 014-4z" />
        <path d="M12 11v4M8 15h8M10 19h4" />
        <circle cx="12" cy="6" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    category: "Hardware Engineering",
    title: "Robotics & Automation",
    description:
      "Custom robotic systems designed for real-world manufacturing. Motion control, sensor integration, and autonomous systems that run 24/7 without babysitting.",
    capabilities: ["Motion Control", "Custom Robotics", "Sensor Fusion", "System Integration"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    category: "AI Infrastructure",
    title: "Data & ML Pipelines",
    description:
      "Turn your data into competitive advantage. We build the infrastructure that lets you train, deploy, and iterate on AI models at scale—not just once, but continuously.",
    capabilities: ["Data Engineering", "Model Training", "Real-time Inference", "Monitoring"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M21 12c0 1.66-4.03 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
      </svg>
    ),
  },
  {
    category: "Hardware Engineering",
    title: "Embedded & Edge",
    description:
      "Firmware and edge computing for when milliseconds matter. We build the low-level systems that power autonomous machines—RTOS, communication protocols, and beyond.",
    capabilities: ["RTOS Development", "Firmware", "Edge Computing", "IoT Systems"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6v6H9z" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 px-6 md:px-12">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/3 rounded-full blur-[200px] pointer-events-none" />

      <div className="container-xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-soft border border-accent/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="font-mono text-xs text-accent tracking-wide uppercase">
              What We Build
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Hardware meets AI
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto text-center text-balance">
            Most consultancies do one or the other. We do both—because modern
            manufacturing demands systems that think <em>and</em> move.
          </p>
        </div>

        {/* Two-column category labels */}
        <div className="grid grid-cols-2 gap-4 mb-8 max-w-xl mx-auto">
          <div className="text-center py-3 px-4 rounded-full bg-bg-card border border-border">
            <span className="text-xs font-mono text-accent uppercase tracking-wider">
              AI Infrastructure
            </span>
          </div>
          <div className="text-center py-3 px-4 rounded-full bg-bg-card border border-border">
            <span className="text-xs font-mono text-accent-secondary uppercase tracking-wider">
              Hardware Engineering
            </span>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-bg-card rounded-2xl p-8 border border-border hover:border-border-bright transition-all duration-500 overflow-hidden text-center"
            >
              {/* Hover gradient */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                service.category === "AI Infrastructure"
                  ? "bg-gradient-to-br from-accent/5 via-transparent to-transparent"
                  : "bg-gradient-to-br from-accent-secondary/5 via-transparent to-transparent"
              }`} />

              {/* Icon - centered */}
              <div className="relative flex justify-center mb-6">
                <div className={`w-14 h-14 rounded-xl border flex items-center justify-center transition-colors duration-500 ${
                  service.category === "AI Infrastructure"
                    ? "border-accent/20 text-accent group-hover:border-accent/40"
                    : "border-accent-secondary/20 text-accent-secondary group-hover:border-accent-secondary/40"
                }`}>
                  {service.icon}
                </div>
              </div>

              {/* Category tag */}
              <div className="relative mb-4">
                <span className={`text-xs font-mono uppercase tracking-wider ${
                  service.category === "AI Infrastructure" ? "text-accent" : "text-accent-secondary"
                }`}>
                  {service.category}
                </span>
              </div>

              {/* Content - centered */}
              <div className="relative">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Capabilities - centered */}
                <div className="flex flex-wrap justify-center gap-2">
                  {service.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="px-3 py-1 rounded-full bg-bg-secondary border border-border text-xs text-text-muted"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-text-muted text-sm mb-4">
            Not sure what you need? We&apos;ll help you figure it out.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all duration-300"
          >
            Schedule a technical assessment
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
