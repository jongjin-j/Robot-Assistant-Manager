"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "./provider";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Gauge, Logs, User2, Bot } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { CustomSidebar } from "@/components/custom/CustomSidebar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const tags = Array.from({ length: 20 }).map((_, i, a) => `Robot ${i + 1}`);

const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Gauge,
  },
  {
    title: "Logs",
    url: "#",
    icon: Logs,
  },
  {
    title: "Account",
    url: "#",
    icon: User2,
  },
];

export default function Dashboard() {
  const { auth, setAuth } = useAuth()!;
  //<div class="grid grid-cols-3 gap-4"></div>
  return (
    <div className="flex">
      <CustomSidebar />
      <div className="ml-5 grid grid-cols-4 gap-4">
        <div>
          <ScrollArea className="h-72 w-full rounded-md border">
            <div className="p-4">
              <h4 className="mb-4 text-md leading-none text-muted-foreground font-bold">
                Robots (20)
              </h4>
              <Separator className="my-2" />
              {tags.map((tag) => (
                <div key={tag} className="flex flex-col">
                  <div className="text-sm">{tag}</div>
                  <Separator className="my-2" />
                </div>
              ))}
            </div>
          </ScrollArea>
          <ScrollArea className="h-72 w-full rounded-md border mt-10">
            <div className="p-4">
              <h4 className="mb-4 text-md font-bold leading-none text-muted-foreground">
                Error Report (20)
              </h4>
              <Separator className="mt-2" />
              <ul className="my-3 ml-2 list-disc [&>li]:mt-2">
                {tags.map((tag) => (
                  <li key={tag}>
                    <div className="text-sm">{tag}</div>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollArea>
        </div>
        <div className="col-span-3 ml-auto mr-0">
          <Select defaultValue="field_1">
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="field_1">Field 1</SelectItem>
              <SelectItem value="field_2">Field 2</SelectItem>
              <SelectItem value="field_3">Field 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
