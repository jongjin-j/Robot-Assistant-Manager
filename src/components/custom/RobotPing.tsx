import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Robot,
  RobotStatus,
  ColorClassNames,
  AnimateColorClassNames,
} from "@/lib/types";
import { Progress } from "../ui/progress";

interface RobotPingProps {
  robot: Robot;
}

export const RobotPing = ({ robot }: RobotPingProps) => {
  const getStatusClass = (status: string) => {
    switch (status) {
      case RobotStatus.COMPLETED:
        return ColorClassNames.COMPLETED;
      case RobotStatus.ERROR:
        return ColorClassNames.ERROR;
      default:
        return ColorClassNames.IN_PROGRESS;
    }
  };

  const getPingStatusClass = (status: string) => {
    switch (status) {
      case RobotStatus.COMPLETED:
        return AnimateColorClassNames.COMPLETED;
      case RobotStatus.ERROR:
        return AnimateColorClassNames.ERROR;
      case RobotStatus.IN_PROGRESS:
        return AnimateColorClassNames.IN_PROGRESS;
      default:
        return AnimateColorClassNames.IDLE;
    }
  };

  return (
    <div
      className="relative flex flex-col h-5 w-20"
      style={{
        top: `${(robot.loc_y / robot.max_y) * 100}%`,
        left: `${(robot.loc_x / robot.max_x) * 100}%`,
      }}
      key={robot.id}
    >
      <span className="text-white text-sm mb-1 ml-auto mr-auto">
        {robot.name}
      </span>
      <Popover>
        <PopoverTrigger asChild>
          <span className="flex h-5 w-5 ml-auto mr-auto cursor-pointer">
            <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-white opacity-75"></span>
            <span className={getPingStatusClass(robot.status)}></span>
          </span>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">{robot.name}</h4>
              <p className="text-sm text-muted-foreground">Robot Information</p>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="id">ID</Label>
                <Input
                  id="id"
                  defaultValue={robot.id}
                  className="col-span-2 h-8"
                  disabled
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  defaultValue={robot.name}
                  className="col-span-2 h-8"
                  disabled
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="x_location">Location (x)</Label>
                <Input
                  id="x_location"
                  defaultValue={robot.loc_x}
                  className="col-span-2 h-8"
                  disabled
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="y_location">Location (y)</Label>
                <Input
                  id="y_location"
                  defaultValue={robot.loc_y}
                  className="col-span-2 h-8"
                  disabled
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="status">Status</Label>
                <Input
                  id="status"
                  defaultValue={robot.status}
                  className="col-span-2 h-8"
                  disabled
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4 mt-2">
                <Label htmlFor="status">Progress</Label>
                <Progress
                  value={robot.progress}
                  className={getStatusClass(robot.status)}
                />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
