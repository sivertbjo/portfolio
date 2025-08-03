import { Code, Palette, Zap } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-base-content">
              Om meg
            </h2>
            <div className="space-y-4 text-lg text-base-content/70">
              <p>
                Jeg er utdannet lydtekniker og er sertifisert tech-nerd. Jobber
                i det daglige som lydtekniker i radio, men bruker fritiden min
                på å utvikle nettsider og digitale løsninger.
              </p>
              <p>
                Jeg lager skreddersydde løsninger som ikke bare ser bra ut, men
                også presterer optimalt og er enkle å vedlikeholde for deg som
                bedrift.
              </p>
              <p>
                Ta kontakt for å se hvordan jeg kan hjelpe deg med ditt
                prosjekt!
              </p>
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
                      Moderne JavaScript, React, Next.js og mer
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
                      Brukersentrert design og moderne UI
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
                      Ytelse & SEO
                    </h3>
                    <p className="text-base-content/70">
                      Optimaliserte nettsider som ranker høyt
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
