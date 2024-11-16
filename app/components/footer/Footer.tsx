import { TextHoverEffect } from "@/components/aceternity/text-hover-effect";
import Image from "next/image";
import React from "react";
import Logo from "@/public/logo/logo.png";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="p-10">
      <div className="h-[40rem] flex items-center justify-center">
        <TextHoverEffect text="ADREC" />
      </div>
      <div className="grid grid-cols-40/60  gap-4 items-center justify-center">
        <div className="space-y-5 max-w-sm">
          <h2 className="flex items-center text-3xl gap-2  font-medium tracking-wider">
            <Image
              width={100}
              height={100}
              alt="logo de adrec"
              src={Logo}
              className="w-12 h-12"
            />
            Adrec
          </h2>
          <i className="text-lg text-muted-foreground inline-block">
            "Adrec, votre partenaire pour des solutions web sur-mesure et
            innovantes."
          </i>
        </div>
        <div className="grid grid-cols-3 text-sm">
          <ul>
            <Link href="#about">A propos</Link>
            <Link href="#projects">Nos projets</Link>
            <Link href="#contact">Contactez-nous</Link>
          </ul>
          <ul>
            <li>adrienlegeleu@gmail.com</li>
            <li>07 68 73 52 38</li>
          </ul>
          <ul>
            <li>© 2024 Adrec. Tous droits réservés.</li>
            <Link href="">mentions légales</Link>
            <Link href="">politique de confidentialité</Link>
          </ul>
        </div>
      </div>
    </div>
  );
}