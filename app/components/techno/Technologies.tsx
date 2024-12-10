import MAquetteImg from "@/public/image/maquette-techno.png";

import Image from "next/image";
import DrawerDemoTechno from "./DrawerModal";
import { dataTechno } from "./technoData";

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
