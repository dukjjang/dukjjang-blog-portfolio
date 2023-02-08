"use client";

import { Providers } from "./shard/Provider";
import { ServerThemeProvider } from "@wits/next-themes";
import "../styles/global.css";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import GoogleClientAnalytics from "./shard/GoogleClientAnalytics";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ServerThemeProvider enableSystem={false} attribute="class">
      <html lang="en">
        <head />
        <body className="overflow-x-hidden">
          <GoogleClientAnalytics />
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </body>
      </html>
    </ServerThemeProvider>
  );
}
