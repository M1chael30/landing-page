import {
 SidebarHeader,
 SidebarMenu,
 SidebarMenuButton,
 SidebarMenuItem,
} from "./ui/sidebar";
import { Link } from "react-router";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { School } from "lucide-react";

const SideBarHeader = () => {
 return (
  <SidebarHeader>
   <SidebarMenu>
    <SidebarMenuItem>
     <SidebarMenuButton size="lg" asChild>
      <Link to="/">
       <Avatar>
        <AvatarFallback>
         <School />
        </AvatarFallback>
       </Avatar>
       <div className="flex flex-col gap-0.5 leading-none">
        <span className="font-semibold text-lg">SNHS</span>
        <span className="text-[10px]">mmmc.dev</span>
       </div>
      </Link>
     </SidebarMenuButton>
    </SidebarMenuItem>
   </SidebarMenu>
  </SidebarHeader>
 );
};

export default SideBarHeader;
