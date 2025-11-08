"use client";

import { motion } from "framer-motion";
import { Database, Cloud, Layers } from "lucide-react";

import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { GlowingStarsBackgroundCard } from "@/components/ui/glowing-stars";

const skillCategories = {
  frontend: {
    title: "Frontend Development",
    skills: [
      { name: "React", level: "Expert" },
      { name: "Next.js", level: "Expert" },
      { name: "TypeScript", level: "Expert" },
      { name: "JavaScript", level: "Expert" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "HTML/CSS", level: "Expert" },
      { name: "Vue.js", level: "Advanced" },
      { name: "Angular", level: "Advanced" },
      { name: "Redux", level: "Advanced" },
      { name: "Zustand", level: "Advanced" },
      { name: "Sass/SCSS", level: "Advanced" },
      { name: "Webpack", level: "Advanced" },
      { name: "Vite", level: "Advanced" },
      { name: "React Native", level: "Intermediate" },
      { name: "Nuxt.js", level: "Intermediate" },
      { name: "Svelte", level: "Intermediate" },
    ],
  },
  backend: {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: "Expert" },
      { name: "Express.js", level: "Expert" },
      { name: "RESTful APIs", level: "Expert" },
      { name: "NestJS", level: "Advanced" },
      { name: "GraphQL", level: "Advanced" },
      { name: "Socket.io", level: "Advanced" },
      { name: "Microservices", level: "Advanced" },
      { name: "Django", level: "Intermediate" },
      { name: "Golang", level: "Intermediate" },
      { name: "FastAPI", level: "Intermediate" },
      { name: "tRPC", level: "Intermediate" },
    ],
  },
  database: {
    title: "Database & Storage",
    skills: [
      { name: "MongoDB", level: "Expert" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "Redis", level: "Advanced" },
      { name: "Firebase", level: "Advanced" },
      { name: "Prisma", level: "Advanced" },
      { name: "MySQL", level: "Intermediate" },
      { name: "Supabase", level: "Intermediate" },
      { name: "Elasticsearch", level: "Intermediate" },
    ],
  },
  devops: {
    title: "DevOps & Cloud",
    skills: [
      { name: "Git", level: "Expert" },
      { name: "Vercel", level: "Expert" },
      { name: "AWS", level: "Advanced" },
      { name: "Docker", level: "Advanced" },
      { name: "CI/CD", level: "Advanced" },
      { name: "Linux", level: "Advanced" },
      { name: "Kubernetes", level: "Advanced" },
      { name: "GitHub Actions", level: "Advanced" },
      { name: "Nginx", level: "Advanced" },
      { name: "GCP", level: "Intermediate" },
      { name: "Terraform", level: "Intermediate" },
      { name: "Jenkins", level: "Intermediate" },
    ],
  },
};

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-green-500/10 text-green-500 border-green-500/20";
    case "Advanced":
      return "bg-blue-500/10 text-blue-500 border-blue-500/20";
    case "Intermediate":
      return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
    default:
      return "bg-muted";
  }
};

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[14px_24px] opacity-20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-2">
            Skills & Expertise
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            My Tech Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Tabs */}
        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="database">Database</TabsTrigger>
            <TabsTrigger value="devops">DevOps</TabsTrigger>
          </TabsList>

          {Object.entries(skillCategories).map(([key, category]) => (
            <TabsContent key={key} value={key} className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <GlowingStarsBackgroundCard>
                  <CardHeader>
                    <CardTitle className="text-2xl">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="group relative"
                        >
                          <Badge
                            variant="outline"
                            className={`${getLevelColor(
                              skill.level
                            )} text-sm px-4 py-2 cursor-default transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:-translate-y-2 hover:brightness-125`}
                          >
                            <span className="relative z-10">{skill.name}</span>
                          </Badge>
                          <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none border shadow-2xl backdrop-blur-sm">
                            <span className="font-semibold">{skill.level}</span>
                            <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-popover" />
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </GlowingStarsBackgroundCard>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Additional Services - Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <BentoGrid className="mt-12 max-w-6xl mx-auto">
            <BentoGridItem
              title="API Design & Integration"
              description="Robust and secure RESTful & GraphQL APIs with proper documentation and testing"
              header={
                <div className="flex flex-1 w-full h-full min-h-24 rounded-xl bg-linear-to-br from-primary/20 via-primary/10 to-primary/5 items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <Layers className="h-12 w-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
              }
              icon={<Layers className="h-4 w-4 text-primary" />}
            />
            <BentoGridItem
              title="Database Architecture"
              description="Custom SQL & NoSQL database solutions optimized for your project's specific needs"
              header={
                <div className="flex flex-1 w-full h-full min-h-24 rounded-xl bg-linear-to-br from-primary/20 via-primary/10 to-primary/5 items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <Database className="h-12 w-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
              }
              icon={<Database className="h-4 w-4 text-primary" />}
            />
            <BentoGridItem
              title="Cloud Deployment"
              description="Application deployment and automation with CI/CD pipelines on AWS/GCP platforms"
              header={
                <div className="flex flex-1 w-full h-full min-h-24 rounded-xl bg-linear-to-br from-primary/20 via-primary/10 to-primary/5 items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <Cloud className="h-12 w-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
              }
              icon={<Cloud className="h-4 w-4 text-primary" />}
            />
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  );
}
