import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import robotData from "../../robots.json";
import reportData from "../../reports.json";
import { ErrorReport, Robot } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getRobots = (): Robot[] => {
  const deserializedRobotsData: Robot[] = [];

  robotData.robots.forEach((robot) => {
    deserializedRobotsData.push({
      id: robot.id,
      name: robot.name,
      max_x: robot.max_x,
      max_y: robot.max_y,
      loc_x: robot.loc_x,
      loc_y: robot.loc_y,
      status: robot.status, 
      progress: robot.progress
    })
  })

  return deserializedRobotsData;
};

export const getErrorReports = () => {
  const deserializedErrorReportsData: ErrorReport[] = [];

    reportData.reports.forEach((report) => {
      deserializedErrorReportsData.push({
      message: report.message
    })
  })

  return deserializedErrorReportsData;
};