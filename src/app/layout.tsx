import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
 SidebarInset,
 SidebarProvider,
 SidebarTrigger,
} from "@/components/ui/sidebar";
import { Route, Routes } from "react-router";
import AboutOurTeam from "./pages/about-our-team";
import { ModeToggle } from "@/components/mode-toggle";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import { Toaster } from "sonner";
import CapstonePage from "./pages/CapstonePage";

export default function Page() {
 return (
  <>
   <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
     <header className="flex h-16 shrink-0 items-center gap-2 border-b">
      <div className="flex items-center gap-2 px-3">
       <SidebarTrigger />
       <Separator orientation="vertical" className="mr-2 h-4" />
       <ModeToggle />
      </div>
     </header>
     <div className="flex flex-1 flex-col gap-4 p-4">
      <Routes>
       <Route index path="/" element={<HomePage />} />
       <Route path="about-our-team" element={<AboutOurTeam />} />
       <Route path="our-projects" element={<ProjectPage />} />
       <Route path="about-our-capstone" element={<CapstonePage />} />
      </Routes>
     </div>
    </SidebarInset>
   </SidebarProvider>
   <Toaster />
  </>
 );
}
