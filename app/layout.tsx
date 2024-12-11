import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("./components/header/Header"));
const Footer = dynamic(() => import("./components/footer/Footer"));

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
    // images: [
    //   {
    //     url: "/logo.png", // URL absolue pour le logo
    //     width: 800,
    //     height: 800,
    //     alt: "Logo Adrec - Agence Création de Sites Web & SEO",
    //   },
    // ],
    siteName: "Adrec",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adrec - Création de Sites Web & Services SEO",
    description:
      "Agence spécialisée dans la création de sites web, l'optimisation SEO et la maintenance pour améliorer votre stratégie digitale.",
    // images: ["/logo.png"],
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
        <link rel="icon" href="/adrec-logo.png" type="image/png" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
