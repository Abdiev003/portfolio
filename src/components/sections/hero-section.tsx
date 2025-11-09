"use client";

import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";

import Sparkles from "@/components/ui/sparkles";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Spotlight Effect */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <Sparkles
          id="hero-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={100}
          className="absolute inset-0"
          particleColor="hsl(var(--primary))"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[14px_24px]" />
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto max-w-6xl text-center space-y-8">
        {/* Greeting */}
        <div className="space-y-2 animate-fade-in">
          <p className="text-sm sm:text-base font-medium text-muted-foreground tracking-wider uppercase">
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            Hi, I'm{" "}
            <span className="bg-linear-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Ali Abdiyev
            </span>
          </h1>
        </div>

        {/* Title */}
        <div className="space-y-4 animate-fade-in delay-200">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground/90">
            Digital Solutions Architect
          </h2>
          <TextGenerateEffect
            words="22-year-old software engineer with 4+ years of experience building exceptional digital solutions. Co-Founder of Quberts Technologies, specializing in full-stack development with React, Next.js, Node.js, and modern cloud technologies."
            className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-300 z-10">
          <Button size="lg" className="group relative overflow-hidden" asChild>
            <Link href="#projects">
              <span className="relative z-10">View My Work</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform relative z-10" />
              <span className="absolute inset-0 bg-linear-to-r from-primary/20 to-primary/40 translate-y-full group-hover:translate-y-0 transition-transform" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="backdrop-blur-sm"
            asChild
          >
            <Link href="#contact">Get In Touch</Link>
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="backdrop-blur-sm"
            asChild
          >
            <a
              href="/resume-ali-abdiyev-en.pdf"
              download="Ali-Abdiyev-Resume.pdf"
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Resume</span>
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 pt-8 animate-fade-in delay-500">
          <HoverBorderGradient
            as="a"
            href="https://github.com/Abdiev003"
            target="_blank"
            rel="noopener noreferrer"
            containerClassName="rounded-full"
            className="flex items-center gap-2"
          >
            <Github className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
          </HoverBorderGradient>
          <HoverBorderGradient
            as="a"
            href="https://www.linkedin.com/in/ali-abdiyev/"
            target="_blank"
            rel="noopener noreferrer"
            containerClassName="rounded-full"
            className="flex items-center gap-2"
          >
            <Linkedin className="h-4 w-4" />
            <span className="hidden sm:inline">LinkedIn</span>
          </HoverBorderGradient>
          <HoverBorderGradient
            as="a"
            href="mailto:aliabdiyev000@gmail.com"
            containerClassName="rounded-full"
            className="flex items-center gap-2"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">Email</span>
          </HoverBorderGradient>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-muted-foreground/30 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
