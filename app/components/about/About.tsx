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
      "Chez Adrec, chaque projet est unique. Nous créons des sites web innovants et esthétiques, adaptés à l'image de votre marque.",
    imgSrc: ImgCreativity,
  },
  {
    id: 2,
    title: "Expertise technique",
    description:
      "Nos experts maîtrisent les dernières technologies pour vous offrir des sites performants, rapides et optimisés.",
    imgSrc: imgExpertise,
  },
  {
    id: 3,
    title: "Satisfaction client",
    description:
      "Nous écoutons vos besoins et vous accompagnons à chaque étape pour garantir votre succès en ligne.",
    imgSrc: imgClient,
  },
];

export default function About() {
  return (
    <div className="bg-gradient-to-b from-neutral-100 to-white z-10 relative pb-32">
      <motion.div
        initial={{ width: "70%", height: "auto" }}
        whileInView={{ width: "98%", height: "auto" }}
        viewport={{ amount: 0.01 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="bg-[#374151] rounded-3xl p-8 mx-auto overflow-hidden space-y-20"
      >
        <div className="space-y-2">
          <h2 className="text-4xl text-neutral-100 text-center font-bold tracking-wide">
            Nous sommes là pour vous.
          </h2>
          <p className="text-sm text-neutral-400 text-center tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex justify-around ">
          {dataAbout.map((item) => (
            <div key={item.id} className="w-[340px] ">
              <div className="flex justify-center">
                <Image
                  width={1000}
                  height={1000}
                  alt={`Image la section about de adrec : ${item.title}`}
                  src={item.imgSrc}
                  className=" object-contain w-60 h-52 relative"
                  style={{ top: item.id === 1 ? "10px" : "-5px" }}
                />
              </div>
              <h3 className="text-xl text-neutral-100 text-center mb-2 font-semibold">
                {item.title}
              </h3>
              <p className="text-neutral-400 text-center">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="w-full flex items-center justify-center">
          <Button variant="destructive">Demander un devis</Button>
        </div>
      </motion.div>
    </div>
  );
}
