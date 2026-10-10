import { Code2, ShieldAlert, Cpu, Terminal } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Dev",
    description: "Building scalable enterprise architecture with robust backend structures.",
  },
  {
    icon: ShieldAlert,
    title: "Cybersecurity",
    description: "Applying core security principles to protect networks and application data.",
  },
  {
    icon: Terminal,
    title: "AI & Innovation",
    description: "Leveraging intelligent systems to optimize application logic and workflows.",
  },
  {
    icon: Cpu,
    title: "Problem Solving",
    description: "Rooted in strong data structures, algorithms, and clean system design.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Bridging code, security,
              <span className="font-serif italic font-normal text-white">
                {" "}
                and innovation.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                My journey in tech is driven by a deep curiosity about how things work behind the 
                scenes and a passion for creating impactful user experiences. As an IT undergraduate 
                and freelancer, I split my time between mastering software architecture and delivering 
                high-quality digital services to clients globally.
              </p>
              <p>
                I don't just write code that works; I strive to write code that is intelligent, 
                optimized, and secure against modern digital threats. 
              </p>
              
              <div className="pt-2">
                <h4 className="text-foreground font-semibold mb-2 text-sm uppercase tracking-wider">
                  What I bring to the table:
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong className="text-foreground">Full-Stack Development:</strong> Designing scalable backend systems with Java/Spring Boot and crafting responsive modern UIs.
                  </li>
                  <li>
                    <strong className="text-foreground">AI &amp; Innovation:</strong> Leveraging AI tools and core concepts to optimize application logic and automate workflows.
                  </li>
                  <li>
                    <strong className="text-foreground">Security Awareness:</strong> Applying core cybersecurity principles and network fundamentals to ensure data protection.
                  </li>
                  <li>
                    <strong className="text-foreground">Problem-Solving Mindset:</strong> A strong foundation in data structures, algorithms, and clean architecture.
                  </li>
                </ul>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "Let's build something secure and innovative together!"
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};