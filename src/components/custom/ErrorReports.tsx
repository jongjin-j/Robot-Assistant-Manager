import { ChartNoAxesColumnIncreasing } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { ErrorReport } from "@/lib/types";

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
          <ChartNoAxesColumnIncreasing className="cursor-pointer hover:bg-gray-100 rounded-md" />
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
