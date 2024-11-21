import SectionHead from "@/components/common/SectionHead";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const page = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto space-y-4">
        <SectionHead title="Your Account" />
        <div className="space-y-4">
          <div className="py-4 borders-b">
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
          <div>
            <Tabs defaultValue="account">
              <TabsList className="flex flex-row">
                <TabsTrigger value="account">
                  <Button variant="primary" className="bg-white text-primary">
                    Waiting payment
                  </Button>
                </TabsTrigger>
                <TabsTrigger value="account">
                  <Button variant="primary" className="bg-white text-primary">
                    Waiting payment
                  </Button>
                </TabsTrigger>
                <TabsTrigger value="account">
                  <Button variant="primary" className="bg-white text-primary">
                    Waiting payment
                  </Button>
                </TabsTrigger>
                <TabsTrigger value="account">
                  <Button variant="primary">Waiting payment</Button>
                </TabsTrigger>
              </TabsList>

              <TabsContent
                value="account"
                className="h-[400px] w-full borders-tb overflow-y-scroll space-y-4 py-4"
              >
                {[...Array(4)].map((_, index) => {
                  return (
                    <div className="min-h-[200px] borders p-4" key={index}>
                      <div>
                        <div>Purchase date : 7 october 2022</div>
                      </div>
                      <h2>Ace hardware</h2>
                      <div className="flex gap-x-4">
                        <div className="w-24 h-24 borders"></div>
                        <div>
                          <h2>Product Name </h2>
                          <p>Rp. 125.000 x 2</p>
                          <p>Total : Rp. 250.000</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
