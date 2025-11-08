"use client";

import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

const projects = [
  {
    title: "Git Axiom",
    description:
      "AI-powered CLI tool that generates professional Git commit messages using OpenAI GPT. Analyze staged changes and create conventional commits automatically.",
    tags: ["JavaScript", "Node.js", "OpenAI", "CLI"],
    github: "https://github.com/Abdiev003/git-axiom",
    live: null,
    featured: true,
  },
  {
    title: "Quberts Technologies",
    description:
      "Digital solutions company website offering full-stack development, cloud architecture, and DevOps services. Built with modern web technologies for optimal performance.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: null,
    live: "https://quberts.com",
    featured: true,
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with payment integration, real-time inventory management, and admin dashboard. Built with MERN stack.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    github: null,
    live: null,
    featured: true,
  },
  {
    title: "Real-Time Chat Application",
    description:
      "Scalable chat application with WebSocket connections, group chats, file sharing, and end-to-end encryption features.",
    tags: ["Next.js", "Socket.io", "PostgreSQL", "Redis"],
    github: null,
    live: null,
    featured: false,
  },
  {
    title: "Task Management System",
    description:
      "Collaborative project management tool with Kanban boards, team collaboration, time tracking, and analytics dashboard.",
    tags: ["React", "NestJS", "TypeScript", "MongoDB"],
    github: null,
    live: null,
    featured: false,
  },
  {
    title: "Analytics Dashboard",
    description:
      "Data visualization platform with real-time metrics, custom reports, and interactive charts. Integrated with multiple data sources.",
    tags: ["Next.js", "GraphQL", "PostgreSQL", "Recharts"],
    github: null,
    live: null,
    featured: false,
  },
];

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll
    ? projects
    : projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-2">
            Portfolio
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in full-stack
            development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedProjects.map((project, index) => (
            <CardContainer key={index} className="inter-var">
              <CardBody className="relative group/card border border-muted hover:border-primary/50 w-auto h-auto rounded-xl p-6 bg-card transition-all duration-300 hover:shadow-2xl">
                <CardItem translateZ="50" className="w-full">
                  <CardTitle className="text-xl text-foreground group-hover/card:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardItem>

                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-muted-foreground text-sm mt-2 line-clamp-3"
                >
                  {project.description}
                </CardItem>

                <CardItem translateZ="100" className="w-full mt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardItem>

                <div className="flex gap-2 mt-6">
                  {project.github && (
                    <CardItem translateZ={20} as="div" className="flex-1">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="w-full"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </CardItem>
                  )}
                  {project.live && (
                    <CardItem translateZ={20} as="div" className="flex-1">
                      <Button
                        variant="default"
                        size="sm"
                        asChild
                        className="w-full"
                      >
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </CardItem>
                  )}
                  {!project.github && !project.live && (
                    <CardItem translateZ={20} as="div" className="flex-1">
                      <Badge
                        variant="outline"
                        className="w-full justify-center"
                      >
                        Private Project
                      </Badge>
                    </CardItem>
                  )}
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>

        {/* Show More Button */}
        {projects.length > projects.filter((p) => p.featured).length && (
          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "View All Projects"}
            </Button>
          </div>
        )}

        {/* GitHub CTA */}
        <Card className="mt-12 bg-muted/50 border-none">
          <CardContent className="p-8 text-center space-y-4">
            <h3 className="text-2xl font-semibold">Want to see more?</h3>
            <p className="text-muted-foreground">
              Check out my GitHub profile for more projects and open-source
              contributions
            </p>
            <Button asChild>
              <a
                href="https://github.com/Abdiev003"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-2" />
                Visit GitHub Profile
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
