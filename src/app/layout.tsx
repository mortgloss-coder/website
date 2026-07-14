import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mort Gloss | Author | Official Website",
  description: "Welcome to the official website of author Mort Gloss. Download 'The Atheist Welcoming Committee' and 'Balloon Boy and the Porcupine Pals' for free.",
  keywords: ["Mort Gloss", "Author", "Science Fiction", "Comedy", "Speculative Fiction", "Free E-books", "The Atheist Welcoming Committee", "Balloon Boy"],
  authors: [{ name: "Mort Gloss" }],
  openGraph: {
    title: "Mort Gloss | Author | Official Website",
    description: "Welcome to the official website of author Mort Gloss. Download 'The Atheist Welcoming Committee' and 'Balloon Boy and the Porcupine Pals' for free.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 selection:bg-amber-500 selection:text-zinc-950">
        {children}
      </body>
    </html>
  );
}
