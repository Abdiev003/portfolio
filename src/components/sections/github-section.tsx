"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Star, GitFork, Users, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const githubUsername = "Abdiev003";

interface GitHubStats {
  totalStars: number;
  totalRepos: number;
  totalFollowers: number;
  totalForks: number;
}

export function GitHubSection() {
  const [stats, setStats] = useState<GitHubStats>({
    totalStars: 15,
    totalRepos: 30,
    totalFollowers: 38,
    totalForks: 8,
  });

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${githubUsername}`
        );
        const data = await response.json();

        setStats({
          totalStars: data.public_repos,
          totalRepos: data.public_repos,
          totalFollowers: data.followers,
          totalForks: 0, // Calculate from repos if needed
        });
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
      }
    };

    fetchGitHubStats();
  }, []);

  const statsData = [
    {
      icon: Star,
      label: "Total Stars",
      value: stats.totalStars,
      color: "text-yellow-500",
    },
    {
      icon: GitFork,
      label: "Total Forks",
      value: stats.totalForks,
      color: "text-blue-500",
    },
    {
      icon: Code2,
      label: "Public Repos",
      value: stats.totalRepos,
      color: "text-green-500",
    },
    {
      icon: Users,
      label: "Followers",
      value: stats.totalFollowers,
      color: "text-purple-500",
    },
  ];

  return (
    <section
      id="github"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
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
            <Github className="h-3 w-3 mr-1" />
            GitHub Activity
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Open Source Contributions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Check out my GitHub activity and contributions to the developer
            community
          </p>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-muted hover:border-primary/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub Stats Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* GitHub Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-muted h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Github className="h-5 w-5" />
                  GitHub Stats
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative w-full aspect-495/195 rounded-lg overflow-hidden bg-muted/50">
                  <Image
                    src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=dark&hide_border=true&bg_color=00000000&title_color=ffffff&text_color=ffffff&icon_color=3b82f6`}
                    alt="GitHub Stats"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Top Languages Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="border-muted h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code2 className="h-5 w-5" />
                  Most Used Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative w-full aspect-300/200 rounded-lg overflow-hidden bg-muted/50">
                  <Image
                    src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=dark&hide_border=true&bg_color=00000000&title_color=ffffff&text_color=ffffff`}
                    alt="Top Languages"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* GitHub Streak */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="border-muted">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🔥 Contribution Streak
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative w-full aspect-495/165 rounded-lg overflow-hidden bg-muted/50">
                <Image
                  src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=dark&hide_border=true&background=00000000&ring=3b82f6&fire=3b82f6&currStreakLabel=ffffff`}
                  alt="GitHub Streak"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </CardContent>
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
          <Card className="bg-linear-to-br from-primary/5 via-transparent to-primary/5 border-muted inline-block">
            <CardContent className="p-8">
              <Github className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-2">Want to see more?</h3>
              <p className="text-muted-foreground mb-6">
                Check out my GitHub profile for all my projects and
                contributions
              </p>
              <a
                href={`https://github.com/${githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                <Github className="h-5 w-5" />
                Visit GitHub Profile
              </a>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
