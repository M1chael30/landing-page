import { Bookmark } from "lucide-react";
import {
 SidebarGroup,
 SidebarGroupContent,
 SidebarGroupLabel,
 SidebarMenu,
 SidebarMenuButton,
 SidebarMenuItem,
} from "./ui/sidebar";
import { NavLink, useLocation } from "react-router";

export function OurCapstoneProject() {
 const location = useLocation();

 const ourTeams = [
  {
   title: "Capstone",
   url: "/about-our-capstone",
   icon: Bookmark,
  },
 ];

 return (
  <SidebarGroup>
   <SidebarGroupLabel>Capstone</SidebarGroupLabel>
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
