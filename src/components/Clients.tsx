"use client";

const clients = [
  { name: "APPLIED", type: "Semiconductor", serif: false },
  { name: "Meta", type: "Technology", serif: true },
  { name: "GoPro", type: "Consumer Electronics", serif: false },
  { name: "TESLA", type: "Automotive", serif: false },
];

export default function Clients() {
  return (
    <section
      id="clients"
      className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto bg-bg-secondary border-t border-b border-border relative before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:h-16 before:bg-gradient-to-b before:from-accent before:to-transparent"
    >
      <div className="text-center mb-16">
        <h2 className="font-serif italic font-normal text-[1.1rem] text-text-secondary">
          Trusted by industry leaders
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
        {clients.map((client) => (
          <div
            key={client.name}
            className="bg-bg-primary py-12 px-8 flex flex-col items-center justify-center gap-4 transition-all duration-300 relative after:absolute after:inset-0 after:bg-accent-dim after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100"
          >
            <span
              className={`text-[2rem] font-bold tracking-[-0.02em] text-text-primary relative z-10 ${
                client.serif ? "font-serif italic font-normal text-[2.2rem]" : ""
              }`}
            >
              {client.name}
            </span>
            <span className="font-mono text-[0.65rem] text-text-muted uppercase tracking-[0.1em] relative z-10">
              {client.type}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
