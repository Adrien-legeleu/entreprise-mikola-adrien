import React from "react";
import DrawerDemo from "./DrawerModal";
import { projectsData } from "@/data/projects-data";

export default function Project() {
  return (
    <div
      className="space-y-12 relative py-20 w-full my-28 dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"
      id="projects"
    >
      <div className="absolute pointer-events-none -z-0 inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]" />
      <div className="flex flex-col gap-8 items-center justify-center w-full pb-10">
        <h2 className="sm:text-4xl text-2xl z-50 px-4 font-bold space-y-1 text-indigo-purple dark:text-indigo-light text-center">
          <span className="inline-block ">Découvrez nos</span>
          <span className="bg-[#3F2A78] dark:bg-[#A0AEC0] dark:text-black p-3 sm:text-4xl text-xl inline-block rounded-lg rotate-3 text-neutral-50">
            Projets réalisés
          </span>
        </h2>
        <p className="text-center text-lg px-8 max-w-4xl  leading-relaxed text-gray-700 dark:text-gray-300">
          Parcourez une sélection de projets innovants et créatifs réalisés dans
          divers domaines du développement web. Chaque projet représente une
          expérience unique en matière de technologie, d&lsquo;innovation, et de
          résolution de défis numériques.
        </p>
      </div>
      <ul className="grid xl:grid-cols-3 z-10 md:grid-cols-2 px-10 max-w-[1500px] mx-auto max-md:overflow-y-scroll max-md:h-screen items-center justify-center w-full gap-20">
        {projectsData.map((project, idx) => {
          return (
            <li
              key={`project numéro ${idx}`}
              className="w-full items-center justify-center flex"
            >
              <DrawerDemo project={project} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
