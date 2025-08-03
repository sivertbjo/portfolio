import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Bjørnerås Trefelling",
      description:
        "Moderne nettside for trefellingsbedrift med kontaktskjema og prosjektgalleri. Bygget med Next.js og PayloadCMS for enkel innholdsadministrasjon. Enkelt og effektivt.",
      image: "/bjorneras.png",
      technologies: ["Next.js", "PayloadCMS", "Tailwind CSS", "MongoDB"],
      liveUrl: "https://bjornerastrefelling.no",
    },
    {
      title: "Iversen Hageservice",
      description:
        "Responsiv nettside med tjenesteoversikt, kontaktskjema og kundeomtaler. Optimalisert for SEO og mobile enheter.",
      image: "/iversen.png",
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Vercel",
        "PayloadCMS",
      ],
      liveUrl: "https://iversenhageservice.no",
    },
    {
      title: "FlyttBilen.no",
      description:
        "Fullstack applikasjon for varsling om veiarbeid og graving, med betalingsintegrasjon og administrasjonspanel. Bygget med Next.js, Supabase og Stripe.",
      image: "/flyttbilen.png",
      technologies: ["Next.js", "Supabase", "Stripe"],
      liveUrl: "https://flyttbilen.no",
    },
  ];

  return (
    <section className="py-20 bg-base-200" id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-base-content">
            Utvalgte Prosjekter
          </h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Prosjekter jeg har utviklet og drifter i dag.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <figure className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </figure>

              <div className="card-body">
                <h3 className="card-title text-xl text-base-content font-semibold">
                  {project.title}
                </h3>
                <p className="text-base-content/70 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 my-4">
                  {project.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="badge badge-outline badge-dash badge-info badge-sm"
                    >
                      {tech}
                    </div>
                  ))}
                </div>

                <div className="card-actions justify-end">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="btn btn-primary btn-sm"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Sjekk den ut!
                  </a>

                  {project.githubUrl && (
                    <button className="btn btn-ghost btn-sm">
                      <Github className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
