import { Button } from "@/components/ui/button";
import { datas } from "@/constants/project-data";
import { SquareArrowOutUpRight } from "lucide-react";
import { Link } from "react-router";

const HomePageBody = () => {
 return (
  <section className="my-2 flex justify-center items-center gap-2 flex-col sm:flex-row">
   {datas.map((data, index) => {
    return (
     <Button key={index} variant={"outline"}>
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
