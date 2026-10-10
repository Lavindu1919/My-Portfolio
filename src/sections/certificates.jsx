const certificates = [
  {
    title: "Python for Beginners",
    issuer: "University of Moratuwa",
    date: "2026",
    description:
      "Completed an introductory programming certification focusing on Python fundamentals, including data types, control flow, functions, and problem-solving techniques. Developed practical coding skills through hands-on exercises within a structured online learning environment.",
    skills: ["Python"],
    image: `${import.meta.env.BASE_URL}certificates/PythonforBeginners.jpeg`,
    credentialUrl:
      "https://open.uom.lk/lms/mod/customcert/verify_certificate.php", // optional
  },
];

export const Certificates = () => {
  return (
    <section id="certificates" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Credentials
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Certificates that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              prove my skills.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A collection of the courses and certifications I have completed
            while learning and growing as a developer.
          </p>
        </div>

        {/* Certificate Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="glass rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 animate-fade-in flex flex-col overflow-hidden"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {cert.image && (
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
              )}

              <div className="p-6 flex flex-col flex-1">
                <span className="text-sm text-primary font-medium">
                  {cert.date}
                </span>
                <h3 className="text-xl font-semibold mt-2">{cert.title}</h3>
                <p className="text-muted-foreground">{cert.issuer}</p>

                {cert.description && (
                  <p className="text-sm text-muted-foreground mt-4">
                    {cert.description}
                  </p>
                )}

                {cert.skills?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {cert.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto pt-6 text-sm text-primary hover:underline"
                  >
                    View credential →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};