import { subTitle, Title } from "@/constants/project-data";

const HomePageTitle = () => {
 return (
  <section className="my-2">
   <h1 className="scroll-m-20 text-center text-2xl tracking-tight lg:text-5xl">
    {Title}
   </h1>
   <p className="leading-7 [&:not(:first-child)]:mt-6 text-center">
    {subTitle}
   </p>
  </section>
 );
};

export default HomePageTitle;
