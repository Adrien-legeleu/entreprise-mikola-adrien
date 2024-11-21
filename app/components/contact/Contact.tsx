"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-toastify";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    email: "",
    tel: "",
    text: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Votre message a été envoyé avec succès !");
        setFormData({
          name: "",
          last_name: "",
          email: "",
          tel: "",
          text: "",
        });
      } else {
        toast.error("Une erreur est survenue, veuillez réessayer.");
      }
    } catch (error) {
      toast.error("Erreur d'envoi : " + error);
    }
  };
  return (
    <div className="space-y-20 sm:p-20 py-20  max-w-[1500px] mx-auto 430:px-8 px-4">
      <h2 className="sm:text-4xl text-3xl font-bold tracking-wide space-y-1 text-center">
        <span className="inline-block text-indigo-purple dark:text-indigo-light">
          Vous êtes intéressées ?
        </span>
        <br />
        <span className="bg-[#3F2A78] dark:bg-[#A0AEC0] p-3 inline-block rounded-lg -rotate-3 text-neutral-50 dark:text-black">
          Contactez-nous !
        </span>
      </h2>
      <form onSubmit={handleSubmit} id="contact">
        <Card className="md:p-12 430:p-8 p-4 space-y-12">
          <CardContent>
            <div className="sm:grid sm:grid-cols-2 flex flex-col gap-5">
              <div>
                <Label htmlFor="name">Nom</Label>
                <Input
                  placeholder="Nom"
                  id="name"
                  name="name"
                  type="text"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="last_name">Prénom</Label>
                <Input
                  placeholder="Nom"
                  id="last_name"
                  name="last_name"
                  type="text"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  placeholder="Email"
                  id="email"
                  name="email"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="tel">Téléphone</Label>
                <Input
                  placeholder="Téléphone"
                  id="tel"
                  name="tel"
                  type="tel"
                  onChange={handleInputChange}
                />
              </div>
              <Textarea
                placeholder="Entrez votre message ici."
                className="min-h-60 col-span-2"
                name="text"
                id="text"
                onChange={handleInputChange}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-5">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit">Envoyer</Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
