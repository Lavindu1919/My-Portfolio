import { Code2, Server, Brain, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend Development",
    skills: ["React", "Angular", "JavaScript", "TypeScript", "Tailwind CSS", "Bootstrap", "HTML5 / CSS3"],
  },
  {
    icon: Server,
    title: "Backend Development",
    skills: ["Java", "Spring Boot", "Spring MVC", "Python", "REST APIs", "MySQL", "MS SQL Server"],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    skills: ["Python", "TensorFlow", "Keras", "Supervised Learning", "CNNs", "R Programming"],
  },
  {
    icon: Wrench,
    title: "Tools & Software",
    skills: ["Git & GitHub", "Cisco Packet Tracer", "VS Code", "Intellij","WebStorm"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Skills &{" "}
            <span className="font-serif italic font-normal text-white">
              Technologies.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A breakdown of my technical stack, programming languages, and the tools I work with.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="glass p-8 rounded-3xl border border-primary/20 hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${(idx + 3) * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                  <cat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-foreground">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-4 py-2 rounded-xl bg-surface/60 border border-border text-sm font-medium text-foreground hover:border-primary/50 hover:bg-surface transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};