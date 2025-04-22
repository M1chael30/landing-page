import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { avatars } from "@/constants/project-data";
import { LinkIcon } from "lucide-react";
import { Link } from "react-router";

const OurTeamTitle = () => {
 return (
  <section className="my-5">
   <h1 className="scroll-m-20 text-4xl tracking-tight lg:text-5xl">Group 21</h1>
   <div className="flex gap-1 items-center my-5">
    {avatars.map((avatar, index) => {
     return (
      <Avatar
       className="border-2 dark:border-white border-gray-700"
       key={index}
      >
       <AvatarImage src={avatar.img} className="object-cover aspect-1/1" />
       <AvatarFallback>{avatar.nn}</AvatarFallback>
      </Avatar>
     );
    })}
   </div>
   <p className="leading-7 [&:not(:first-child)]:mt-4 text-justify">
    Welcome to our Capstone Project! We are a team of passionate developers—{" "}
    <strong>Michael, Mel Moses, Mark Robert, and Czianel</strong>—committed to
    revolutionizing the way students, teachers, and administrators interact
    within a school environment.
   </p>
   <p className="leading-7 tracking-wide [&:not(:first-child)]:mt-6 text-justify">
    Our project focuses on developing a{" "}
    <strong>comprehensive student portal</strong> that streamlines
    communication, enhances accessibility, and optimizes academic management.
    Our goal is to create a <strong>user-friendly</strong> and{" "}
    <strong>efficient</strong> platform that caters to the needs of students and
    faculty alike, ensuring a seamless educational experience.
   </p>
   <Button variant={"outline"} className="mt-4">
    <Link className="flex items-center gap-1" to={"/about-our-capstone"}>
     Explore Our Capstone
     <LinkIcon />
    </Link>
   </Button>
  </section>
 );
};

export default OurTeamTitle;
