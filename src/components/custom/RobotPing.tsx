import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Robot,
  RobotStatus,
  ColorClassNames,
  AnimateColorClassNames,
} from "@/lib/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Progress } from "../ui/progress";

interface RobotPingProps {
  robot: Robot;
  setRobots: (updater: (prevRobots: Robot[]) => Robot[]) => void;
}

export const RobotPing = ({ robot, setRobots }: RobotPingProps) => {
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

  const handleXLocChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    robot: Robot
  ) => {
    const updatedRobot: Robot = {
      ...robot,
      loc_x: parseInt(event.target.value),
    };

    setRobots((prevRobots) =>
      prevRobots.map((r) => (r.id === updatedRobot.id ? updatedRobot : r))
    );
  };

  const handleYLocChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    robot: Robot
  ) => {
    const updatedRobot: Robot = {
      ...robot,
      loc_y: parseInt(event.target.value),
    };

    setRobots((prevRobots) =>
      prevRobots.map((r) => (r.id === updatedRobot.id ? updatedRobot : r))
    );
  };

  return (
    <div
      className="relative flex flex-col h-5 w-20"
      style={{
        top: `${(robot.loc_y / robot.max_y) * 100}%`,
        left: `${(robot.loc_x / robot.max_x) * 100}%`,
        transform: "translate(-20px, -5px)",
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
                <Label htmlFor="max_x">Max X</Label>
                <Input
                  id="max_x"
                  defaultValue={robot.max_x}
                  className="col-span-2 h-8"
                  disabled
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="max_y">Max Y</Label>
                <Input
                  id="max_y"
                  defaultValue={robot.max_y}
                  className="col-span-2 h-8"
                  disabled
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="x_location">Location (x)</Label>
                <Input
                  id="x_location"
                  defaultValue={String(robot.loc_x)}
                  type="number"
                  className="col-span-2 h-8"
                  onChange={(event) => handleXLocChange(event, robot)}
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="y_location">Location (y)</Label>
                <Input
                  id="y_location"
                  defaultValue={String(robot.loc_y)}
                  type="number"
                  className="col-span-2 h-8"
                  onChange={(event) => handleYLocChange(event, robot)}
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
              <div className="grid grid-cols-3 items-center gap-4 h-8">
                <Label htmlFor="task">Task</Label>
                <Select defaultValue="task_1">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="task_1">Task 1</SelectItem>
                    <SelectItem value="task_2">Task 2</SelectItem>
                    <SelectItem value="task_3">Task 3</SelectItem>
                    <SelectItem value="task_4">Task 4</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-3 items-center gap-4 mt-2">
                <Label htmlFor="status">Progress</Label>
                {robot.status == RobotStatus.COMPLETED ? (
                  <Progress
                    value={robot.progress}
                    className="w-full col-span-2 [&>*]:bg-green-500"
                  />
                ) : robot.status === RobotStatus.ERROR ? (
                  <Progress
                    value={robot.progress}
                    className="w-full col-span-2 [&>*]:bg-red-500"
                  />
                ) : (
                  <Progress
                    value={robot.progress}
                    className="w-full col-span-2"
                  />
                )}
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
