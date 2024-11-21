"use client";

import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import UserProfile from "./common/UserProfile";
import ShoppingCart from "./common/ShoppingCart";

const Header = () => {
  return (
    <header className="py-3 borders-b">
      <div className="container mx-auto flex-between">
        <div className="hidden md:flex items-center space-x-2 tracking-[1px]">
          <h1>NEXT</h1>
          <span className="px-3 py-1 bg-primary text-background ">SHOP</span>
        </div>

        <div className="w-[250px] md:w-[300px]">
          <Input className="w-full" />
        </div>

        <div className="flex-between space-x-4">
          {/* <ShoppingCart />
          {user ? (
            <UserProfile handleSignOut={handleSignOut} />
          ) : (
            <div className="flex space-x-4">
              <Button onClick={handleSignIn} className="text-xs">
                Sign-In
              </Button>
            </div>
          )} */}
        </div>
      </div>
    </header>
  );
};

export default Header;
