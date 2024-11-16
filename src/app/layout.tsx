import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/header";
import Footer from "@/components/footer";
import { JetBrains_Mono} from "next/font/google";

const jetbrainsMono=JetBrains_Mono({subsets:["latin"],weight:["100","200","300","400","500","600","700","800"] ,variable:"--font-jetbrainsMono"});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable}  antialiased`}
      >
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
