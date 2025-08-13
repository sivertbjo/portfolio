"use client";

import { sendEmail } from "@/utils/actions";
import { Send } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { TypeAnimation } from "react-type-animation";
import { z } from "zod";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Define the validation schema with zod
  const formSchema = z.object({
    name: z.string().min(2, { message: "Navn må være minst 2 tegn" }),
    email: z.string().email("Ugyldig e-postadresse"),
    message: z.string().min(10, { message: "Meldingen må være minst 10 tegn" }),
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrors({});

    const formData = new FormData(event.target);

    // Get form values
    const formValues = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    // Validate the form data first
    const validation = formSchema.safeParse(formValues);

    if (!validation.success) {
      // Handle validation errors
      const fieldErrors = {};
      validation.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0]] = issue.message;
        }
      });
      setErrors(fieldErrors);
      toast.error("Vennligst rett opp feilene i skjemaet");
      setLoading(false);
      return;
    }

    try {
      // Call the server action to send the email
      const result = await sendEmail(validation.data);

      if (result.success) {
        toast.success(result.message || "Meldingen ble sendt!");
        event.target.reset(); // Reset the form
        setErrors({}); // Clear any previous errors
      } else {
        if (result.errors) {
          toast.error(result.errors.join(", "));
        } else {
          toast.error(
            result.message || "Noe gikk galt. Vennligst prøv igjen senere."
          );
        }
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("Noe gikk galt. Vennligst prøv igjen senere.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-neutral text-neutral-content relative overflow-hidden" id="contact">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Circles */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-500/10 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-purple-500/10 rounded-full animate-float-slow"></div>

        {/* Animated SVG Elements */}
        <svg
          className="absolute top-10 right-10 w-32 h-32 text-primary/20 animate-spin-slow"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="10 5"
          />
          <circle
            cx="50"
            cy="50"
            r="30"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="5 3"
          />
        </svg>

        <svg
          className="absolute bottom-20 right-40 w-24 h-24 text-blue-400/20 animate-pulse"
          viewBox="0 0 100 100"
          fill="none"
        >
          <path
            d="M50 10 L90 90 L10 90 Z"
            stroke="currentColor"
            strokeWidth="2"
            fill="currentColor"
            fillOpacity="0.1"
          />
        </svg>

        {/* Message Icon Animation */}
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2 animate-bounce-slow">
          <svg
            className="w-16 h-16 text-primary/30"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
              stroke="currentColor"
              strokeWidth="2"
              fill="currentColor"
              fillOpacity="0.1"
            />
            <circle cx="9" cy="12" r="1" fill="currentColor" />
            <circle cx="15" cy="12" r="1" fill="currentColor" />
            <circle cx="12" cy="12" r="1" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-12">
          {/* Animated Title */}
          <div className="relative">
            <div className="text-4xl md:text-5xl font-bold animate-fade-in-up">
              <TypeAnimation
  sequence={[
    'Klar for å øke dine kundeforespørsler?',
    2000,
    'Klar for en ny nettside?',
    2000,
    'Klar for mer trafikk?',
    2000,
  ]}
  wrapper="h2"
  speed={50}
  className="text-4xl md:text-5xl font-bold"
  repeat={Infinity}
/>
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 animate-ping">
              <div className="w-full h-full bg-primary/30 rounded-full"></div>
            </div>
          </div>

          <p className="text-xl text-neutral-content/70 max-w-2xl mx-auto animate-fade-in-up-delayed">
            Få gratis tilbud på 24 timer. Jeg svarer vanligvis innen 2 timer og gir deg en konkret plan for ditt prosjekt.
          </p>
          
          <div className="flex justify-center gap-4 text-sm text-neutral-content/60 animate-fade-in-up-delayed">
            <div>✅ Gratis konsultasjon</div>
            <div>✅ 30 dagers garanti</div>
            <div>✅ Ingen forpliktelser</div>
          </div>
        </div>

        {/* Form with Enhanced Animations */}
        <div className="max-w-xl mx-auto">
          <div className="relative">
            {/* Form Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-2xl blur-xl animate-pulse-slow"></div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 relative bg-neutral/50 backdrop-blur-sm p-8 rounded-2xl border border-neutral-content/10"
            >
              <div className="space-y-2 group">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium transition-colors group-focus-within:text-primary"
                >
                  Navn *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className={`input w-full bg-base-100 text-base-content transition-all duration-300 focus:scale-[1.02] focus:shadow-lg ${
                      errors.name
                        ? "border-red-500 animate-shake"
                        : "focus:border-primary"
                    }`}
                    placeholder="Ditt navn"
                  />
                  {/* Input Focus Animation */}
                  <div className="absolute inset-0 rounded-md bg-gradient-to-r from-primary/20 to-blue-500/20 opacity-0 transition-opacity duration-300 pointer-events-none group-focus-within:opacity-100"></div>
                </div>
                {errors.name && (
                  <p className="text-red-400 text-sm animate-slide-down">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="space-y-2 group">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium transition-colors group-focus-within:text-primary"
                >
                  E-post *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={`input w-full bg-base-100 text-base-content transition-all duration-300 focus:scale-[1.02] focus:shadow-lg ${
                      errors.email
                        ? "border-red-500 animate-shake"
                        : "focus:border-primary"
                    }`}
                    placeholder="Din e-post"
                  />
                  <div className="absolute inset-0 rounded-md bg-gradient-to-r from-primary/20 to-blue-500/20 opacity-0 transition-opacity duration-300 pointer-events-none group-focus-within:opacity-100"></div>
                </div>
                {errors.email && (
                  <p className="text-red-400 text-sm animate-slide-down">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="space-y-2 group">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium transition-colors group-focus-within:text-primary"
                >
                  Melding *
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    required
                    className={`textarea h-32 w-full bg-base-100 text-base-content resize-none transition-all duration-300 focus:scale-[1.02] focus:shadow-lg ${
                      errors.message
                        ? "border-red-500 animate-shake"
                        : "focus:border-primary"
                    }`}
                    placeholder="Din melding"
                    rows="4"
                  ></textarea>
                  <div className="absolute inset-0 rounded-md bg-gradient-to-r from-primary/20 to-blue-500/20 opacity-0 transition-opacity duration-300 pointer-events-none group-focus-within:opacity-100"></div>
                </div>
                {errors.message && (
                  <p className="text-red-400 text-sm animate-slide-down">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full md:w-auto flex items-center justify-center gap-2 disabled:opacity-50 relative overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                {/* Button Background Animation */}
                <div className="absolute inset-0 btn-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <span
                  className={`w-4 h-4 relative z-10 transition-transform duration-300 ${loading ? "animate-pulse" : "group-hover:translate-x-1"}`}
                >🚀</span>

                {loading && (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white relative z-10"></div>
                )}

                <span className="relative z-10">
                  {loading ? "Sender..." : "Få gratis tilbud på 24 timer"}
                </span>

                {/* Success Ripple Effect */}
                <div className="absolute inset-0 bg-green-500 rounded-md scale-0 opacity-0 animate-success-ripple"></div>
              </button>
              
              <div className="text-center text-sm text-neutral-content/60 mt-4">
                💡 Jeg svarer vanligvis innen 2 timer på hverdager
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
