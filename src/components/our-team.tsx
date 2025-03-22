import { GalleryVerticalEnd, OctagonAlert } from "lucide-react";
import {
 SidebarGroup,
 SidebarGroupContent,
 SidebarGroupLabel,
 SidebarMenu,
 SidebarMenuButton,
 SidebarMenuItem,
} from "./ui/sidebar";
import { NavLink, useLocation } from "react-router";

export function OurTeam() {
 const location = useLocation();

 const ourTeams = [
  {
   title: "About us",
   url: "/about-our-team",
   icon: OctagonAlert,
  },
  {
   title: "Projects",
   url: "/our-projects",
   icon: GalleryVerticalEnd,
  },
 ];

 return (
  <SidebarGroup>
   <SidebarGroupLabel>Our Team</SidebarGroupLabel>
   <SidebarGroupContent>
    <SidebarMenu>
     {ourTeams.map((item) => {
      const isActive = location.pathname === item.url;
      return (
       <SidebarMenuItem key={item.title}>
        <SidebarMenuButton asChild isActive={isActive}>
         <NavLink
          to={item.url}
          className={({ isActive }) => (isActive ? "" : "")}
         >
          <item.icon />
          <span>{item.title}</span>
         </NavLink>
        </SidebarMenuButton>
       </SidebarMenuItem>
      );
     })}
    </SidebarMenu>
   </SidebarGroupContent>
  </SidebarGroup>
 );
}
