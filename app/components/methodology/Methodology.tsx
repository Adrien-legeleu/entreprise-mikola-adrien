"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import { dataMethods } from "./dataMethod";

gsap.registerPlugin(ScrollTrigger);

interface MethodPageProps {
  handleDivMouse: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  handleIsMouseNotVisible: () => void;
  handleIsMouseVisible: () => void;
}

export default function Methodology({
  handleIsMouseNotVisible,
  handleIsMouseVisible,
  handleDivMouse,
}: MethodPageProps) {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, i) => {
      gsap.fromTo(
        section,
        { width: "92%" },
        {
          width: "100%",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 60%",
            scrub: 1,
            id: `section-${i + 1}`,
          },
        }
      );
    });
  }, []);

  return (
    <div id="method" className="max-w-[1500px] mx-auto">
      <h2 className="sm:text-4xl text-2xl font-bold tracking-wide space-y-1 text-center px-4">
        <span className="inline-block text-indigo-purple dark:text-indigo-light">
          Notre méthodologie
        </span>
        <br />
        <span className="bg-[#3F2A78] dark:bg-[#A0AEC0] p-3 inline-block text-center rounded-lg sm:text-4xl text-xl -rotate-3 text-neutral-50 dark:text-black">
          au service de votre succès
        </span>
      </h2>

      <div
        className="flex flex-col justify-center items-center mt-16 gap-2 px-2"
        onMouseEnter={handleIsMouseVisible}
        onMouseLeave={handleIsMouseNotVisible}
        onMouseMove={handleDivMouse}
      >
        {dataMethods.map((method, index) => (
          <div
            key={`methodologie-de-adrec-${method.id}`}
            ref={(el) => {
              if (el) sectionsRef.current[index] = el;
            }}
            className="relative w-full md:px-24 430:px-16 px-8 py-16 rounded-3xl bg-[#151D53] dark:bg-[#1E293B] md:grid md:grid-cols-2 flex-col-reverse flex lg:gap-28 md:gap-20 gap-5"
          >
            <div
              className={`relative space-y-2 ${
                method.id % 2 === 0 ? "col-start-2 row-start-1" : ""
              }`}
            >
              <div className="p-3 w-3 h-3 -left-12 top-2 absolute bg-[#2E3A6D] dark:bg-[#4B5563] max-430:hidden flex items-center justify-center brightness-150 border border-neutral-50/10 shadow-inner shadow-white/12 rounded-full">
                <div className="bg-white dark:bg-[#E5E7EB] p-[2px] rounded-full" />
              </div>
              <span className="px-3 py-1 capitalize tracking-wide text-xs rounded-full bg-[#2E3A6D] dark:bg-[#4B5563] text-neutral-100 dark:text-[#F3F4F6]">
                Étape {method.id}
              </span>
              <h4 className="text-white dark:text-[#E5E7EB] lg:text-3xl text-2xl font-medium tracking-wide">
                {method.title}
              </h4>
              <p className="lg:max-w-md lg:text-base text-sm text-neutral-200 dark:text-[#D1D5DB] leading-relaxed">
                {method.description}
              </p>
              <Button variant="outline">
                En savoir plus <IconArrowRight />
              </Button>
            </div>

            <div
              className={`p-3 rounded-xl bg-[#1A2358] dark:bg-[#374151] ${
                method.id % 2 === 0 ? "col-start-1 row-start-1" : ""
              }`}
            >
              <Image
                src={method.img}
                alt={`Illustration pour la méthodologie étape ${method.id}`}
                width={500}
                height={500}
                className="w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
