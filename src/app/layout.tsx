import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import 'bootstrap/dist/css/bootstrap.min.css';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Game",
  description: "Ali Mohamed Ali Mansor Portfolio",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}