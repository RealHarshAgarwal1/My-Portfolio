import type { Metadata } from "next";
import { Cursor } from "@/components/cursor/cursor";
import { cn } from "@/lib/utils";
import { Bricolage_Grotesque,Oswald,Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import GrainEffect from "@/components/visualEffects/grain-effects";


//Fonts
const PixelFont = localFont({
  src:"../public/assets/fonts/PixelFont.ttf",
  variable: "--font-pixel",
})

const GeistMonoFont = Geist_Mono({
  subsets: ["latin"],
});

const MainFont = Bricolage_Grotesque({
  subsets: ["latin"],
});

const OswaldFont = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

//MetaData

export const metadata: Metadata = {
  title: "Harsh Agarwal",
  description: "Portfolio of Harsh Agarwal NextJWeb Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(MainFont.className,PixelFont.variable,OswaldFont.variable,GeistMonoFont.className)}
      >
        <GrainEffect />
        <Cursor color="#fff"/>
        {children}
      </body>
    </html>
  );
}
