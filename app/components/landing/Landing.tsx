import { BackgroundBeamsWithCollision } from "@/components/aceternity/background-beams";
import { Button } from "@/components/ui/button";

export default function Landing() {
  return (
    <BackgroundBeamsWithCollision className="h-screen w-full flex items-center justify-center flex-col gap-6  pt-20">
      <h1 className="text-center text-7xl font-bold tracking-wider max-w-3xl text-indigo-purple z-40">
        Demarquez vous avec Adrec
      </h1>
      <p className="text-sm z-40 max-w-md text-center leading-relaxed tracking-wider text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, rerum
        illum? Magni iusto vitae fugit aspernatur, quibusdam ipsum sapiente.
      </p>
      <div className="space-x-4 z-10">
        <Button className="font-semibold text-md">Nous contactez</Button>
        <Button className="font-semibold text-md" variant="outline">
          Nos projets
        </Button>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
