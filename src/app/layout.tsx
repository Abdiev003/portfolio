import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
