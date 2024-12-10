import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { dataFAQ } from "./dataFaq";

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
