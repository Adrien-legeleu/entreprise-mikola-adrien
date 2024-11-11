import project1 from "@/public/image/projects/app-banque.netlify.app_(Nest Hub Max).png";
import project2 from "@/public/image/projects/le-resto.netlify.app_(Nest Hub Max).png";
import project3 from "@/public/image/projects/lurex.netlify.app_(Nest Hub Max) (1).png";
import project4 from "@/public/image/projects/orlumiere.netlify.app_(Nest Hub) (1).png";
import project5 from "@/public/image/projects/sturmayr.netlify.app_(Nest Hub Max).png";
import project6 from "@/public/image/projects/sushifood.netlify.app_(Nest Hub Max).png";
import project7 from "@/public/image/projects/villa-tyklouyou.netlify.app_(Nest Hub Max).png";
import project8 from "@/public/image/projects/lucassportfolio.netlify.app_(Nest Hub Max).png";
import OptimisedBadge from "@/app/components/project/badge/OptimisedBadge";
import InnovativeBadge from "@/app/components/project/badge/InnovativeBadge";
import ModernBadge from "@/app/components/project/badge/ModernBadge";

export const projectsData = [
  {
    img: project1,
    title: "Naseem - Banque App",
    link: "https://app-banque.netlify.app/",
    languages: ["React", "Tailwind", "TypeScript"],
    video: "/video/video-bank.mp4", // Vérifie que ce chemin est correct dans ton dossier public
    color: "#090C18",
    description:
      "Application bancaire avec une interface utilisateur interactive et des fonctionnalités de gestion financière.",
    badge: <OptimisedBadge />, // Badge avec ton composant OptimisedBadge
  },
  {
    img: project2,
    title: "Le Resto",
    link: "https://le-resto.netlify.app/",
    languages: ["React", "Sass", "JavaScript"],
    video: "/video/video-restaurant.mp4",
    color: "#21201E",
    description:
      "Application de restaurant permettant de parcourir le menu et de passer des commandes en ligne.",
    badge: <OptimisedBadge />,
  },
  {
    img: project4,
    title: "Or Lumière",
    link: "https://orlumiere.netlify.app/",
    languages: ["Vue.js", "Vuetify", "JavaScript"],
    video: "video/video-orlumiere.mp4",
    color: "#FFFFFF",
    description:
      "Site web de présentation pour une entreprise spécialisée dans l'éclairage, mettant en valeur leurs services et réalisations.",
    badge: <InnovativeBadge />,
  },
  {
    img: project5,
    title: "Sturmayr",
    link: "https://sturmayr.netlify.app/",
    languages: ["Angular", "SCSS", "TypeScript"],
    video: "video/video-sturmayr.mp4",
    color: "#FFFFFF",
    description:
      "Application web pour une entreprise de construction, présentant leurs projets et offres.",
    badge: <ModernBadge />,
  },
  {
    img: project6,
    title: "Sushi Food",
    link: "https://sushifood.netlify.app/",
    languages: ["Next.js", "Tailwind", "JavaScript"],
    video: "video/video-sushi.mp4",
    color: "#0B1517",
    badge: undefined,
    description:
      "Site e-commerce permettant de commander des plats de sushi en ligne avec un système de gestion de commande.",
  },
  {
    img: project7,
    title: "Villa Tyklouyou",
    link: "https://villa-tyklouyou.netlify.app/",
    languages: ["Gatsby", "CSS Modules", "JavaScript"],
    video: "video/video-tyklouyou.mp4",
    color: "#141342",
    description:
      "Site de présentation d'une villa de luxe, avec une galerie d'images et des informations sur les services disponibles.",
    badge: <InnovativeBadge />,
  },
  {
    img: project8,
    title: "Lucas portfolio",
    link: "https://lucassportfolio.netlify.app/",
    languages: ["Gatsby", "CSS Modules", "JavaScript"],
    video: "video/video-lucas.mp4",
    color: "#1B1E20",
    description: "Portfoliio d'un UI UX designer",
    badge: <OptimisedBadge />,
  },
  {
    img: project3,
    title: "Lurex",
    link: "https://lurex.netlify.app/",
    languages: ["Next.js", "Styled Components", "JavaScript"],
    video: "video/video-lurex.mp4",
    color: "#1B1B1B",
    badge: undefined,
    description:
      "Site e-commerce spécialisé dans la vente de produits de luxe avec une gestion de panier.",
  },
];
