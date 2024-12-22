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
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function Logs() {
  const { auth, setAuth } = useAuth()!;
  return (
    <div className="flex w-full">
      <CustomSidebar />
      <div className="flex flex-col w-full ml-5 mr-5 gap-6 w-150 mt-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Account</CardTitle>
            <CardDescription>Manage your account settings</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="w-[50%]">
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input id="password" type="password" required />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label>Association</Label>
                  </div>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your association" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Associations</SelectLabel>
                        <SelectItem value="association_1">
                          Association 1
                        </SelectItem>
                        <SelectItem value="association_2">
                          Association 2
                        </SelectItem>
                        <SelectItem value="association_3">
                          Association 3
                        </SelectItem>
                        <SelectItem value="association_4">
                          Association 4
                        </SelectItem>
                        <SelectItem value="association_5">
                          Association 5
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="w-[30%] ml-auto mr-auto">
                  Save
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
