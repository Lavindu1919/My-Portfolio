import { Mail, Phone, MapPin } from "lucide-react";

const GMAIL_COMPOSE_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=lavinduchirantha19@gmail.com";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "lavinduchirantha19@gmail.com",
    href: GMAIL_COMPOSE_URL,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+94765617939",
    href: "tel:+94765617939",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kandy, SriLanka",
    href: "#",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let's build{" "}
            <span className="font-serif italic font-normal text-white">
              something great.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Have a project in mind or want to discuss potential opportunities? 
            Feel free to reach out to me directly through any of the channels below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Information Card */}
          <div className="glass rounded-3xl p-8 animate-fade-in animation-delay-300">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.label === "Email" ? "_blank" : "_self"}
                  rel={item.label === "Email" ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Availability Card */}
          <div className="glass rounded-3xl p-8 border border-primary/30 flex flex-col justify-between animate-fade-in animation-delay-400">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium text-lg">Currently Available</span>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed">
                I'm currently open to new opportunities, freelance contracts, and exciting projects. 
                Whether you need a full-time software engineer, help on a specific build, 
                or technical advice, I'd love to connect!
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-border/50">
              <a
                href={GMAIL_COMPOSE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-4 px-6 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};