"use client"

import { ArrowDown, Github, Linkedin } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"
import heroImage from "@/public/sivert.png"
import Link from "next/link"
import AnimatedBackground from "./animated-background"

export default function Hero() {
  const [showParticles, setShowParticles] = useState(false)

  useEffect(() => {
    setShowParticles(true)
  }, [])

  // Pre-calculate particle positions only on client
  const particles = showParticles
    ? [...Array(12)].map((_, i) => ({
        key: i,
        top: `${30 + Math.random() * 40}%`,
        left: `${30 + Math.random() * 40}%`,
        delay: `${i * 0.3}s`,
      }))
    : []

  return (
    <div className="hero min-h-screen bg-gradient-to-br from-base-300 via-base-100 to-base-300 relative overflow-hidden">
      {/* Canvas Animation Background */}
      <AnimatedBackground />

      <div className="hero-content text-center relative z-10">
        <div className="max-w-4xl">
          {/* Profile Image with "Breaking Through Screen" Effect */}
          <div className="relative mb-8 flex justify-center">
            <div className="relative">
              <div className="relative bg-gradient-to-br from-base-200 to-base-300 p-4 rounded-2xl shadow-2xl border-2 border-primary/30">
                <div className="bg-neutral rounded-xl p-2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-xl"></div>

                  {/* Cracked screen effect */}
                  <div className="absolute inset-0 pointer-events-none">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                      <path
                        d="M100,100 L120,80 L140,85 L160,70"
                        stroke="rgba(255,255,255,0.3)"
                        strokeWidth="1"
                        fill="none"
                        className="animate-pulse"
                      />
                      <path
                        d="M100,100 L85,120 L70,140 L60,160"
                        stroke="rgba(255,255,255,0.3)"
                        strokeWidth="1"
                        fill="none"
                        className="animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      />
                      <path
                        d="M100,100 L130,110 L150,130 L170,140"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="0.5"
                        fill="none"
                        className="animate-pulse"
                        style={{ animationDelay: "1s" }}
                      />
                    </svg>
                  </div>

                  {/* Your image */}
                  <div className="relative z-10 w-40 h-40 md:w-48 md:h-48 mx-auto">
                    <Image
                      src={heroImage || "/placeholder.svg"}
                      alt="Sivert Bjørnerås"
                      placeholder="blur"
                      width={192}
                      height={192}
                      className="object-cover relative z-10 hover:scale-110 transition-transform duration-500"
                      priority
                      style={{
                        filter: "drop-shadow(0 0 20px rgba(99, 102, 241, 0.6)) brightness(1.1)",
                      }}
                    />
                  </div>

                  {/* Glass shatter particles */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {particles.map(({ key, top, left, delay }) => (
                      <div
                        key={key}
                        className="absolute w-1 h-1 bg-base-content/60 animate-ping"
                        style={{
                          top,
                          left,
                          animationDelay: delay,
                          animationDuration: "3s",
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-primary rounded-full"></div>
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-base-content/20 rounded-full"></div>
              </div>

              {/* Floating code fragments */}
              <div className="absolute inset-0 pointer-events-none">
                {["</>", "{}", "( )", "[]"].map((symbol, i) => (
                  <div
                    key={i}
                    className="absolute text-primary font-mono text-sm animate-float"
                    style={{
                      top: `${20 + i * 15}%`,
                      left: `${10 + i * 20}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: "4s",
                    }}
                  >
                    {symbol}
                  </div>
                ))}
              </div>
            </div>
          </div>

           <h1 className="text-5xl md:text-7xl font-bold mb-6 text-base-content">
            Hei, jeg er{" "}
            <span className="font-extrabold relative group">
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-info via-error via-warning via-success via-primary to-purple-500 bg-[length:400%] opacity-0 group-hover:opacity-100 group-active:opacity-100 animate-gradient-x bg-clip-text text-transparent transition-all duration-300">
                Sivert!
              </span>
              <span className="relative group-hover:opacity-0 group-active:opacity-0 transition-opacity duration-300">
                Sivert!
              </span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-base-content/80 mb-4">
            Fullstack utvikler som skaper moderne nettsider og digitale opplevelser
          </p>

          <p className="text-lg mb-8 text-base-content/70 max-w-2xl mx-auto">
            Moderne webutvikling for håndverkere og små bedrifter som ønsker en enkel og effektiv nettside.
          </p>

         <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
    <Link
              href="#projects"
              className="btn btn-primary btn-lg transition-colors hover:shadow-xl active:shadow-xl hover:shadow-primary/20 active:shadow-primary/20"
            >
              Se mine prosjekter
            </Link>
</div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/sivertbjo"
              className="text-base-content/60 hover:text-primary transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/sivertbjorneras/"
              className="text-base-content/60 hover:text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-base-content/40" />
      </div>
    </div>
  )
}
