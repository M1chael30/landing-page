import HomePageBody from "./home-page/HomePageBody";
import HomePageTitle from "./home-page/HomePageTitle";

const HomePage = () => {
 return (
  <main className="flex items-center justify-center flex-col h-full">
   <HomePageTitle />
   <HomePageBody />
  </main>
 );
};

export default HomePage;
