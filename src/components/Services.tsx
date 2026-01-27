"use client";

const services = [
  {
    number: "01",
    title: "Robotics Systems",
    description:
      "Custom robotic solutions for manufacturing, logistics, and research applications. From mechanical design to control systems integration.",
    tags: ["Motion Control", "Kinematics", "ROS"],
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "AI & Machine Learning",
    description:
      "Intelligent systems that learn and adapt. Computer vision, natural language processing, and predictive analytics tailored to your domain.",
    tags: ["Computer Vision", "NLP", "MLOps"],
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Simulation & Digital Twins",
    description:
      "High-fidelity simulations and digital twin environments for testing, validation, and optimization before physical deployment.",
    tags: ["Physics Sim", "Visualization", "Testing"],
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Embedded Systems",
    description:
      "Custom firmware and embedded software for real-time applications. Sensor integration, communication protocols, and edge computing.",
    tags: ["RTOS", "Firmware", "IoT"],
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="flex justify-between items-end mb-16 gap-8 flex-wrap">
        <div>
          <div className="font-mono text-[0.7rem] text-accent tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
            <span className="w-2 h-2 bg-accent" />
            What We Do
          </div>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.02em] leading-[1.2]">
            Research &<br />
            Development Services
          </h2>
        </div>
        <p className="max-w-[400px] text-text-secondary text-[0.95rem] leading-[1.7]">
          From concept to deployment, we deliver end-to-end solutions that
          transform industries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div
            key={service.number}
            className="bg-bg-secondary border border-border p-10 relative overflow-hidden transition-all duration-400 hover:border-border-bright hover:translate-y-[-4px] group before:absolute before:top-0 before:left-0 before:w-full before:h-0.5 before:bg-gradient-to-r before:from-accent before:to-accent-secondary before:scale-x-0 before:origin-left before:transition-transform before:duration-400 hover:before:scale-x-100"
          >
            <div className="font-mono text-[0.7rem] text-text-muted mb-6">
              {service.number}
            </div>
            <div className="w-12 h-12 border border-border-bright flex items-center justify-center mb-6 text-accent">
              {service.icon}
            </div>
            <h3 className="text-[1.4rem] font-semibold mb-4 tracking-[-0.01em]">
              {service.title}
            </h3>
            <p className="text-text-secondary text-[0.9rem] leading-[1.7] mb-6">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[0.65rem] text-text-muted px-3 py-1.5 border border-border uppercase tracking-[0.05em]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
