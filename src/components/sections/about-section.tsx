"use client";

import { Code2, Rocket, Users, Award } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Expertise",
    description: "End-to-end development with MERN stack and modern frameworks",
  },
  {
    icon: Rocket,
    title: "Performance Focused",
    description: "Building scalable and high-performance solutions",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Remote work experience since 2020, Co-Founder at Quberts",
  },
  {
    icon: Award,
    title: "Quality Driven",
    description: "Clean code, user-centric design, transparent communication",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-2">
            About Me
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Crafting Digital Excellence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            21-year-old software engineer with 6+ years of hands-on experience
            in building robust and scalable web applications using cutting-edge
            technologies.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Description */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">
                Digital Solutions Architect
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Based in{" "}
                <span className="text-foreground font-medium">
                  Valencia, Spain
                </span>
                , I've been working remotely since 2020, transforming innovative
                ideas into high-performance digital experiences.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As Founder of{" "}
                <a
                  href="https://quberts.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  Quberts Technologies
                </a>{" "}
                (incorporated in the United Kingdom), I specialize in full-stack
                development, API design, cloud architecture, and DevOps
                practices. My approach combines technical excellence with
                user-centric design principles.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For me, clean code, transparent communication, and continuous
                learning are the cornerstones of building exceptional software
                that makes a real impact.
              </p>
            </div>
          </div>

          {/* Right Column - Stats/Highlights */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="border-muted hover:border-primary/50 transition-colors"
              >
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Facts */}
        <Card className="bg-muted/50 border-none relative overflow-hidden">
          <CardContent className="p-8 relative z-10">
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div className="group cursor-default">
                <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  4+
                </div>
                <p className="text-sm text-muted-foreground">
                  Years of Experience
                </p>
              </div>
              <div className="group cursor-default">
                <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  30+
                </div>
                <p className="text-sm text-muted-foreground">
                  Projects Delivered
                </p>
              </div>
              <div className="group cursor-default">
                <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                  979+
                </div>
                <p className="text-sm text-muted-foreground">
                  LinkedIn Followers
                </p>
              </div>
            </div>
          </CardContent>
          {/* Meteors effect in background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-linear-to-r from-primary/5 via-primary/10 to-primary/5" />
          </div>
        </Card>
      </div>
    </section>
  );
}
