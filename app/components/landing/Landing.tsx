import { BackgroundBeamsWithCollision } from "@/components/aceternity/background-beams";
import { Button } from "@/components/ui/button";

export default function Landing() {
  return (
    <BackgroundBeamsWithCollision className="h-screen w-full flex items-center justify-center flex-col gap-6 max-sm:px-4  pt-20">
      <h1 className="text-center sm:text-7xl 430:text-6xl text-5xl font-bold tracking-wider max-w-3xl text-indigo-purple dark:text-indigo-light z-40 ">
        Demarquez vous avec Adrec
      </h1>
      <p className="text-sm z-40 max-w-md text-center leading-relaxed tracking-wider text-muted-foreground">
        Chez Adrec, nous optimisons votre présence en ligne pour attirer plus de
        clients. Grâce à des stratégies SEO sur mesure, nous boostons votre
        visibilité et vous aidons à dominer votre marché.
      </p>
      <div className="z-10 flex 430:flex-row gap-4 flex-col">
        <Button className="font-semibold text-md">Nous contactez</Button>
        <Button className="font-semibold text-md" variant="outline">
          Nos projets
        </Button>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
