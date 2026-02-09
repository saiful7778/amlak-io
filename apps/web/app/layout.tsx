import { Geist } from "next/font/google";

import "@workspace/ui/globals.css";
import Providers from "@/components/providers";
import { Metadata } from "next";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Amlak.io - Intelligent Real Estate Assistant",
  description:
    "AI-powered real estate agent for Dubai. Search, compare, and invest in properties with advanced AI insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={geistSans.style} className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
