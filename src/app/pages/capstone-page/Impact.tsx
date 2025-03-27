import { Book } from "lucide-react";

function Impact() {
 return (
  <>
   <section className="my-5">
    <h3 className="text-3xl tracking-wide border-b flex items-center gap-1">
     Impact on Education
     <Book />
    </h3>
    <p className="leading-7 [&:not(:first-child)]:mt-3 tracking-wide text-justify">
     By integrating technology into education, our capstone project aims to
     enhance learning experiences, promote better organization, and empower
     students and educators with the tools they need for success.
    </p>
   </section>
  </>
 );
}

export default Impact;
