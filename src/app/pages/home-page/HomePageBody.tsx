import { Button } from "@/components/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";
import { Link } from "react-router";

const HomePageBody = () => {
 const datas = [
  {
   title: "About us",
   description:
    "Discover how our journey began, our goals, and our commitment to transforming education through technology.",
   path: "about-our-team",
  },
  {
   title: "Projects",
   description:
    "Discover how our journey began, our goals, and our commitment to transforming education through technology.",
   path: "our-projects",
  },
  {
   title: "Capstone",
   description:
    "Discover how our journey began, our goals, and our commitment to transforming education through technology.",
   path: "about-our-capstone",
  },
 ];

 return (
  <section className="my-2 flex justify-center items-center gap-2">
   {datas.map((data) => {
    return (
     <Button variant={"outline"}>
      <Link to={data.path}>
       <h3 className="text-base font-semibold tracking-wide flex items-center gap-1.5">
        {data.title} <SquareArrowOutUpRight size={15} />
       </h3>
      </Link>
     </Button>
    );
   })}
  </section>
 );
};

export default HomePageBody;
