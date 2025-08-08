import { Check, Star, Zap } from "lucide-react";

export default function Services() {
  const services = [
    {
      name: "Enkel Bedriftsnettside",
      price: "Fra 5.000 NOK",
      description: "Perfekt for små bedrifter som ikke trenger å administrere innhold selv og ønsker en enkel nettside",
      features: [
        "Responsiv design (mobil og desktop)",
        "Kontaktskjema",
        "SEO-optimalisering",
        "1 års domene og hosting inkludert",
      ],
      popular: false,
      deliveryTime: "2-3 uker",
      icon: "🌐"
    },
    {
      name: "Nettside med CMS",
      price: "Fra 10.000 NOK",
      description: "For bedrifter som vil administrere eget innhold og ha mer funksjonalitet",
      features: [
        "Alt fra enkel pakke",
        "PayloadCMS for enkel innholdsadministrasjon",
        "Blogg-/nyhetsseksjon om ønskelig",
        "Kundeomtaler",
        "Backup og sikkerhet",
        "6 måneder gratis vedlikehold"
      ],
      popular: true,
      deliveryTime: "3-4 uker",
      icon: "⚡"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-neutral to-base-200" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-base-content">
            Mine Tjenester
          </h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Skreddersydde løsninger som passer din bedrifts behov og budsjett
          </p>
          <div className="badge badge-warning badge-lg">
            ⚡ Ledig kapasitet!
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`card bg-base-100 shadow-xl hover:shadow-2xl transition-all relative ${
                service.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="badge badge-primary badge-lg">
                    <Star className="h-4 w-4 mr-1" />
                    Mest populær
                  </div>
                </div>
              )}

              <div className="card-body">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{service.icon}</div>
                  <h3 className="card-title text-xl text-base-content font-bold justify-center">
                    {service.name}
                  </h3>
                  <div className="text-3xl font-bold text-primary mt-2">
                    {service.price}
                  </div>
                  <div className="badge badge-outline badge-info mt-2">
                    📅 {service.deliveryTime}
                  </div>
                </div>

                <p className="text-base-content/70 text-sm text-center mb-6">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-2">
                      <Check className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-base-content/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="card-actions justify-center mt-6">
                  <a 
                    href="#contact" 
                    className={`btn w-full ${
                      service.popular ? 'btn-primary' : 'btn-outline btn-primary'
                    }`}
                  >
                    Få gratis tilbud
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-base-content mb-4">
              Slik jobber vi sammen
            </h3>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              En strukturert prosess som sikrer at du får akkurat det du trenger
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "💡",
                title: "Strategi",
                description: "Kartlegging av behov og målsettinger",
              },
              {
                step: "🎨", 
                title: "Design",
                description: "Mockups og prototyper basert på dine ønsker",
              },
              {
                step: "⚡",
                title: "Utvikling", 
                description: "Koding, testing og optimalisering",
              },
              {
                step: "🚀",
                title: "Launch",
                description: "Publisering og opplæring i administrasjon",
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-secondary/40 text-primary-content rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {phase.step}
                  </div>
                  
                </div>
                <h4 className="font-bold text-lg text-base-content mb-2">
                  {phase.title}
                </h4>
                <p className="text-base-content/70 text-sm mb-2">
                  {phase.description}
                </p>

                {phase.time && (
                    <div className="badge badge-outline badge-sm">
                  {phase.time}
                </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <div className="mt-16 bg-base-300 rounded-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-base-content mb-4">
              Mine garantier til deg
            </h3>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "🛡️",
                title: "30 dagers garanti",
                description: "Ikke fornøyd? Få pengene tilbake."
              },
              {
                icon: "🔧",
                title: "Gratis endringer",
                description: "Første måneden etter lansering."
              },
              {
                icon: "💯",
                title: "100% fornøyd eller pengene tilbake",
                description: "Vi jobber til du er helt fornøyd."
              }
            ].map((guarantee, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-3">{guarantee.icon}</div>
                <h4 className="font-bold text-base-content mb-2">
                  {guarantee.title}
                </h4>
                <p className="text-base-content/70 text-sm">
                  {guarantee.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
