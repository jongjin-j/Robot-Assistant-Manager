"use client";

import { useAuth } from "../provider";
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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const logs = [
  {
    time: "Dec 20, 2024 @ 20:00:00",
    message: "Example log",
  },
  {
    time: "Dec 20, 2024 @ 20:00:05",
    message: "Example log",
  },
  {
    time: "Dec 20, 2024 @ 20:00:10",
    message: "Example log",
  },
  {
    time: "Dec 20, 2024 @ 20:00:20",
    message: "Example log",
  },
  {
    time: "Dec 20, 2024 @ 20:00:30",
    message: "Example log",
  },
  {
    time: "Dec 20, 2024 @ 20:00:40",
    message: "Example log",
  },
  {
    time: "Dec 20, 2024 @ 20:00:50",
    message: "Example log",
  },
];

export default function Logs() {
  const { auth, setAuth } = useAuth()!;

  return (
    <div className="flex w-full">
      <CustomSidebar />
      <div className="flex flex-col w-full ml-5 mr-5">
        <div className="grid grid-cols-8 gap-1 mt-10">
          <Button disabled>Filters</Button>
          <div className="col-span-5">
            <Input placeholder="Search" />
          </div>
          <Select defaultValue="last_15">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last_15">Last 15 minutes</SelectItem>
              <SelectItem value="last_30">Last 30 minutes</SelectItem>
              <SelectItem value="last_hour">Last hour</SelectItem>
              <SelectItem value="last_day">Last 24 hours</SelectItem>
              <SelectItem value="last_week">Last 7 days</SelectItem>
            </SelectContent>
          </Select>
          <Button>Refresh</Button>
        </div>
        <div className="mt-2 mb-2">12 result(s)</div>
        <div>
          <Table>
            <TableCaption>A list of all the logs</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[30%]">Time</TableHead>
                <TableHead>Log</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {logs.map((log) => (
                <TableRow key={log.time}>
                  <TableCell className="font-medium">{log.time}</TableCell>
                  <TableCell>{log.message}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
