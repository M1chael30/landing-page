import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LinkIcon } from "lucide-react";
import { Link } from "react-router";

const OurTeamTitle = () => {
 const avatars = [
  {
   id: 1,
   img: "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100216.jpg?ga=GA1.1.535425154.1742624681&semt=ais_hybrid",
   nn: "MJ",
  },
  {
   id: 2,
   img: "https://img.freepik.com/free-photo/3d-cartoon-style-character_23-2151033973.jpg?ga=GA1.1.535425154.1742624681&semt=ais_hybrid",
   nn: "MM",
  },
  {
   id: 3,
   img: "https://img.freepik.com/premium-photo/photorealistic-eye-catching-hyper-realistic-best-quality-image-white-background-generated-by-pikaso_643360-505121.jpg?ga=GA1.1.535425154.1742624681&semt=ais_hybrid",
   nn: "MR",
  },
  {
   id: 4,
   img: "https://img.freepik.com/premium-photo/journalist-digital-avatar-generative-ai_934475-9380.jpg?ga=GA1.1.535425154.1742624681&semt=ais_hybrid",
   nn: "CZ",
  },
 ];

 return (
  <section className="my-5">
   <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
    Group 21
   </h1>
   <div className="flex gap-1 items-center my-5">
    {avatars.map((avatar) => {
     return (
      <Avatar
       className="border-2 dark:border-white border-gray-700"
       key={avatar.id}
      >
       <AvatarImage src={avatar.img} className="object-cover aspect-1/1" />
       <AvatarFallback>{avatar.nn}</AvatarFallback>
      </Avatar>
     );
    })}
   </div>
   <p className="leading-7 [&:not(:first-child)]:mt-4">
    Welcome to our Capstone Project! We are a team of passionate developers—{" "}
    <strong>Michael, Mel Moses, Mark Robert, and Czianel</strong>—committed to
    revolutionizing the way students, teachers, and administrators interact
    within a school environment.
   </p>
   <p className="leading-7 tracking-wide [&:not(:first-child)]:mt-6">
    Our project focuses on developing a{" "}
    <strong>comprehensive school portal</strong> that streamlines communication,
    enhances accessibility, and optimizes academic management. Our goal is to
    create a <strong>user-friendly</strong> and <strong>efficient</strong>{" "}
    platform that caters to the needs of students and faculty alike, ensuring a
    seamless educational experience.
   </p>
   <Button variant={"outline"} className="mt-4">
    <Link className="flex items-center gap-1" to={"/our-projects"}>
     Explore Our Projects
     <LinkIcon />
    </Link>
   </Button>
  </section>
 );
};

export default OurTeamTitle;
