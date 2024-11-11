"use client";
import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import { useEffect, useState } from "react"; // Importation de useState et useEffect

import metho1 from "@/public/image/methodology (1).png";
import metho2 from "@/public/image/methodology (2).png";
import metho3 from "@/public/image/methodology (3).png";

const dataMethods = [
  {
    id: 1,
    title: "Compréhension utilisateur",
    description:
      "Identification des problématiques de vos utilisateurs, de vos enjeux clés à travers l'écoute active et l'analyse de marché pour cadrer le projet.",
    img: metho1,
  },
  {
    id: 2,
    title: "Conception & Prototypage",
    description:
      "Création de maquettes et prototypes interactifs, testés et améliorés grâce aux retours des utilisateurs pour garantir une solution répondant à leurs attentes.",
    img: metho2,
  },
  {
    id: 3,
    title: "Développement agile",
    description:
      "Codage de votre application web en sprints d’une semaine, permettant des ajustements flexibles basés sur des tests en conditions réelles. A la fin de chaque sprint une revue est organisée ensemble.",
    img: metho3,
  },
  {
    id: 4,
    title: "Tests & améliorations",
    description:
      "Assurer la qualité et la performance de l'application par des tests rigoureux en conditions réelles, en prenant en compte des retours pour des ajustements.",
    img: metho1,
  },
];

export default function Methodology() {
  // Suivi de la position du scroll
  const [scrollY, setScrollY] = useState(0);

  // Effet pour écouter l'événement de scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Met à jour la position du scroll
    };

    window.addEventListener("scroll", handleScroll); // Ajout de l'événement
    return () => {
      window.removeEventListener("scroll", handleScroll); // Nettoyage
    };
  }, []);

  return (
    <div>
      <h2 className="text-4xl font-bold tracking-wide space-y-1 text-center">
        <span className="inline-block"> Notre méthodologie</span> <br />{" "}
        <span className="bg-[#3F2A78] p-3 inline-block rounded-lg -rotate-3 text-neutral-50">
          en application web
        </span>
      </h2>
      <div className="flex flex-col mt-20 gap-10 px-5">
        {dataMethods.map((method) => {
          // Calcul de l'échelle en fonction du défilement
          const scale = 1 + (scrollY / 1000) * (method.id % 2 === 0 ? 1 : 0.5); // Modifie le facteur selon la direction du scroll

          return (
            <div
              key={`methodologie de adrec étape : ${method.id}`}
              className="relative w-full px-24 py-20 rounded-3xl bg-[#151D53] grid grid-cols-2 gap-28"
              style={{
                transform: `scale(${scale})`, // Applique le scale dynamique
                transition: "transform 0.1s ease-out", // Animation douce
              }}
            >
              <div
                className={`relative space-y-2 ${
                  method.id % 2 === 0 ? " col-start-2 row-start-1" : ""
                }`}
              >
                <div className="p-4 w-2 h-2 -left-12 top-2 absolute bg-[#2E3A6D] flex items-center justify-center brightness-150 border border-neutral-50/10 shadow-inner shadow-white/12 rounded-full">
                  <div className="bg-white p-[2px] rounded-full" />
                </div>
                <span className="px-3 py-1 capitalize tracking-wide text-xs rounded-full bg-[#2E3A6D] text-neutral-100">
                  étape {method.id}
                </span>
                <h4 className="text-white text-3xl font-medium tracking-wide">
                  {method.title}
                </h4>
                <p className="max-w-md text-neutral-200 leading-relaxed">
                  {method.description}
                </p>
                <Button variant="outline">
                  En savoir plus <IconArrowRight />
                </Button>
              </div>

              <div
                className={`p-5 rounded-xl bg-[#1A2358] ${
                  method.id % 2 === 0 ? "col-start-1 row-start-1" : ""
                }`}
              >
                <span className="text-white font-bold relative left-5">
                  Ticket
                </span>
                <Image
                  src={method.img}
                  alt="img de la méthodologie de adrec"
                  width={500}
                  height={500}
                  className="w-full"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
