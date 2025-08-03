export default function Skills() {
  const skills = [
    {
      name: "JavaScript",
      description: "Språk for webutvikling",
      color: "badge-warning",
    },
    {
      name: "React",
      description: "Brukergrensesnittbibliotek",
      color: "badge-info",
    },
    {
      name: "Next.js",
      description: "React-rammeverk",
      color: "badge-neutral",
    },
    {
      name: "PayloadCMS",
      description: "Headless CMS",
      color: "badge-primary",
    },
    {
      name: "Tailwind CSS",
      description: "CSS-rammeverk",
      color: "badge-accent",
    },
    {
      name: "Node.js",
      description: "JavaScript-runtime for server",
      color: "badge-success",
    },
    { name: "MongoDB", description: "NoSQL database", color: "badge-success" },
    {
      name: "PostgreSQL",
      description: "Relasjonsdatabase",
      color: "badge-info",
    },
    {
      name: "Git",
      description: "Versjonskontrollsystem",
      color: "badge-warning",
    },
    {
      name: "Figma",
      description: "Prototypingverktøy",
      color: "badge-secondary",
    },
    {
      name: "Vercel",
      description: "Hosting for Next.js",
      color: "badge-neutral",
    },
    {
      name: "SEO",
      description: "Søkemotoroptimalisering",
      color: "badge-primary",
    },
  ];

  return (
    <section className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            Teknologier & Ferdigheter
          </h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Her er teknologiene jeg bruker for å skape moderne, skalerbare
            webløsninger
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="card bg-base-100 shadow-lg">
              <div className="card-body p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-3 h-3 rounded-full bg-current opacity-60`}
                    ></div>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <div className={`badge ${skill.color} badge-sm`}>
                    {skill.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
