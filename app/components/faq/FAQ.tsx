import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const dataFAQ = [
  {
    question: "Pourquoi faire appel à une agence de développement web ?",
    answer:
      "Travailler avec une agence comme Adrec est essentiel pour concevoir des outils numériques qui dynamisent votre activité. Que vous souhaitiez optimiser vos processus internes, enrichir l’expérience client ou lancer une plateforme innovante, notre expertise assure la création de solutions personnalisées et alignées avec vos objectifs stratégiques.",
  },
  {
    question:
      "Pourquoi votre application web doit-elle soutenir vos objectifs business ?",
    answer:
      "Une application web réalisée par Adrec va bien au-delà d’une simple solution technique ; elle est pensée pour s'intégrer dans votre écosystème. Elle vous aide à capturer de nouvelles opportunités marché et à améliorer l'efficacité opérationnelle, apportant une valeur continue pour vos clients et contribuant à la croissance de votre entreprise.",
  },
  {
    question: "Qu’est-ce qui rend l’approche d’Adrec unique ?",
    answer:
      "Chez Adrec, notre approche dépasse le développement de fonctionnalités. Nous identifions les besoins réels de vos utilisateurs pour créer des solutions qui enrichissent leur expérience et aident à atteindre vos objectifs business. Cette démarche centrée utilisateur nous différencie.",
  },
  {
    question: "Combien de temps faut-il pour développer une application web ?",
    answer:
      "Le temps de développement varie en fonction de la complexité et des fonctionnalités de l’application. En général, un projet peut prendre entre quelques semaines pour un MVP (produit minimum viable) et plusieurs mois pour des applications plus complexes. Adrec vous propose un planning réaliste et transparent dès le début du projet.",
  },
  {
    question: "Comment Adrec garantit-elle la qualité des projets livrés ?",
    answer:
      "La qualité est notre priorité chez Adrec. Nous suivons des normes strictes de test et de contrôle qualité, en intégrant des feedbacks clients tout au long du processus. Chaque application passe par des phases de test approfondies pour assurer une performance optimale, une sécurité renforcée et une expérience utilisateur irréprochable.",
  },
];

export default function FAQ() {
  return (
    <div className="w-2/3 mx-auto py-20 space-y-10">
      <h2 className="sm:text-4xl text-3xl font-bold tracking-wide space-y-1 text-center ">
        <span className="inline-block text-indigo-purple dark:text-indigo-light">
          Des questions ?
        </span>
        <br />
        <span className="bg-[#3F2A78] dark:bg-[#A0AEC0] p-3 inline-block rounded-lg -rotate-3 text-neutral-50 dark:text-black">
          La F.A.Q
        </span>
      </h2>
      <Accordion type="single" collapsible className="w-full space-y-5">
        {dataFAQ.map((item, index) => (
          <AccordionItem value={`item-${index + 1}`} key={index}>
            <AccordionTrigger className="text-xl text-indigo-purple dark:text-indigo-light">
              {item.question}
            </AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
