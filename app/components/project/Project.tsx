import React from "react";
import DrawerDemo from "./DrawerModal";
import { projectsData } from "@/data/projects-data";

export default function Project() {
  return (
    <div className="space-y-12 w-full px-10 py-28 max-w-[1400px] mx-auto">
      <h2 className="text-4xl font-bold space-x-2  text-center text-indigo-purple">
        <span className="inline-block">Tous nos</span>
        <span className="bg-[#3F2A78] p-3 inline-block rounded-lg rotate-6 text-neutral-50">
          Projet
        </span>
      </h2>
      <ul className="grid xl:grid-cols-3 md:grid-cols-2  items-center justify-center w-full gap-20">
        {projectsData.map((project, idx) => {
          return (
            <li
              key={`project numéro ${idx}`}
              className="w-full items-center justify-center flex "
            >
              <DrawerDemo project={project} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
