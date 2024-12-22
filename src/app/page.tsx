"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "./provider";
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

const tags = Array.from({ length: 8 }).map((_, i, a) => `Robot_${i + 1}`);

export default function Dashboard() {
  const { auth, setAuth } = useAuth()!;

  return (
    <div className="flex w-full">
      <CustomSidebar />
      <div className="ml-5 grid grid-cols-4 gap-4 flex-grow mt-10">
        <div>
          <ScrollArea className="h-72 w-full rounded-md border">
            <div className="p-4">
              <h4 className="mb-4 text-md leading-none text-muted-foreground font-bold">
                Robots (8)
              </h4>
              <Separator className="my-2" />
              {tags.map((tag) => (
                <Button variant="outline" className="w-full mt-2">
                  <div
                    key={tag}
                    className="flex flex-col ml-0 mr-auto"
                    onClick={() => console.log("hi")}
                  >
                    <div className="text-sm">► &nbsp; &nbsp; &nbsp;{tag}</div>
                  </div>
                </Button>
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
        <div className="col-span-3 flex flex-col">
          <div className="ml-auto mr-0 mt-5">
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
          <div className="mt-10 ml-auto mr-auto bg-black w-[80%] h-3/4 rounded-md">
            <div className="relative flex flex-col h-5 w-20 top-[50%] left-[6%]">
              <span className="text-white text-sm mb-1 ml-auto mr-auto">
                Robot_1
              </span>
              <span className="flex h-5 w-5 ml-auto mr-auto">
                <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-white"></span>
              </span>
            </div>
            <div className="relative flex flex-col h-5 w-20 top-[80%] left-[6%]">
              <span className="text-white text-sm mb-1 ml-auto mr-auto">
                Robot_2
              </span>
              <span className="flex h-5 w-5 ml-auto mr-auto">
                <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-white"></span>
              </span>
            </div>
            <div className="relative flex flex-col h-5 w-20 top-[50%] left-[60%]">
              <span className="text-white text-sm mb-1 ml-auto mr-auto">
                Robot_3
              </span>
              <span className="flex h-5 w-5 ml-auto mr-auto">
                <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-white"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
