import { ChartNoAxesColumnIncreasing } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { ErrorReport } from "@/lib/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
  { time: "12/20", crashes: 186 },
  { time: "12/21", crashes: 305 },
  { time: "12/22", crashes: 237 },
  { time: "12/23", crashes: 73 },
  { time: "12/24", crashes: 209 },
  { time: "12/25", crashes: 214 },
  { time: "12/26", crashes: 214 },
];

const chartConfig = {
  crashes: {
    label: "Crashes",
    color: "#2563eb",
  },
} satisfies ChartConfig;

export const ErrorReports = ({
  errorReports,
}: {
  errorReports: ErrorReport[];
}) => {
  return (
    <ScrollArea className="h-72 w-full rounded-md border mt-10">
      <div className="p-4">
        <div className="flex justify-between">
          <h4 className="text-md font-bold leading-none text-muted-foreground mb-2">
            Error Report ({errorReports?.length})
          </h4>
          <Dialog>
            <DialogTrigger asChild>
              <ChartNoAxesColumnIncreasing className="cursor-pointer hover:bg-gray-100 rounded-md" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Crash Frequency Chart</DialogTitle>
                <DialogDescription>Showing last 7 days</DialogDescription>
              </DialogHeader>
              <ChartContainer
                config={chartConfig}
                className="min-h-[200px] w-full"
              >
                <BarChart accessibilityLayer data={chartData}>
                  <XAxis
                    dataKey="time"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 5)}
                  />
                  <YAxis
                    dataKey="crashes"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                  />
                  <Bar
                    dataKey="crashes"
                    fill="var(--color-crashes)"
                    radius={4}
                  />
                </BarChart>
              </ChartContainer>
            </DialogContent>
          </Dialog>
        </div>
        <Separator className="mt-2" />
        <ul className="my-3 ml-2 list-disc [&>li]:mt-2">
          {errorReports?.map((report) => (
            <li key={report.message}>
              <div className="text-sm">{report.message}</div>
            </li>
          ))}
        </ul>
      </div>
    </ScrollArea>
  );
};
