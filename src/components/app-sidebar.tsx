import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { OurTeam } from "./our-team";
import { OurCapstoneProject } from "./about-capstone";
import SideBarHeader from "./sidebar-header";

export function AppSidebar() {
 return (
  <Sidebar collapsible="icon" variant="floating">
   <SideBarHeader />
   <SidebarContent>
    <OurTeam />
    <OurCapstoneProject />
   </SidebarContent>
  </Sidebar>
 );
}
