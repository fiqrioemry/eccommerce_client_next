"use client";

import React from "react";
import InputElement from "./InputElement";
import { useSelector } from "react-redux";
import ButtonElement from "./ButtonElement";
import { useRouter } from "next/navigation";
import LoadingSpinner from "./LoadingSpinner";
import SearchDropdown from "./SearchDropdown";
import ShoppingCart from "./common/ShoppingCart";
import { useAuth } from "@/provider/AuthProvider";
import UserMenuDropDown from "./common/UserMenuDropdown";

const Header = () => {
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);
  const { input, handleChange, pageLoading } = useAuth();

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
          {pageLoading ? (
            <LoadingSpinner />
          ) : user ? (
            <UserMenuDropDown />
          ) : (
            <ButtonElement
              title="Login"
              variant="primary"
              style="auth-button"
              handleClick={() => router.push("/login")}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
