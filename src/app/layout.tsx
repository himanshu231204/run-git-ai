import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RUN-GIT AI - AI-powered Git Assistant",
  description: "Write better commits and PRs with AI. Let RUN-GIT AI handle your Git workflow.",
  keywords: ["git", "ai", "commit", "pull request", "code review", "developer tools"],
  authors: [{ name: "RUN-GIT AI" }],
  openGraph: {
    title: "RUN-GIT AI - AI-powered Git Assistant",
    description: "Write better commits and PRs with AI. Let RUN-GIT AI handle your Git workflow.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} min-h-screen bg-background text-foreground font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
