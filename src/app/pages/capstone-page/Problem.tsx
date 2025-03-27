import {
 Accordion,
 AccordionContent,
 AccordionItem,
 AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, CircleSmall } from "lucide-react";

const datas = [
 {
  key: "item-1",
  title: "Disorganized Academic Records",
  value:
   "Eliminating manual record-keeping by providing a structured and accessible database for students and faculty.",
 },
 {
  key: "item-2",
  title: "Inefficient Communication",
  value:
   "Bridging the gap between students, teachers, and administrators through real-time updates and messaging features.",
 },
 {
  key: "item-3",
  title: "Time-Consuming Administrative Tasks",
  value:
   "Automating scheduling, attendance tracking, and grading to reduce workload and improve efficiency.",
 },
 {
  key: "item-4",
  title: "Limited Accessibility",
  value:
   "Ensuring that users can access essential academic information anytime, anywhere, on any device.",
 },
 {
  key: "item-5",
  title: "Lack of Engagement",
  value:
   "Encouraging student participation through interactive features and timely updates.",
 },
];

const Problem = () => {
 return (
  <section className="my-7">
   <h2 className="scroll-m-20 border-b pb-2 text-3xl tracking-wide transition-colors first:mt-0 flex items-center gap-1">
    What Problems We Solved
   </h2>
   <Accordion type="single" collapsible className="">
    {datas.map((data) => {
     return (
      <AccordionItem key={data.key} value={data.key}>
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
