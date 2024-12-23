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
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

const logs = [
  {
    time: "Dec 20, 2024 @ 20:00:00",
    message: "Example log",
  },
  {
    time: "Dec 20, 2024 @ 20:00:05",
    message: "Example logs",
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
    message: "Example logs",
  },
  {
    time: "Dec 20, 2024 @ 20:00:50",
    message: "Example logs",
  },
  {
    time: "Dec 21, 2024 @ 20:00:00",
    message: "Example logs",
  },
  {
    time: "Dec 21, 2024 @ 20:00:05",
    message: "Example log",
  },
  {
    time: "Dec 21, 2024 @ 20:00:10",
    message: "Example log",
  },
  {
    time: "Dec 21, 2024 @ 20:00:20",
    message: "Example logs",
  },
  {
    time: "Dec 21, 2024 @ 20:00:30",
    message: "Example logs",
  },
  {
    time: "Dec 21, 2024 @ 20:00:40",
    message: "Example logs",
  },
  {
    time: "Dec 21, 2024 @ 20:00:50",
    message: "Example log",
  },
  {
    time: "Dec 22, 2024 @ 20:00:00",
    message: "Example logs",
  },
  {
    time: "Dec 22, 2024 @ 20:00:05",
    message: "Example logs",
  },
  {
    time: "Dec 22, 2024 @ 20:00:10",
    message: "Example logs",
  },
  {
    time: "Dec 22, 2024 @ 20:00:20",
    message: "Example log",
  },
  {
    time: "Dec 22, 2024 @ 20:00:30",
    message: "Example logs",
  },
  {
    time: "Dec 22, 2024 @ 20:00:40",
    message: "Example logs",
  },
  {
    time: "Dec 22, 2024 @ 20:00:50",
    message: "Example logs",
  },
];

export default function Logs() {
  const { auth, setAuth } = useAuth()!;

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredLogs, setFilteredLogs] = useState(logs);
  const [currentPage, setCurrentPage] = useState(1);
  const [timeFilter, setTimeFilter] = useState("last_week");

  const logsPerPage = 15;

  const parseLogTime = (logTime: string) => {
    const [month, day, year, time] = logTime.replace("@", "").split(/[, ]+/);

    return new Date(`${month} ${day}, ${year} ${time}`);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);
    filterLogs(searchValue, timeFilter);
  };

  const handleTimeFilterChange = (value: string) => {
    setTimeFilter(value);
    filterLogs(searchTerm, value);
  };

  const filterLogs = (searchTerm: string, timeFilter: string) => {
    const now = Date.now();
    const filteredByTime = logs.filter((log) => {
      const logTimestamp = parseLogTime(log.time);
      let timeLimit;

      switch (timeFilter) {
        case "last_15":
          timeLimit = now - 15 * 60 * 1000;
          break;
        case "last_30":
          timeLimit = now - 30 * 60 * 1000;
          break;
        case "last_hour":
          timeLimit = now - 60 * 60 * 1000;
          break;
        case "last_day":
          timeLimit = now - 24 * 60 * 60 * 1000;
          break;
        case "last_week":
          timeLimit = now - 7 * 24 * 60 * 60 * 1000;
          break;
        default:
          timeLimit = 0;
      }
      return new Date(logTimestamp).getTime() >= timeLimit;
    });

    const finalFilteredLogs = filteredByTime.filter(
      (log) =>
        log.time.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.message.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredLogs(finalFilteredLogs);
    setCurrentPage(1);
  };

  const lastLogIndex = currentPage * logsPerPage;
  const firstLogIndex = lastLogIndex - logsPerPage;
  const currentLogs = filteredLogs.slice(firstLogIndex, lastLogIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(filteredLogs.length / logsPerPage);

  return (
    <div className="flex w-full">
      <CustomSidebar />
      <div className="flex flex-col w-full ml-5 mr-5">
        <div className="grid grid-cols-8 gap-1 mt-10">
          <Button disabled>Filters</Button>
          <div className="col-span-5">
            <Input
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <Select value={timeFilter} onValueChange={handleTimeFilterChange}>
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
        <div className="flex justify-between mt-10">
          <div className="mt-2 mb-2">{filteredLogs.length} result(s)</div>
          <div>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={() => goToPage(currentPage - 1)}
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        href="#"
                        isActive={currentPage === page}
                        onClick={() => goToPage(page)}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  )
                )}
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={() => goToPage(currentPage + 1)}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>

        <div>
          <Table className="overflow-y-scroll">
            <TableCaption>A list of all the logs</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[30%]">Time</TableHead>
                <TableHead>Log</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentLogs.map((log) => (
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
