import React from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { FaUserCircle } from "react-icons/fa";
import { Button } from "../ui/button";

const UserProfile = ({ handleSignOut }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex-center space-x-2">
          {" "}
          <FaUserCircle className="text-3xl cursor-pointer" />
          <span>username 01</span>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto space-y-6 bg-background">
        <div className="flex-center space-x-4">
          <FaUserCircle className="text-3xl cursor-pointer" />
          <h3>username 01</h3>
        </div>

        <div className="flex flex-col space-y-2">
          <Button variant="primary">profile</Button>
          <Button variant="primary">settings</Button>
          <Button onClick={handleSignOut} variant="primary">
            logout
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserProfile;
