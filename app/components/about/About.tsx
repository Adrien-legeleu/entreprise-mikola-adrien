"use client";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Logo from "@/public/logo/logo.png";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="bg-gradient-to-b from-neutral-100 to-white z-10 relative pb-32">
      <motion.div
        initial={{ width: "40%", height: "60%" }}
        whileInView={{ width: "95%", height: "auto" }}
        viewport={{ amount: 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="space-y-20 bg-[#374151] rounded-3xl p-12  mx-auto "
      >
        <div className="space-y-2">
          <h2 className=" text-4xl text-neutral-100 text-center font-bold tracking-wide">
            Nous somme la pour vous.
          </h2>
          <p className="text-sm text-neutral-400 text-center tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="justify-between flex">
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <Image
                  width={100}
                  height={100}
                  alt="logo de adrec"
                  src={Logo}
                />
              </div>
            </CardContent>
          </Card>
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur vero totam dignissimos harum obcaecati odit labore
                laborum ut nobis facilis?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>
          <Card className="flex-1">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>
        </div>
        <div className="w-full flex items-center justify-center">
          <Button variant="destructive">Demander un devis</Button>
        </div>
      </motion.div>
    </div>
  );
}
