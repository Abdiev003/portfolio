"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Experience {
  company: string;
  position: string;
  location: string;
  period: string;
  current: boolean;
  description: string[];
  technologies: string[];
  link?: string;
}

const experiences: Experience[] = [
  {
    company: "Quberts Technologies",
    position: "Founder & Digital Solutions Architect",
    location: "Remote (Valencia, Spain)",
    period: "Oct 2021 - Present",
    current: true,
    description: [
      "Founded and leading a digital solutions company incorporated in the United Kingdom",
      "Architecting and developing scalable full-stack applications for clients worldwide",
      "Managing end-to-end project delivery from idea to production deployment",
      "Building high-performance web applications using React, Next.js, and Node.js",
      "Implementing CI/CD pipelines and cloud infrastructure on AWS/GCP/Vercel",
      "Leading technical decisions, code reviews, and mentoring development teams",
      "Successfully delivered 30+ projects with 100% client satisfaction rate",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "NestJS",
      "MongoDB",
      "PostgreSQL",
      "AWS",
      "Docker",
      "CI/CD",
    ],
    link: "https://quberts.com",
  },
  {
    company: "Tech Academy Baku",
    position: "Full-Stack Web Developer (Graduate)",
    location: "Remote",
    period: "2020 - Apr 2021",
    current: false,
    description: [
      "Completed intensive Full-Stack Web Development bootcamp program",
      "Mastered modern web development technologies and best practices",
      "Built multiple production-ready projects using MERN stack",
      "Collaborated with teams on real-world client projects",
      "Graduated with honors and received Full-Stack Developer certification",
      "Started freelancing immediately after certification",
    ],
    technologies: [
      "JavaScript",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "HTML/CSS",
      "Git",
      "REST APIs",
    ],
  },
  {
    company: "Freelance Developer",
    position: "Web Developer",
    location: "Remote",
    period: "2019 - 2020",
    current: false,
    description: [
      "Started web development journey working on small-scale projects",
      "Developed responsive websites and landing pages for local businesses",
      "Specialized in frontend development with HTML, CSS, JavaScript",
      "Learned PHP and Laravel for backend development",
      "Built personal portfolio and open-source projects",
      "Gained hands-on experience in client communication and project management",
    ],
    technologies: [
      "HTML/CSS",
      "JavaScript",
      "PHP",
      "Laravel",
      "Bootstrap",
      "jQuery",
      "MySQL",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[14px_24px] opacity-20" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-2">
            <Briefcase className="h-3 w-3 mr-1" />
            Work Experience
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Professional Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            6+ years of building innovative solutions remotely since 2019
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative md:grid md:grid-cols-2 md:gap-8 items-center ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg z-10">
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                </div>

                {/* Content */}
                <div
                  className={`${
                    index % 2 === 0 ? "md:col-start-2" : "md:col-start-1"
                  }`}
                >
                  <Card className="border-muted hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <CardTitle className="text-xl">
                              {exp.position}
                            </CardTitle>
                            {exp.current && (
                              <Badge variant="default" className="text-xs">
                                Current
                              </Badge>
                            )}
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              {exp.link ? (
                                <Link
                                  href={exp.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-semibold text-primary hover:underline flex items-center gap-1"
                                >
                                  {exp.company}
                                  <ExternalLink className="h-3 w-3" />
                                </Link>
                              ) : (
                                <span className="font-semibold text-foreground">
                                  {exp.company}
                                </span>
                              )}
                            </div>
                            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{exp.period}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Description */}
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1">▹</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="pt-4 border-t border-border">
                        <p className="text-xs font-semibold text-muted-foreground mb-2">
                          Technologies Used:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                {index % 2 === 0 ? <div className="hidden md:block" /> : null}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <Card className="text-center p-6 bg-card/50 backdrop-blur-sm border-muted hover:border-primary/50 transition-colors">
            <div className="text-3xl font-bold text-primary mb-1">4+</div>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </Card>
          <Card className="text-center p-6 bg-card/50 backdrop-blur-sm border-muted hover:border-primary/50 transition-colors">
            <div className="text-3xl font-bold text-primary mb-1">30+</div>
            <p className="text-sm text-muted-foreground">Projects Delivered</p>
          </Card>
          <Card className="text-center p-6 bg-card/50 backdrop-blur-sm border-muted hover:border-primary/50 transition-colors">
            <div className="text-3xl font-bold text-primary mb-1">979+</div>
            <p className="text-sm text-muted-foreground">Followers</p>
          </Card>
          <Card className="text-center p-6 bg-card/50 backdrop-blur-sm border-muted hover:border-primary/50 transition-colors">
            <div className="text-3xl font-bold text-primary mb-1">500+</div>
            <p className="text-sm text-muted-foreground">Connections</p>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="https://www.linkedin.com/in/ali-abdiyev/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium"
          >
            View Full Experience on LinkedIn
            <ExternalLink className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
