import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
 Card,
 CardContent,
 CardDescription,
 CardFooter,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { DownloadIcon, Mountain } from "lucide-react";
import { toast } from "sonner";

const ProjectCard = () => {
 const projectData = [
  {
   id: 1,
   projectName: "Note App",
   createdBy: "Michael",
   img: "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100216.jpg?ga=GA1.1.535425154.1742624681&semt=ais_hybrid",
   nn: "MJ",
   description: `A MERN Stack note-taking app designed for seamless
       organization, real-time sync, and secure storage, ensuring a smooth user
       experience. 🚀`,
   label: "MERN",
  },
  {
   id: 2,
   projectName: "Wala pa",
   createdBy: "Mel Moses",
   img: "https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151033973.jpg?ga=GA1.1.535425154.1742624681&semt=ais_hybrid",
   nn: "MM",
   description: `Wala pa`,
   label: "Wala pa din",
  },
  {
   id: 3,
   projectName: "Wala pa",
   createdBy: "Mark Robert",
   img: "https://img.freepik.com/premium-photo/photorealistic-eye-catching-hyper-realistic-best-quality-image-white-background-generated-by-pikaso_643360-505121.jpg?ga=GA1.1.535425154.1742624681&semt=ais_hybrid",
   nn: "MR",
   description: `Wala pa`,
   label: "Wala pa din",
  },
  {
   id: 4,
   projectName: "Wala pa",
   createdBy: "Czianel",
   img: "https://img.freepik.com/premium-photo/journalist-digital-avatar-generative-ai_934475-9380.jpg?ga=GA1.1.535425154.1742624681&semt=ais_hybrid",
   nn: "CZ",
   description: `Wala pa`,
   label: "Wala pa din",
  },
 ];

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
        <div className="w-full my-3 relative">
         <Badge className="absolute top-4 right-4">{data.label}</Badge>
         <Skeleton className="aspect-6/3 rounded-xl bg-muted/50 flex items-center justify-center">
          <Mountain size={30} />
         </Skeleton>
        </div>
        <p className="text-sm tracking-wide my-2 text-justify">
         {data.description}
        </p>
       </CardContent>
      </Card>
     );
    })}
   </section>
  </>
 );
};

export default ProjectCard;
