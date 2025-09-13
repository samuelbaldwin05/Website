import type { Metadata } from "next";
import "./globals.css";
import ParallaxGalaxy from "@/components/ParallaxGalaxy";

export const metadata: Metadata = {
  title: "Samuel Baldwin",
  description: "Projects and links",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-transparent text-gray-100 antialiased">
        <ParallaxGalaxy />
        {children}
      </body>
    </html>
  );
}
