import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

interface Robot {
  id: string;
  name: string;
  max_x: number;
  max_y: number;
  loc_x: number;
  loc_y: number;
}

interface RobotPingProps {
  robot: Robot;
}

export const RobotPing = ({ robot }: RobotPingProps) => {
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
            <span className="relative inline-flex rounded-full h-5 w-5 bg-white"></span>
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
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
