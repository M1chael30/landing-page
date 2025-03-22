import { CircleHelp } from "lucide-react";

const BodySection = () => {
 return (
  <section className="my-2">
   <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-wide transition-colors first:mt-0 flex items-center gap-1">
    Why We Built This <CircleHelp size={30} />
   </h2>
   <blockquote className="mt-6 border-l-2 pl-6 tracking-wide">
    We recognized the challenges schools face in managing academic records,
    student-teacher interactions, and administrative tasks. Our school portal is
    designed to simplify these processes, providing a centralized hub for all
    essential school activities.
   </blockquote>
  </section>
 );
};

export default BodySection;
