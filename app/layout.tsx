import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";



export const metadata: Metadata = {
  title: "Comet Currency",
  description: "Save using your social influence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className="px-4 md:px-12 py-4 md:py-8"
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
