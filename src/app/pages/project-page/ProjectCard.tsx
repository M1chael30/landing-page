import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
 Card,
 CardContent,
 CardDescription,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { projectData } from "@/constants/project-data";

const ProjectCard = () => {
 return (
  <>
   <section className="my-2 grid auto-rows-min gap-4 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
    {projectData.map((data) => {
     return (
      <Card key={data.id}>
       <CardHeader className="flex items-center gap-2">
        <Avatar>
         <AvatarImage className="object-cover" src={data.img} />
         <AvatarFallback>{data.nn}</AvatarFallback>
        </Avatar>
        <div className="">
         <CardTitle>{data.projectName}</CardTitle>
         <CardDescription className="text-[10px]">
          Created by: {data.createdBy}
         </CardDescription>
        </div>
       </CardHeader>
       <CardContent>
        <ScrollArea className="h-80 ">
         {data.projectImg?.map((img) => (
          <div className="w-full my-3 aspect-6/3 rounded-xl overflow-hidden">
           <img src={img} alt="project image" className="w-full h-full" />
          </div>
         ))}
         <p className="text-sm tracking-wide my-2 text-justify">
          {data.description}
         </p>
         <ScrollBar orientation="horizontal" />
        </ScrollArea>
       </CardContent>
      </Card>
     );
    })}
   </section>
  </>
 );
};

export default ProjectCard;
