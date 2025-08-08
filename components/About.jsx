import { Code, Palette, Zap } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 bg-gradient-to-b from-base-100 to-base-200">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-base-content">
              Om meg
            </h2>
            <div className="space-y-4 text-lg text-base-content/70">
              <p>
                Jeg har 3+ års erfaring med webutvikling og har hjulpet flere norske bedrifter 
                med å øke sine kundeforespørsler gjennom profesjonelle nettsider.
              </p>
              <p>
                Som utdannet lydtekniker og sertifisert tech-nerd 🤓 kombinerer jeg teknisk 
                ekspertise med forståelse for hva små bedrifter trenger. Jeg jobber i det daglige 
                som lydtekniker i radio, men brenner for å hjelpe bedrifter å vokse online.
              </p>
              <p>
                Mine nettsider er ikke bare pene å se på - de er bygget for å konvertere 
                besøkende til kunder. Med fokus på hastighet, SEO og brukervennlighet 
                sikrer jeg at nettsiden din jobber for deg 24/7.
              </p>
              <div className="bg-primary/10 p-4 rounded-lg mt-6">
                <p className="text-primary font-semibold">
                  ⚡ Ledig kapasitet!
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="card bg-gradient-to-r from-base-200 to-base-300 shadow-xl hover:shadow-2xl transition-all">
              <div className="card-body">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-info/50 rounded-lg">
                    <Code className="h-6 w-6 text-info" />
                  </div>
                  <div>
                    <h3 className="card-title text-lg text-base-content">
                      Teknisk Ekspertise
                    </h3>
                    <p className="text-base-content/70">
                      3+ års erfaring med moderne teknologier som Next.js, React og Tailwind CSS
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-gradient-to-r from-base-200 to-base-300 shadow-xl hover:shadow-2xl transition-all">
              <div className="card-body">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-error/50 rounded-lg">
                    <Palette className="h-6 w-6 text-error" />
                  </div>
                  <div>
                    <h3 className="card-title text-lg text-base-content">
                      Design & UX
                    </h3>
                    <p className="text-base-content/70">
                      Brukersentrert design som konverterer besøkende til kunder
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-gradient-to-r from-base-200 to-base-300 shadow-xl hover:shadow-2xl transition-all">
              <div className="card-body">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-warning/50 rounded-lg">
                    <Zap className="h-6 w-6 text-warning" />
                  </div>
                  <div>
                    <h3 className="card-title text-lg text-base-content">
                      Resultater & ROI
                    </h3>
                    <p className="text-base-content/70">
                      Mine kunder ser gjennomsnittlig 150% økning i kundeforespørsler
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
