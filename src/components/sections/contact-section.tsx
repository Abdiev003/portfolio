"use client";

import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Instagram,
  Facebook,
  Download,
  FileText,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MovingBorderButton } from "@/components/ui/moving-border";
import { Meteors } from "@/components/ui/meteors";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "aliabdiyev000@gmail.com",
    href: "mailto:aliabdiyev000@gmail.com",
    description: "Best way to reach me",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "ali-abdiyev",
    href: "https://www.linkedin.com/in/ali-abdiyev/",
    description: "Let's connect professionally",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Valencia, Spain",
    href: null,
    description: "Available for remote work",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/Abdiev003",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ali-abdiyev/",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/abdievv003",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/abdievv003",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-2">
            Get In Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>

          {/* Resume Download Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <HoverBorderGradient
              as="a"
              href="/resume-ali-abdiyev-en.pdf"
              download="Ali-Abdiyev-Resume.pdf"
              containerClassName="rounded-lg"
              className="flex items-center gap-2 text-sm font-medium"
            >
              <Download className="h-4 w-4" />
              <span>Download Resume</span>
            </HoverBorderGradient>

            <Button variant="outline" size="default" asChild>
              <a
                href="/resume-ali-abdiyev-en.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FileText className="h-4 w-4" />
                View Resume
              </a>
            </Button>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className="border-muted hover:border-primary/50 transition-colors"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <method.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{method.title}</CardTitle>
                <CardDescription>{method.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {method.href ? (
                  <a
                    href={method.href}
                    target={
                      method.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      method.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-sm font-medium hover:text-primary transition-colors break-all"
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium">{method.value}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Card */}
        <Card className="bg-linear-to-br from-primary/5 via-transparent to-primary/5 border-muted relative overflow-hidden">
          <Meteors number={20} />
          <CardContent className="p-8 md:p-12 text-center space-y-6 relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you need a complete solution or want to enhance an
              existing project, I'm here to help bring your vision to life with
              clean, efficient code.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MovingBorderButton
                as="a"
                href="mailto:aliabdiyev000@gmail.com"
                borderRadius="0.75rem"
                className="text-sm font-medium h-12 px-6"
                containerClassName="sm:w-auto w-full"
              >
                <Mail className="h-4 w-4 mr-2" />
                Send Me an Email
              </MovingBorderButton>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://www.linkedin.com/in/ali-abdiyev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Follow me on social media
              </p>
              <div className="flex items-center justify-center gap-3">
                {socialLinks.map((social, index) => (
                  <Button key={index} variant="ghost" size="icon" asChild>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
