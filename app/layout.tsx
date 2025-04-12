import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { cx } from "@/lib/utils";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "@/components/Provider";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Alireza Mirzade",
  description: "I'm a frontend developer",
  icons: {
    icon: "/images/profile.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={cx(GeistSans.variable, GeistMono.variable)}>
      <body
        className="relative mx-auto flex min-h-screen max-w-xl flex-col 
     justify-between antialiased  dark:bg-bgdark"
      >
        {" "}
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <div className="px-8 min-h-screen">{children}</div>

            <Footer />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
