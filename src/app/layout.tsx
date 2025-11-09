import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { CursorProvider } from "@/components/cursor-provider";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ali Abdiyev - Digital Solutions Architect",
  description:
    "Full-Stack Developer & Digital Solutions Architect specializing in modern web technologies. Building scalable applications with React, Next.js, Node.js, and more.",
  keywords: [
    "Ali Abdiyev",
    "Full-Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
  ],
  authors: [{ name: "Ali Abdiyev" }],
  creator: "Ali Abdiyev",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://quberts.com",
    title: "Ali Abdiyev - Digital Solutions Architect",
    description:
      "Full-Stack Developer & Digital Solutions Architect specializing in modern web technologies.",
    siteName: "Ali Abdiyev Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Abdiyev - Digital Solutions Architect",
    description:
      "Full-Stack Developer & Digital Solutions Architect specializing in modern web technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CursorProvider />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
