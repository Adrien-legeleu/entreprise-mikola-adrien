import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { IconPinInvoke } from "@tabler/icons-react";

export interface DrawerProps {
  project: {
    img: string | StaticImageData;
    title: string;
    link: string;
    languages: string[];
    description: string;
    video: string;
    color: string;
    badge: JSX.Element | undefined;
  };
}

export default function DrawerDemo({ project }: DrawerProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div
          className="group h-[160px] 430:h-[200px] aspect-video relative rounded-3xl cursor-pointer shadow-xl dark:shadow-2xl shadow-black/30 dark:shadow-neutral-100/15"
          style={{ backgroundColor: project.color }}
        >
          <div className="absolute top-2 right-2 z-50 flex items-center justify-center">
            {project.badge}
          </div>
          <Image
            src={project.img}
            alt={`capture d'écran du projet ${project.title}`}
            width={400}
            height={400}
            className="w-full h-full object-cover rounded-3xl duration-300 group-hover:opacity-0 absolute top-0 left-0"
          />
          <video
            src={project.video}
            autoPlay
            loop
            muted
            className="group-hover:opacity-100 rounded-3xl opacity-0 duration-500 ease-out w-full h-full object-contain"
          />
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="w-full overflow-y-auto py-5">
          <div className="max-w-lg mx-auto space-y-8">
            <DrawerHeader>
              <DrawerTitle className="text-3xl font-bold">
                {project.title}
              </DrawerTitle>
              <DrawerDescription className="text-lg">
                Découvrez les détails de {project.title} et explorez ses
                fonctionnalités clés et sa technologie de pointe.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0 space-y-8">
              <Link href={project.link} target="_blank">
                <Image
                  src={project.img}
                  alt={`capture de ${project.title}`}
                  width={400}
                  height={400}
                  className="w-full rounded-3xl cursor-pointer shadow-xl dark:shadow-2xl shadow-black/30 dark:shadow-neutral-100/20"
                />
              </Link>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold">
                  Technologies utilisées
                </h4>
                <div className="flex gap-4 items-center">
                  {project.languages.map((lang, idx) => (
                    <div
                      key={`techno-${idx}`}
                      className="px-4 py-2 rounded-xl dark:text-black flex items-center justify-center gap-2 bg-indigo-100 dark:bg-indigo-200 border border-indigo-600"
                    >
                      <span>{lang}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <DrawerFooter>
              <Link href={project.link} target="_blank" className="w-full">
                <Button className="w-full">
                  <IconPinInvoke className="h-6 w-6" /> Accéder au site
                </Button>
              </Link>
              <DrawerClose asChild>
                <Button variant="secondary">Fermer</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
