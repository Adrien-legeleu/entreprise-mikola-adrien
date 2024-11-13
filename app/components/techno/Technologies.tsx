import MAquetteImg from "@/public/image/maquette-techno.png";
import {
  IconArrowRight,
  IconBrandMysql,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
} from "@tabler/icons-react";
import Image from "next/image";
import DrawerDemoTechno from "./DrawerModal";
const dataTechno = [
  {
    title: "Next.js",
    desc: "SSR et SEO améliorés pour vos applications React.",
    descModal:
      "Next.js est un framework puissant pour React qui simplifie la création d'applications web avec rendu côté serveur (SSR) et optimisation SEO intégrée. Il offre des fonctionnalités avancées comme le routage dynamique et la génération de pages statiques, permettant de créer des sites performants et évolutifs.",
    icon: (
      <IconBrandNextjs className="text-indigo-purple dark:text-indigo-light w-full h-full" />
    ),
  },
  {
    title: "Node.js",
    desc: "Plateforme JavaScript pour le backend.",
    descModal:
      "Node.js est un environnement d'exécution qui permet de développer des applications côté serveur avec JavaScript. Il est très performant, capable de gérer de grandes charges, et idéal pour créer des API, des microservices et des applications web temps réel avec une faible latence.",
    icon: (
      <IconBrandNodejs className="text-indigo-purple dark:text-indigo-light w-full h-full" />
    ),
  },
  {
    title: "Tailwind CSS",
    desc: "Framework CSS utilitaire pour des designs rapides.",
    descModal:
      "Tailwind CSS est un framework qui propose des classes utilitaires prédéfinies pour un développement rapide et flexible de designs modernes. Grâce à sa structure, il permet de personnaliser facilement le style et de garder un code CSS léger et maintenable.",
    icon: (
      <IconBrandTailwind className="text-indigo-purple dark:text-indigo-light w-full h-full" />
    ),
  },
  {
    title: "React",
    desc: "Librairie JavaScript pour interfaces dynamiques.",
    descModal:
      "React est une bibliothèque JavaScript développée par Facebook pour construire des interfaces utilisateurs interactives. Grâce à son architecture basée sur des composants, elle permet de créer des applications dynamiques, maintenables et modulaires, avec une mise à jour efficace des données.",
    icon: (
      <IconBrandReact className="text-indigo-purple dark:text-indigo-light w-full h-full" />
    ),
  },
  {
    title: "MySQL",
    desc: "Système de gestion de bases de données relationnelles.",
    descModal:
      "MySQL est un système de gestion de bases de données relationnelles populaire et open-source. Il est largement utilisé pour le stockage et la gestion des données dans les applications web et les systèmes d’information, offrant fiabilité, rapidité et sécurité pour des projets de toute taille.",
    icon: (
      <IconBrandMysql className="text-indigo-purple dark:text-indigo-light w-full h-full" />
    ),
  },
  {
    title: "TypeScript",
    desc: "Surcouche de JavaScript pour un code typé.",
    descModal:
      "TypeScript est un sur-ensemble de JavaScript qui ajoute un typage statique, rendant le code plus sécurisé et maintenable. Il est particulièrement utile pour les grands projets, aidant les développeurs à éviter les erreurs et à structurer le code de manière plus claire et fiable.",
    icon: (
      <IconBrandTypescript className="text-indigo-purple dark:text-indigo-light w-full h-full" />
    ),
  },
];

export default function Technologies() {
  return (
    <div className="h-screen w-full grid grid-cols-2 gap-32 px-16">
      <div className="space-y-10">
        <h2 className="sm:text-4xl text-3xl font-bold tracking-wide space-y-1 text-center">
          <span className="inline-block text-indigo-purple dark:text-indigo-light">
            Développement web
          </span>
          <br />
          <span className="bg-[#3F2A78] dark:bg-[#A0AEC0] p-3 inline-block rounded-lg -rotate-3 text-neutral-50 dark:text-black">
            nos spécialités
          </span>
        </h2>
        <Image
          src={MAquetteImg}
          width={1000}
          height={1000}
          alt="maquette image adrec"
          className="w-2/3 mx-auto"
        />
      </div>
      <ul className="space-y-1">
        {dataTechno.map((data, idx) => {
          return <DrawerDemoTechno techno={data} idx={idx} />;
        })}
      </ul>
    </div>
  );
}
