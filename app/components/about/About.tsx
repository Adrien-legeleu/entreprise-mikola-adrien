"use client";
import { motion } from "framer-motion";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import ImgCreativity from "@/public/image/Macbook Mockup Front View UV.png";
import imgClient from "@/public/image/freepik__background__46135.png";
import imgExpertise from "@/public/image/Iphone 15 Screens Mockup (1).png";

const dataAbout = [
  {
    id: 1,
    title: "Créativité",
    description:
      "Chez Adrec, chaque projet est conçu sur mesure. Nous créons des sites web modernes, innovants et en adéquation avec l'identité de votre marque.",
    imgSrc: ImgCreativity,
  },
  {
    id: 2,
    title: "Expertise technique",
    description:
      "Nos spécialistes maîtrisent les technologies les plus avancées pour vous offrir des sites rapides, performants et parfaitement optimisés.",
    imgSrc: imgExpertise,
  },
  {
    id: 3,
    title: "Satisfaction client",
    description:
      "Votre réussite est notre priorité. Nous vous accompagnons à chaque étape pour répondre pleinement à vos attentes.",
    imgSrc: imgClient,
  },
];

export default function About() {
  return (
    <div
      className="bg-gradient-to-b from-neutral-100 to-white dark:from-neutral-800 dark:to-neutral-950 z-10 relative pb-32"
      id="about"
    >
      <div className="max-w-[1500px] mx-auto relative">
        <motion.div
          initial={{ width: "70%", height: "auto" }}
          whileInView={{ width: "98%", height: "auto" }}
          viewport={{ amount: 0.01 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="bg-[#374151] dark:bg-[#CBD5E1] max-w-[1500px] mx-auto rounded-3xl p-8 overflow-hidden md:space-y-20 space-y-10"
        >
          <div className="space-y-2">
            <h2 className="md:text-4xl sm:text-3xl text-2xl text-neutral-100 dark:text-neutral-700 text-center font-bold tracking-wide">
              Nous sommes ici pour vous accompagner
            </h2>
            <p className="text-sm text-neutral-400 dark:text-neutral-500 text-center tracking-wide">
              Adrec met son expertise et son savoir-faire au service de votre
              succès en ligne. Faites de votre projet une réalité avec une
              stratégie digitale efficace.
            </p>
          </div>
          <div className="flex md:justify-around md:flex-row flex-col justify-center items-center md:gap-2 gap-10">
            {dataAbout.map((item) => (
              <div key={item.id} className="w-[340px]">
                <div className="flex justify-center">
                  <Image
                    width={1000}
                    height={1000}
                    alt={`Section À propos Adrec : ${item.title}`}
                    src={item.imgSrc}
                    className="object-contain w-60 h-52 relative"
                    style={{ top: item.id === 1 ? "10px" : "-5px" }}
                  />
                </div>
                <h3 className="lg:text-2xl text-xl text-neutral-100 dark:text-neutral-700 text-center mb-2 font-semibold">
                  {item.title}
                </h3>
                <p className="text-neutral-400 dark:text-neutral-500 lg:text-base text-sm text-center">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="w-full flex items-center justify-center">
            <Button variant="destructive">Obtenez un devis</Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
