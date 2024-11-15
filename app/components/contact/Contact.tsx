import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import React from "react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="space-y-20 p-20">
      <h2 className="sm:text-4xl text-3xl font-bold tracking-wide space-y-1 text-center">
        <span className="inline-block text-indigo-purple dark:text-indigo-light">
          Vous êtes intéressées ?
        </span>
        <br />
        <span className="bg-[#3F2A78] dark:bg-[#A0AEC0] p-3 inline-block rounded-lg -rotate-3 text-neutral-50 dark:text-black">
          Contactez-nous !
        </span>
      </h2>
      <Card>
        <CardContent>
          <div className="grid grid-cols-2 gap-10">
            <div>
              <Label htmlFor="name">Nom</Label>
              <Input placeholder="Nom" id="name" name="name" type="text" />
            </div>
            <div>
              <Label htmlFor="last-name">Prénom</Label>
              <Input
                placeholder="Nom"
                id="last-name"
                name="last-name"
                type="text"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input placeholder="Email" id="email" name="email" />
            </div>
            <div>
              <Label htmlFor="tel">Téléphone</Label>
              <Input placeholder="Téléphone" id="tel" name="tel" type="tel" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit">Envooyer</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
