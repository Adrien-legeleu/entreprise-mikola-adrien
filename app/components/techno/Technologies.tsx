import MAquetteImg from "@/public/image/maquette-techno.png";
import { IconBrandNextjs } from "@tabler/icons-react";
import Image from "next/image";

const dataTechno = [
  {
    title: "Next.js",
    desc: "SSR et SEO améliorés pour vos applications reacts",
    icon: <IconBrandNextjs />,
  },
  {
    title: "Nodejs",
    desc: "SSR et SEO améliorés pour vos applications reacts",
    icon: <IconBrandNextjs />,
  },
  {
    title: "Tailwind",
    desc: "SSR et SEO améliorés pour vos applications reacts",
    icon: <IconBrandNextjs />,
  },
  {
    title: "React",
    desc: "SSR et SEO améliorés pour vos applications reacts",
    icon: <IconBrandNextjs />,
  },
  {
    title: "MySql",
    desc: "SSR et SEO améliorés pour vos applications reacts",
    icon: <IconBrandNextjs />,
  },
  {
    title: "Typescript",
    desc: "SSR et SEO améliorés pour vos applications reacts",
    icon: <IconBrandNextjs className="w-full h-full" />,
  },
];

export default function Technologies() {
  return (
    <div className="h-screen w-full grid grid-cols-2 gap-32">
      <div className="space-y-10">
        <h2 className="sm:text-4xl text-3xl font-bold tracking-wide space-y-1 text-center">
          <span className="inline-block text-indigo-purple dark:text-indigo-light">
            Développement web
          </span>
          <br />
          <span className="bg-[#3F2A78] dark:bg-[#A0AEC0] p-3 inline-block rounded-lg -rotate-3 text-neutral-50 dark:text-black">
            nos spécialités
          </span>
        </h2>
        <Image
          src={MAquetteImg}
          width={1000}
          height={1000}
          alt="maquette image adrec"
          className="w-2/3 mx-auto"
        />
      </div>
      <ul className="space-y-5">
        {dataTechno.map((data, idx) => {
          return (
            <li key={idx} className="flex gap-4 items-center">
              <div className="rounded-lg p-2 w-12 h-12 bg-[#3741514d] flex items-center justify-center">
                <span>{data.icon}</span>
              </div>
              <div>
                <h4>{data.title}</h4>
                <p>{data.desc}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
