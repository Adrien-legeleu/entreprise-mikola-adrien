import MAquetteImg from "@/public/image/maquette-techno.png";
import {
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
    desc: "Framework JavaScript avec rendu côté serveur et fonctionnalités SEO avancées.",
    descModal:
      "Next.js est un framework performant basé sur React qui facilite le rendu côté serveur (SSR) et l'optimisation SEO. Il intègre des fonctionnalités comme le routage dynamique et la pré-génération de pages pour une meilleure performance.",
    icon: (
      <IconBrandNextjs className="text-indigo-purple dark:text-indigo-light w-full h-full" />
    ),
  },
  {
    title: "Node.js",
    desc: "Environnement JavaScript pour le développement de serveurs rapides et performants.",
    descModal:
      "Node.js est un environnement d'exécution JavaScript optimisé pour la création de serveurs, d'API et d'applications en temps réel avec une latence minimale.",
    icon: (
      <IconBrandNodejs className="text-indigo-purple dark:text-indigo-light w-full h-full" />
    ),
  },
  {
    title: "Tailwind CSS",
    desc: "Framework CSS basé sur des classes utilitaires pour un design rapide et réactif.",
    descModal:
      "Tailwind CSS propose une approche de conception basée sur des classes utilitaires. Cette méthode permet de créer des interfaces modernes rapidement tout en conservant un code clair et léger.",
    icon: (
      <IconBrandTailwind className="text-indigo-purple dark:text-indigo-light w-full h-full" />
    ),
  },
  {
    title: "React",
    desc: "Bibliothèque JavaScript pour la création d'interfaces utilisateur dynamiques.",
    descModal:
      "React est une bibliothèque JavaScript développée par Facebook, utilisée pour concevoir des interfaces utilisateur réactives avec une architecture basée sur des composants réutilisables.",
    icon: (
      <IconBrandReact className="text-indigo-purple dark:text-indigo-light w-full h-full" />
    ),
  },
  {
    title: "MySQL",
    desc: "Système de base de données relationnelles rapide et fiable.",
    descModal:
      "MySQL est un SGBD (système de gestion de bases de données) open-source utilisé pour la gestion de données dans des applications web. Il est rapide, fiable et largement adopté dans l'industrie.",
    icon: (
      <IconBrandMysql className="text-indigo-purple dark:text-indigo-light w-full h-full" />
    ),
  },
  {
    title: "TypeScript",
    desc: "Langage JavaScript avec typage statique pour un développement plus sûr.",
    descModal:
      "TypeScript est une surcouche de JavaScript qui introduit un typage statique, réduisant ainsi les erreurs et rendant le code plus maintenu, plus lisible et plus sûr.",
    icon: (
      <IconBrandTypescript className="text-indigo-purple dark:text-indigo-light w-full h-full" />
    ),
  },
];

export default function Technologies() {
  return (
    <div className="lg:h-screen h-full max-w-[1500px] mx-auto w-full lg:grid lg:grid-cols-2 flex flex-col max-lg:items-center lg:gap-32 gap-12 sm:px-16 430:px-8 px-2 mb-32">
      <div className="space-y-10">
        <h2 className="sm:text-4xl text-2xl font-bold tracking-wide space-y-1 text-center">
          <span className="inline-block text-indigo-purple dark:text-indigo-light">
            Compétences en développement
          </span>
          <br />
          <span className="bg-[#3F2A78] dark:bg-[#A0AEC0] sm:text-4xl text-xl p-3 inline-block rounded-lg -rotate-3 text-neutral-50 dark:text-black">
            Technologies maîtrisées
          </span>
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-center px-4">
          Découvrez les technologies clés que nous utilisons dans nos projets de
          développement web. Chaque outil et technologie représente notre
          expertise en matière de création de solutions modernes, performantes,
          et scalables.
        </p>
        <Image
          src={MAquetteImg}
          width={1000}
          height={1000}
          alt="image illustrative des technologies web utilisées"
          className="w-2/3 mx-auto"
        />
      </div>
      <ul className="space-y-1">
        {dataTechno.map((data, idx) => {
          return (
            <DrawerDemoTechno key={`techno-${idx}`} techno={data} idx={idx} />
          );
        })}
      </ul>
    </div>
  );
}
