import React from "react";
import DrawerDemo from "./DrawerModal";
import { projectsData } from "@/data/projects-data";
import DotPattern from "@/components/ui/dot-pattern";

export default function Project() {
  return (
    <div
      className="space-y-12 relative py-20 w-full my-28 dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"
      id="projects"
    >
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <h2 className="text-4xl z-10 px-10 font-bold space-x-2 dark:text-indigo-light text-center text-indigo-purple">
        <span className="inline-block">Tous nos</span>
        <span className="bg-[#3F2A78] dark:bg-[#A0AEC0] dark:text-black p-3 inline-block rounded-lg rotate-6 text-neutral-50">
          Projet
        </span>
      </h2>
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
