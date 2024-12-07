import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export const metadata: Metadata = {
  title: "Adrec - Création de Sites Web & Référencement SEO",
  description:
    "Adrec est une agence spécialisée dans la création de sites web sur mesure, l'optimisation SEO et la maintenance de sites internet pour booster votre présence en ligne.",
  keywords:
    "création de sites web, agence création site, optimisation SEO, référencement naturel, maintenance site web, développement web, site vitrine, site e-commerce, création site internet, expertise SEO, stratégie digitale",
  openGraph: {
    title: "Adrec - Agence de Création de Sites Web & SEO",
    description:
      "Adrec propose des solutions de création de sites web modernes, une stratégie SEO sur mesure et des services de maintenance pour améliorer votre visibilité en ligne.",
    url: "https://adrec.netlify.app/",
    images: [
      {
        url: "https://adrec.netlify.app/logo/logo.png", // URL absolue pour le logo
        width: 800,
        height: 800,
        alt: "Logo Adrec - Agence Création de Sites Web & SEO",
      },
    ],
    siteName: "Adrec",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adrec - Création de Sites Web & Services SEO",
    description:
      "Agence spécialisée dans la création de sites web, l'optimisation SEO et la maintenance pour améliorer votre stratégie digitale.",
    images: ["https://adrec.netlify.app/logo/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="icon"
          href="https://adrec.netlify.app/logo/logo.png"
          type="image/x-icon"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Adrec est une agence spécialisée dans la création de sites web, SEO et maintenance pour améliorer votre stratégie digitale."
        />
        <meta
          name="keywords"
          content="création site web, SEO, agence web, développement web, maintenance de site internet, stratégie SEO, site vitrine, site e-commerce"
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <ToastContainer />
          </ThemeProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
