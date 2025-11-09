"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Menu,
  Home,
  User,
  Code,
  FolderGit2,
  Mail,
  Briefcase,
} from "lucide-react";

import { CursorToggle } from "@/components/cursor-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "GitHub", href: "#github", icon: FolderGit2 },
  { name: "Projects", href: "#projects", icon: FolderGit2 },
  { name: "Contact", href: "#contact", icon: Mail },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      }

      setIsScrolled(currentScrollY > 10);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      } ${!isVisible ? "-translate-y-full" : "translate-y-0"}`}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#home"
          className="text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
        >
          <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Ali Abdiyev
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
            >
              {item.name}
            </Link>
          ))}
          <div className="ml-2 flex items-center gap-1">
            <CursorToggle />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-1">
          <CursorToggle />
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-accent">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <SheetHeader className="text-left">
                <SheetTitle className="text-2xl font-bold">
                  <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Menu
                  </span>
                </SheetTitle>
              </SheetHeader>

              <Separator className="my-6" />

              <nav className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <SheetClose asChild key={item.name}>
                      <Link
                        href={item.href}
                        className="group flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200 ease-in-out"
                      >
                        <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                        <span>{item.name}</span>
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>

              <Separator className="my-6" />

              <div className="space-y-2">
                <p className="text-xs text-muted-foreground px-4">
                  © 2025 Ali Abdiyev
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
