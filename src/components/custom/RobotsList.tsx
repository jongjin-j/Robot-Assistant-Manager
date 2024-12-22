import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Progress } from "../ui/progress";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";

import { Robot } from "@/lib/types";
import { RobotStatus, ColorClassNames } from "@/lib/types";

interface RobotPingProps {
  robots: Robot[];
}

export const RobotsList = ({ robots }: RobotPingProps) => {
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

  return (
    <ScrollArea className="h-72 w-full rounded-md border">
      <div key="0" className="p-4">
        <h4 className="mb-4 text-md leading-none text-muted-foreground font-bold">
          Robots (8)
        </h4>
        <Separator className="my-2" />
        {robots.map((robot) => (
          <Popover key={robot.id}>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full mt-2">
                <div className="flex flex-col ml-0 mr-auto">
                  <div className="text-sm">
                    ► &nbsp; &nbsp; &nbsp;{robot.name}
                  </div>
                </div>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">{robot.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    Robot Information
                  </p>
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
        ))}
      </div>
    </ScrollArea>
  );
};
