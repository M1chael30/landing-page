import {
 Accordion,
 AccordionContent,
 AccordionItem,
 AccordionTrigger,
} from "@/components/ui/accordion";
import { problemsSolved } from "@/constants/project-data";
import { Check, CircleSmall } from "lucide-react";

const Problem = () => {
 return (
  <section className="my-7">
   <h2 className="scroll-m-20 border-b pb-2 text-3xl tracking-wide transition-colors first:mt-0 flex items-center gap-1">
    What Problems We Solved
   </h2>
   {/* accordion */}
   <Accordion type="single" collapsible className="">
    {problemsSolved.map((data, index  ) => {
     return (
      <AccordionItem key={index} value={data.key}>
       <AccordionTrigger>
        <div className="text-base font-normal flex items-center gap-1">
         <CircleSmall size={20} />
         {data.title}
        </div>
       </AccordionTrigger>
       <AccordionContent className="font-light flex items-center gap-1">
        <Check size={20} color="#006400" />
        {data.value}
       </AccordionContent>
      </AccordionItem>
     );
    })}
   </Accordion>
  </section>
 );
};

export default Problem;
