"use client";

import { ArrowDown, Github, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import heroImage from "@/public/sivert.png";
import Link from "next/link";
import AnimatedBackground from "./animated-background";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="hero min-h-screen bg-gradient-to-br from-base-300 via-neutral to-base-300 relative overflow-hidden">
      {/* Canvas Animation Background */}
      <AnimatedBackground />

      <div className="hero-content text-center relative z-10">
        <div className="max-w-4xl">
          {/* Simplified Profile Image with Soft Rounded Corners */}
          <div className="relative mb-8 flex justify-center">
            <div className="relative group active:shadow-[0_0_30px_rgba(99,102,241,0.4)]">
              <div className="w-48 md:w-64 aspect-square relative rounded-lg overflow-hidden shadow-xl transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] group-active:shadow-[0_0_30px_rgba(99,102,241,0.4)]">
                <Image
                  src={heroImage || "/placeholder.svg"}
                  alt="Sivert Bjørnerås"
                  placeholder="blur"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 group-active:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300"></div>
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
            Fullstack utvikler som skaper moderne nettsider og digitale
            opplevelser
          </p>
          <p className="text-lg mb-8 text-base-content/70 max-w-2xl mx-auto">
            Moderne webutvikling for håndverkere og små bedrifter som ønsker en
            enkel og effektiv nettside.
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
              target="_blank"
              className="text-base-content/60 hover:text-secondary active:text-secondary transition-colors hover:shadow-glow active:shadow-glow"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/sivert-bj%C3%B8rner%C3%A5s"
              target="_blank"
              className="text-base-content/60 hover:text-secondary active:text-secondary transition-colors hover:shadow-glow active:shadow-glow"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-base-content/40" />
      </div>

      <style jsx global>{`
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s linear infinite alternate;
        }
      `}</style>
    </div>
  );
}
