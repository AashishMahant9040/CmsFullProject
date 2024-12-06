'use client';
import { Home, ScrollText, UsersRound, Bell, Settings, ChevronRight, LucideProps, } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator"
import Link from "next/link";
import { ForwardRefExoticComponent, RefAttributes, useState } from "react";
import { IconType } from "recharts/types/component/DefaultLegendContent";




interface MenuItem {
  title: string; // Title of the menu item
  url?: string; // URL (optional for items with subMenu)
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>; // Icon component
  subMenu?: MenuItem[]; // Optional sub-menu items
}

// Menu items.
const items: MenuItem[] = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Post",
    icon: ScrollText,
    subMenu: [
      {
        title: "All Post",
        url: "/allPost",
        icon: Home,
      },
      {
        title: "New Post",
        url: "/newPost",
        icon: Home,
      },
    ]
  },
  {
    title: "User",
    url: "/user",
    icon: UsersRound,
  },
  {
    title: "Admin",
    url: "/admin",
    icon: UsersRound,
  },
  {
    title: "Notification",
    url: "/notification",
    icon: Bell,
  },
  {
    title: "Settings",
    url: "/setting",
    icon: Settings,
  },
];

export function AppSidebar() {

  const router = useRouter();

  const [postSubMenu, setPostSubMenu] = useState(false);

  return (
    <Sidebar className="border-gray-800">
      <SidebarContent className="bg-[#06040B] text-gray-200">
        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="h-16 -my-[0.5px] ml-2 text-3xl text-gray-200">CMS</SidebarGroupLabel>
          <Separator className="bg-gray-800" />
          <SidebarGroupContent className="p-2">
            <SidebarMenu>
              {items.map((item, index) => (
                <div key={index}>
                  {
                    item.title == "Post" ?
                      <div>

                        <Collapsible className="group/collapsible">
                          <SidebarMenuItem>

                            <CollapsibleTrigger onClick={() => setPostSubMenu(!postSubMenu)} asChild className="cursor-pointer hover:bg-white rounded-lg hover:text-black">
                              <div className="w-full p-2 py-3 flex flex-row justify-between items-center">
                                <span className="flex flex-row items-center gap-2">
                                  <item.icon className="w-4 h-4" />
                                  <span className="text-base">{item.title}</span>
                                </span>

                                <ChevronRight className={`w-4 h-4 duration-300 ${postSubMenu ? "rotate-[450deg]" : ""}`} />
                              </div>
                            </CollapsibleTrigger>

                            <CollapsibleContent>
                              {
                                item.subMenu?.map((subMenu, index) => (
                                  <SidebarMenuSub key={index} onClick={(e) => { e.preventDefault(); router.push(subMenu.url!) }}>
                                    <SidebarMenuSubItem className="my-1 p-2 rounded-lg hover:bg-white hover:text-black cursor-pointer">
                                      <span className="text-sm">{subMenu.title}</span>
                                    </SidebarMenuSubItem>
                                  </SidebarMenuSub>
                                ))
                              }
                            </CollapsibleContent>

                          </SidebarMenuItem>
                        </Collapsible>

                      </div>

                      : <div>
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton asChild onClick={(e) => { e.preventDefault(); router.push(item.url!) }} className="py-6 cursor-pointer text-base">
                            <div>
                              <item.icon />
                              <span>{item.title}</span>
                            </div>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </div>
                  }
                </div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
