"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Hvor lang tid tar det å lage en nettside?",
      answer: "Det avhenger av kompleksiteten. En enkel bedriftsnettside tar vanligvis 2-3 uker, mens en avansert nettside med CMS tar 3-4 uker."
    },
    {
      question: "Hva koster det å vedlikeholde nettsiden?",
      answer: "Hosting og domene koster ca. 1000-2000 NOK per år. Mindre oppdateringer og endringer er ofte inkludert de første månedene. For større endringer tilbyr jeg vedlikeholdsavtaler fra 500 NOK per måned."
    },
    {
      question: "Får jeg opplæring i å oppdatere innholdet selv?",
      answer: "Absolutt! Alle nettsider med CMS (content management system) kommer med grundig opplæring. For enkle nettsider må man kontakte meg for å endre innholdet på siden, mot et lite gebyr. Du kan alltid kontakte meg hvis du trenger hjelp!"
    },
    {
      question: "Hva om jeg ikke liker resultatet?",
      answer: "Jeg har 30 dagers pengene-tilbake-garanti. Jeg sender deg oppdateringer underveis, så du ser resultatet. Målet mitt er at du skal være 100% fornøyd."
    },
    {
      question: "Er nettsiden optimalisert for mobil?",
      answer: "Ja, alle nettsider jeg lager er fullt responsive og fungerer perfekt på mobil, tablet og desktop. Dette er standard i alle pakkene mine, og jeg tester grundig på alle enheter før lansering."
    },
    {
      question: "Hjelper du med domenenavn og hosting?",
      answer: "Ja, jeg hjelper deg med alt fra registrering av domene til oppsett av hosting. Første år er inkludert i prisen, og jeg sørger for at alt fungerer smidig fra dag én etter lansering."
    },
    {
      question: "Kan nettsiden vises på Google?",
      answer: "Definitivt! Alle nettsider blir SEO-optimalisert og registrert i Google Search Console. Jeg sørger for at nettsiden din blir funnet av potensielle kunder som søker etter dine tjenester."
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-base-100 to-base-200" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-base-content">
            Ofte Stilte Spørsmål
          </h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Svar på de vanligste spørsmålene jeg får om webutvikling
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card bg-base-300 shadow-lg">
                <div className="card-body p-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex justify-between items-center w-full text-left p-6 hover:bg-base-200 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-base-content pr-4">
                      {faq.question}
                    </h3>
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-base-content flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-base-content flex-shrink-0" />
                    )}
                  </button>
                  
                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <div className="border-t border-base-content/20 pt-4">
                        <p className="text-base-content/70 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

       
        </div>
      </div>
    </section>
  );
}
