"use client";

const reasons = [
  {
    stat: "73%",
    title: "of manufacturers are behind",
    description:
      "Most companies are still evaluating AI while leaders are already deploying. The gap widens every quarter.",
  },
  {
    stat: "10x",
    title: "productivity gains are real",
    description:
      "Companies with AI-integrated operations are seeing order-of-magnitude improvements in throughput and quality.",
  },
  {
    stat: "18mo",
    title: "is the new window",
    description:
      "The competitive advantage of early AI adoption shrinks as tools become commoditized. Act now or play catch-up.",
  },
];

export default function WhyNow() {
  return (
    <section className="relative py-24 px-6 md:px-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-secondary via-bg-primary to-bg-primary" />

      <div className="container-lg relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="font-mono text-xs text-orange-400 tracking-wide uppercase">
              The Urgency
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Why companies are moving <span className="text-orange-400">now</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto text-center text-balance">
            This isn&apos;t hype. The companies that integrate AI into their operations
            today will define their industries tomorrow. The ones that wait will struggle to catch up.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.stat}
              className="relative bg-bg-card rounded-2xl p-8 border border-border text-center group hover:border-orange-500/30 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="text-5xl md:text-6xl font-bold text-orange-400 mb-2">
                  {reason.stat}
                </div>
                <h3 className="text-lg font-semibold mb-3">{reason.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-xl md:text-2xl text-text-secondary italic max-w-3xl mx-auto leading-relaxed">
            &ldquo;The question isn&apos;t whether to adopt AI—it&apos;s whether you&apos;ll
            lead the transformation or be disrupted by it.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
