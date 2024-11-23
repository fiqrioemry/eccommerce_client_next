"use client";

import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import UserProfile from "./common/UserProfile";
import ShoppingCart from "./common/ShoppingCart";
import InputElement from "./InputElement";
import { useAuth } from "@/provider/AuthProvider";
import SearchDropdown from "./SearchDropdown";
import Link from "next/link";

const Header = () => {
  const { handleChange, input } = useAuth();
  return (
    <header className="py-3 borders-b">
      <div className="container mx-auto flex-between">
        <div className="hidden md:flex items-center space-x-2 tracking-[1px]">
          <h1>NEXT</h1>
          <span className="px-3 py-1 bg-primary text-background ">SHOP</span>
        </div>

        <div className="w-[250px] md:w-[300px] relative">
          <InputElement
            type="search"
            name="search"
            value={input.search}
            style="header-search-input"
            onChange={handleChange}
            placeholder="Search product name"
          />
          {input.search && <SearchDropdown />}
        </div>

        <div className="flex-between space-x-4">
          <ShoppingCart />

          <div className="flex space-x-4">
            <Button className="text-xs">
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
