import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lander Portfolio",
  description: "Check out Lander's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen p-24">
        <h1 className="font-bold text-7xl">Lander Van Landeghem</h1>
        <main className="my-5">
          {children}
        </main>
      </body>
    </html>
  );
}
