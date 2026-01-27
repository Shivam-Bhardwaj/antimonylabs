"use client";

const caseStudies = [
  {
    client: "Applied Materials",
    logo: "APPLIED",
    result: "40% reduction in defect rates",
    description: "Computer vision system for real-time wafer inspection in semiconductor fabs.",
    tags: ["Computer Vision", "Edge AI", "Manufacturing"],
  },
  {
    client: "Meta",
    logo: "Meta",
    result: "3x faster iteration cycles",
    description: "ML infrastructure for prototyping and testing next-gen hardware devices.",
    tags: ["MLOps", "Data Pipelines", "Hardware Testing"],
    serif: true,
  },
  {
    client: "GoPro",
    logo: "GoPro",
    result: "Sub-millisecond response time",
    description: "Embedded firmware for advanced image stabilization and sensor fusion.",
    tags: ["Firmware", "Sensor Fusion", "Real-time Systems"],
  },
  {
    client: "Tesla",
    logo: "TESLA",
    result: "24/7 autonomous operation",
    description: "Custom robotic systems for battery module assembly and testing.",
    tags: ["Robotics", "Automation", "System Integration"],
  },
];

export default function Clients() {
  return (
    <section id="clients" className="relative py-28 px-6 md:px-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary" />

      <div className="max-w-[1100px] mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-soft border border-accent/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="font-mono text-xs text-accent tracking-wide uppercase">
              Our Work
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Real results for <span className="gradient-text">real companies</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            We don&apos;t do demos. We build systems that run in production, 24/7, at scale.
          </p>
        </div>

        {/* Case studies grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {caseStudies.map((study) => (
            <div
              key={study.client}
              className="group relative bg-bg-card rounded-2xl p-8 border border-border hover:border-accent/30 transition-all duration-500 text-center"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex flex-col items-center">
                {/* Client logo */}
                <div className="mb-4">
                  <span
                    className={`text-2xl font-bold text-text-muted group-hover:text-text-secondary transition-colors duration-300 ${
                      study.serif ? "font-serif italic font-normal text-[1.7rem]" : ""
                    }`}
                  >
                    {study.logo}
                  </span>
                </div>

                {/* Result highlight */}
                <div className="text-2xl font-bold gradient-text mb-3">
                  {study.result}
                </div>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {study.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-bg-secondary border border-border text-xs text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
