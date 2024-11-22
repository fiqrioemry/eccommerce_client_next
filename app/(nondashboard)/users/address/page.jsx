import SectionHead from "@/components/common/SectionHead";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex flex-wrap borders p-4 space-y-4">
        <div className="flex-between w-full">
          <h2>List of address</h2>
          <Button>Add New Address</Button>
        </div>
        <div className="borders-tb h-[400px] w-full overflow-y-scroll py-4 space-y-4">
          {[...Array(4)].map((_, index) => {
            return (
              <div className="min-h-[200px] borders p-4" key={index}>
                <h2>Home</h2>
                <h2>john doe</h2>
                <h3>789-789-789</h3>
                <p>
                  Jl. Talang Kerangga No.10, Talang Semut, Kec. Bukit Kecil,
                  Kota Palembang, Sumatera Selatan 30121 Rumahnya yang pojok
                  tingkat 2
                </p>
                <div className="space-x-4 mt-4">
                  <Button>Edit</Button>
                  <Button>Set as Default</Button>
                  <Button>Delete</Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default page;
