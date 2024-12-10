import { BackgroundBeamsWithCollision } from "@/components/aceternity/background-beams";
import { Button } from "@/components/ui/button";

export default function Landing() {
  return (
    <BackgroundBeamsWithCollision className="h-screen w-full flex items-center justify-center flex-col gap-6 max-sm:px-4 pt-20">
      <h1 className="text-center sm:text-5xl 430:text-3xl text-2xl font-bold tracking-wider max-w-3xl text-indigo-purple dark:text-indigo-light z-40">
        Démarquez-Vous avec Adrec
      </h1>

      <p className="sm:text-sm text-xs z-40 max-w-2xl px-2 text-center leading-relaxed tracking-wider text-muted-foreground">
        Adrec vous accompagne dans la création de sites web innovants et
        performants. Que ce soit un site vitrine ou un site e-commerce, nous
        vous aidons à établir une stratégie digitale efficace pour attirer vos
        clients et vous démarquer de la concurrence.
      </p>

      <div className="z-10 flex 430:flex-row gap-4 flex-col">
        <Button
          className="font-semibold text-md"
          onClick={() => console.log("Contact")}
        >
          Contactez-Nous
        </Button>
        <Button
          className="font-semibold text-md"
          variant="outline"
          onClick={() => console.log("Projets")}
        >
          Voir Nos Projets
        </Button>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
