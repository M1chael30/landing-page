import {
 SidebarHeader,
 SidebarMenu,
 SidebarMenuButton,
 SidebarMenuItem,
} from "./ui/sidebar";
import { Link } from "react-router";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const SideBarHeader = () => {
 return (
  <SidebarHeader>
   <SidebarMenu>
    <SidebarMenuItem>
     <SidebarMenuButton size="lg" asChild>
      <Link to="/">
       <Avatar>
        <AvatarImage src="https://imgs.search.brave.com/-wRYfmc8MFTE9dYoFBioZSxfu45QaJyuKfJ3h68gZGM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtMy82/MDAvUmVhY3QuanNf/bG9nby01MTIucG5n" />
        <AvatarFallback>SN</AvatarFallback>
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
