import React from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { FaUserCircle } from "react-icons/fa";
import Image from "next/image";
import { Button } from "../ui/button";

const UserProfile = () => {
  const cart = [];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <FaUserCircle className="text-3xl cursor-pointer" />
      </PopoverTrigger>
      <PopoverContent className="w-auto space-y-6">
        <div className="flex-center space-x-4">
          <FaUserCircle className="text-3xl cursor-pointer" />
          <h3>username 01</h3>
        </div>

        <div className="flex flex-col space-y-2">
          {" "}
          <Button variant="primary">profile</Button>
          <Button variant="primary">settings</Button>
          <Button variant="primary">logout</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserProfile;
