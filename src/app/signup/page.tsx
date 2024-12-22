"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "../provider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignUp() {
  const { auth, setAuth } = useAuth()!;

  return (
    <div className="ml-auto mr-auto">
      <div className="flex flex-col">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-10">
          Join us in REEKON RAM
        </h1>
        <h2 className="text-2xl ml-auto mr-auto">
          Our own Virtual Robot Assistant Manager
        </h2>
        <div className="flex flex-col gap-6 w-150 mt-10">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Sign Up</CardTitle>
              <CardDescription>Enter your details below</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
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
                    <Input id="password" required />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Confirm Password</Label>
                    </div>
                    <Input id="password-confirm" required />
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
                  <Button type="submit" className="w-full">
                    Sign Up
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                  Already a user?{" "}
                  <a href="#" className="underline underline-offset-4">
                    Sign In
                  </a>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
