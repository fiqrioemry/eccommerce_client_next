import SectionHead from "@/components/common/SectionHead";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto space-y-4">
        <SectionHead title="Your Account" />
        <div>
          <div className="py-4 ">
            <Link href="/user" className="py-[18px] pr-5 borders-b border-b-4">
              User Profile
            </Link>
            <Link href="/user/address" className="py-[18px] pr-5 ">
              Address
            </Link>
            <Link href="/user/transaction" className="py-[18px] pr-5 ">
              Transaction
            </Link>
          </div>
          <div className="flex flex-wrap borders py-4">
            {/* foto */}
            <div className="grid grid-cols-2 md:grid-cols-1 w-full md:w-[25%] px-4 gap-x-4 space-y-4">
              <div className="w-full h-[250px] borders"></div>
              <div className="space-y-4">
                <Button className="w-full">change photo</Button>
                <Button className="w-full">Create PIN</Button>
                <Button className="w-full">Change Password</Button>
              </div>
            </div>
            {/* info */}
            <div className="w-[75%] px-4">
              <h1>Profile Account</h1>
              <div className="flex items-center">
                <div className="w-[150px]">Name</div>
                <div>: John doe</div>
              </div>
              <div className="flex items-center">
                <div className="w-[150px]">Birthday</div>
                <div>: 27 April 1991</div>
              </div>
              <div className="flex items-center">
                <div className="w-[150px]">Gender</div>
                <div>: Male</div>
              </div>
              <div className="flex items-center">
                <div className="w-[150px]">email</div>
                <div>: johndoe@gmail.com</div>
              </div>
              <div className="flex items-center">
                <div className="w-[150px]">phone</div>
                <div>: 789-789-789</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
