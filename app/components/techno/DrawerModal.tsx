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
import { IconArrowRight } from "@tabler/icons-react";

export interface DrawerProps {
  techno: {
    title: string;
    desc: string;
    descModal: string;
    icon: JSX.Element | undefined;
  };
  idx: number;
}

export default function DrawerDemoTechno({ techno, idx }: DrawerProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <li
          key={idx}
          className="flex gap-4 relative items-center p-4 rounded-lg  hover:bg-blue-50 duration-300 ease-in-out group cursor-pointer"
        >
          <div className="rounded-lg p-2 w-12 h-12 bg-blue-200  dark:bg-[#1E293B5e] flex items-center justify-center">
            <span>{techno.icon}</span>
          </div>
          <div className="space-y-1 ">
            <h4 className="text-indigo-purple dark:text-indigo-light text-lg font-semibold">
              {techno.title}
            </h4>
            <p className="text-sm">{techno.desc}</p>
          </div>
          <div className="group-hover:top-1/2 absolute right-4  -translate-y-1/2 group-hover:opacity-100 top-full opacity-0  flex items-center justify-end duration-300 ease-in-out">
            <IconArrowRight className="text-indigo-purple dark:text-indigo-light" />
          </div>
        </li>
      </DrawerTrigger>
      <DrawerContent>
        <div className=" w-full overflow-y-auto py-5">
          <div className=" max-w-lg mx-auto space-y-8">
            <DrawerHeader className="flex">
              <div>
                <DrawerTitle className="text-3xl font-bold">
                  {techno.title}
                </DrawerTitle>
                <DrawerDescription className="text-lg">
                  {techno.desc}
                </DrawerDescription>
              </div>
              <div className="w-16 h-16 ">{techno.icon}</div>
            </DrawerHeader>
            <div className="p-4 pb-0 space-y-8">
              <p className="text-neutral-800 dark:text-neutral-300 leading-relaxed tracking-wide">
                {techno.descModal}
              </p>
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="secondary">fermer</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
