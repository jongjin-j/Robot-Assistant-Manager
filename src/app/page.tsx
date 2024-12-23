"use client";

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
import { RobotPing } from "@/components/custom/RobotPing";
import { RobotsList } from "@/components/custom/RobotsList";
import { RobotStatus } from "@/lib/types";
import { ChartNoAxesColumnIncreasing } from "lucide-react";

const tags = Array.from({ length: 8 }).map(
  (_, i, a) =>
    `Robot_${i + 1} Robot_${i + 1} Robot_${i + 1} Robot_${i + 1} Robot_${
      i + 1
    } Robot_${i + 1} Robot_${i + 1}`
);

const robots = [
  {
    id: "1",
    name: "Robot_1",
    max_x: 600,
    max_y: 500,
    loc_x: 100,
    loc_y: 100,
    status: RobotStatus.IDLE,
    progress: 0,
  },
  {
    id: "2",
    name: "Robot_2",
    max_x: 600,
    max_y: 500,
    loc_x: 300,
    loc_y: 400,
    status: RobotStatus.IN_PROGRESS,
    progress: 60,
  },
  {
    id: "3",
    name: "Robot_3",
    max_x: 600,
    max_y: 500,
    loc_x: 200,
    loc_y: 300,
    status: RobotStatus.COMPLETED,
    progress: 100,
  },
  {
    id: "4",
    name: "Robot_4",
    max_x: 600,
    max_y: 500,
    loc_x: 500,
    loc_y: 30,
    status: RobotStatus.ERROR,
    progress: 60,
  },
];

export default function Dashboard() {
  const { auth, setAuth } = useAuth()!;

  return (
    <div className="flex w-full">
      <CustomSidebar />
      <div className="ml-5 grid grid-cols-4 gap-4 flex-grow mt-10">
        <div>
          <RobotsList robots={robots} />
          <ScrollArea className="h-72 w-full rounded-md border mt-10">
            <div className="p-4">
              <div className="flex justify-between">
                <h4 className="text-md font-bold leading-none text-muted-foreground mb-2">
                  Error Report (20)
                </h4>
                <ChartNoAxesColumnIncreasing className="cursor-pointer hover:bg-gray-100 rounded-md" />
              </div>
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
          {/* Robot Map */}
          <div className="mt-10 ml-auto mr-auto bg-black w-[80%] h-3/4 rounded-md">
            {robots.map((robot) => (
              <RobotPing robot={robot} key={robot.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
