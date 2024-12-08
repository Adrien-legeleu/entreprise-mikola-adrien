import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const dataFAQ = [
  {
    question: "Pourquoi choisir une agence de développement web comme Adrec ?",
    answer:
      "Collaborer avec une agence de développement web spécialisée comme Adrec est un choix stratégique pour créer des solutions numériques sur mesure. Notre expertise vous aide à optimiser vos processus internes, enrichir l'expérience utilisateur, et lancer des plateformes innovantes qui correspondent parfaitement à vos objectifs commerciaux.",
  },
  {
    question:
      "Comment une application web peut-elle renforcer vos objectifs d'entreprise ?",
    answer:
      "Une application web développée par Adrec est bien plus qu'une solution technique. Elle s'intègre dans votre environnement commercial pour vous aider à saisir de nouvelles opportunités, améliorer vos processus internes, et générer de la valeur ajoutée pour vos clients et votre entreprise sur le long terme.",
  },
  {
    question:
      "En quoi l'approche d'Adrec se distingue-t-elle des autres agences ?",
    answer:
      "Chez Adrec, notre méthodologie va au-delà du simple développement de fonctionnalités techniques. Nous nous concentrons sur les besoins réels de vos utilisateurs afin de créer des solutions intuitives qui améliorent leur expérience et vous aident à atteindre vos objectifs commerciaux.",
  },
  {
    question:
      "Combien de temps faut-il pour développer une application web sur mesure ?",
    answer:
      "La durée du développement d'une application web varie en fonction de la complexité du projet et de ses fonctionnalités. En général, un MVP (produit minimum viable) peut être développé en quelques semaines, tandis que des projets plus avancés nécessitent plusieurs mois. Chez Adrec, nous vous fournissons un calendrier clair et réaliste dès le début de la collaboration.",
  },
  {
    question:
      "Comment Adrec assure-t-elle la qualité dans ses projets de développement web ?",
    answer:
      "La qualité est au cœur de chaque projet chez Adrec. Nous mettons en place des normes strictes de tests, des retours clients continus et une méthodologie éprouvée. Chaque application est soumise à des tests approfondis pour garantir sa performance, sa sécurité, et une expérience utilisateur sans faille.",
  },
];

export default function FAQ() {
  return (
    <div className="w-full max-w-[1500px] sm:px-20 430:px-10 px-6 mx-auto py-20 space-y-20">
      <h2 className="sm:text-4xl text-2xl font-bold tracking-wide space-y-1 text-center">
        <span className="inline-block text-indigo-purple dark:text-indigo-light">
          Vous avez des questions ?
        </span>
        <br />
        <span className="bg-[#3F2A78] dark:bg-[#A0AEC0] sm:text-4xl text-xl p-3 inline-block rounded-lg -rotate-3 text-neutral-50 dark:text-black">
          Notre Foire Aux Questions (FAQ)
        </span>
      </h2>
      <Accordion type="single" collapsible className="w-full space-y-10">
        {dataFAQ.map((item, index) => (
          <AccordionItem value={`item-${index + 1}`} key={index}>
            <AccordionTrigger className="md:text-2xl 430:text-xl text-lg font-bold text-indigo-purple dark:text-indigo-light">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="leading-tight md:text-base 430:text-sm text-xs pr-10 tracking-wider">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
