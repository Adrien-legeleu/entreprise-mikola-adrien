import {
  IconBrandMysql,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
} from "@tabler/icons-react";
export const dataTechno = [
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
