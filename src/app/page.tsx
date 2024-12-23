"use client";

import { useAuth } from "./provider";
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
import { ErrorReport, Robot } from "@/lib/types";
import { getRobots, getErrorReports } from "@/lib/utils";
import { useEffect, useState } from "react";
import { ErrorReports } from "@/components/custom/ErrorReports";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { auth } = useAuth()!;
  const [robots] = useState<Robot[]>(getRobots());
  const [errorReports] = useState<ErrorReport[]>(getErrorReports());

  const router = useRouter();

  useEffect(() => {
    if (!auth) {
      router.push("/login");
    }
  }, [auth, router]);

  return auth ? (
    <div className="flex w-full">
      <CustomSidebar />
      <div className="ml-5 grid grid-cols-4 gap-4 flex-grow mt-10">
        <div>
          <RobotsList robots={robots} />
          <ErrorReports errorReports={errorReports} />
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
  ) : (
    <div>Loading</div>
  );
}
