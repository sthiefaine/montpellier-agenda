import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";


export const metadata: Metadata = {
  title: "Agenda Montpellier",
  description: "Découvrez tous les événements à Montpellier et ses environs",
  keywords: [
    "Montpellier",
    "événements",
    "agenda",
    "sorties",
    "culture",
    "festivals",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 pt-[40px] pb-[30px]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
