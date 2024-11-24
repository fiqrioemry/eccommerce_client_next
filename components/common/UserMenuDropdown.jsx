import React from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import ButtonElement from "../ButtonElement";
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "@/provider/AuthProvider";
import { useRouter } from "next/navigation";

const UserMenuDropDown = () => {
  const router = useRouter();
  const { loading, handleLogout } = useAuth();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex-center space-x-2">
          <FaUserCircle className="text-3xl cursor-pointer" />
          <span>ahmad</span>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto space-y-6 bg-background">
        <div className="flex-center space-x-4">
          <FaUserCircle className="text-3xl cursor-pointer" />
          <h3>username 01</h3>
        </div>

        <div className="flex flex-col space-y-2">
          <ButtonElement
            title="profile"
            variant="primary"
            style="auth-button"
            handleClick={() => router.push("/users/settings")}
          />
          <ButtonElement
            title="transaction"
            variant="primary"
            style="auth-button"
            handleClick={() => router.push("/users/transaction")}
          />

          <ButtonElement
            title="Logout"
            style="auth-button"
            loading={loading}
            variant="primary"
            loadingStyle="auth-loading"
            handleClick={handleLogout}
            disabled={loading}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserMenuDropDown;
