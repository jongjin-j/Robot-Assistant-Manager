export interface Robot {
	id: string;
	name: string;
	max_x: number;
	max_y: number;
	loc_x: number;
	loc_y: number;
	status: string;
	progress: number;
}

export interface ErrorReport {
  message: string;
}

export enum RobotStatus {
  IDLE = "Idle",
  IN_PROGRESS = "In Progress",
  COMPLETED = "Completed",
  ERROR = "Error",
}

export enum ColorClassNames {
  IDLE = "w-full col-span-2",
  IN_PROGRESS = "w-full col-span-2",
  COMPLETED = "w-full col-span-2 [&>*]:bg-green-500",
  ERROR = "w-full col-span-2 [&>*]:bg-red-500",
}

export enum AnimateColorClassNames {
  IDLE = "relative inline-flex rounded-full h-5 w-5 bg-gray-500",
  IN_PROGRESS = "relative inline-flex rounded-full h-5 w-5 bg-white",
  COMPLETED = "relative inline-flex rounded-full h-5 w-5 bg-green-500",
  ERROR = "relative inline-flex rounded-full h-5 w-5 bg-red-500",
}