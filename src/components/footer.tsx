import Link from "next/link";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const navigation = {
  main: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],
  social: [
    {
      name: "GitHub",
      href: "https://github.com/Abdiev003",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ali-abdiyev/",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:aliabdiyev000@gmail.com",
      icon: Mail,
    },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Ali Abdiyev</h3>
            <p className="text-sm text-muted-foreground">
              Digital Solutions Architect crafting high-performance web
              experiences
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {navigation.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Connect</h4>
            <div className="flex gap-2">
              {navigation.social.map((item) => (
                <Button key={item.name} variant="ghost" size="icon" asChild>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={item.name}
                  >
                    <item.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Available for freelance work & collaboration
            </p>
          </div>
        </div>

        <Separator />

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Ali Abdiyev. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="h-4 w-4 text-red-500 fill-red-500" />{" "}
            using Next.js & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
