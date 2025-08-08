import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Bjørnerås Trefelling",
      description:
        "Moderne nettside for trefellingsbedrift med kontaktskjema og prosjektgalleri. Bygget med Next.js og PayloadCMS for enkel innholdsadministrasjon.",
      image: "/bjorneras.png",
      technologies: ["Next.js", "PayloadCMS", "Tailwind CSS", "MongoDB"],
      liveUrl: "https://bjornerastrefelling.no",
      results: "150% økning i kundeforespørsler",
      testimonial: "Sivert leverte en fantastisk nettside som har hjulpet oss å nå flere kunder. Profesjonell og pålitelig!",
      clientName: "Bjørnerås Trefelling",
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
      results: "200% mer trafikk på 6 måneder",
      testimonial: "Nettsiden har gitt oss mye mer synlighet online. Enkelt å oppdatere og ser veldig profesjonell ut.",
      clientName: "Iversen Hageservice",
    },
    {
      title: "FlyttBilen.no",
      description:
        "Fullstack applikasjon for varsling om veiarbeid og graving, med betalingsintegrasjon og administrasjonspanel.",
      image: "/flyttbilen.png",
      technologies: ["Next.js", "Supabase", "Stripe"],
      liveUrl: "https://flyttbilen.no",
      results: "Automatisert varsling",
      testimonial: "En komplett løsning som har reddet meg fra mange bøter",
      clientName: "FlyttBilen AS",
    },
  ];

  return (
    <section
      className="py-20  bg-gradient-to-b from-base-200 to-neutral"
      id="projects"
    >
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-base-content">
            Suksesshistorier
          </h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Nettsider som har hjulpet norske bedrifter å vokse og lykkes online
          </p>
         
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card bg-base-300 shadow-xl hover:shadow-2xl transition-shadow"
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
                
                {/* Results Badge */}
                <div className="badge badge-success badge-lg font-semibold mb-2">
                  📈 {project.results}
                </div>

                <p className="text-base-content/70 text-sm leading-relaxed mb-3">
                  {project.description}
                </p>

                {/* Client Testimonial */}
                <div className="bg-base-200 p-3 rounded-lg mb-4">
                  <p className="text-sm italic text-base-content/80">
                    "{project.testimonial}"
                  </p>
                  <p className="text-xs text-base-content/60 mt-2 font-semibold">
                    - {project.clientName}
                  </p>
                </div>

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
                    Se resultatet
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
