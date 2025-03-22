import { Bookmark } from "lucide-react";

const OurVision = () => {
 return (
  <>
   <section className="my-5">
    <h3 className="text-2xl font-semibold tracking-wide border-b flex items-center gap-1">
     Our Vision <Bookmark />
    </h3>
    <p className="leading-7 [&:not(:first-child)]:mt-3 tracking-wide text-justify">
     We believe that education should be{" "}
     <strong>accessible, organized, and engaging </strong>. Through our school
     portal, we aim to bridge gaps in communication and create an innovative
     digital learning environment.
    </p>
    <p className="[&:not(:first-child)]:mt-3 tracking-wide text-justify">
     Join us on this journey as we transform education through technology!
    </p>
   </section>
  </>
 );
};

export default OurVision;
