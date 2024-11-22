import LocationForm from "@/components/LocationForm";
import React from "react";

const page = () => {
  return (
    <section className="py-12">
      <div className="mx-auto container flex-center">
        <div>
          <LocationForm />
        </div>
      </div>
    </section>
  );
};

export default page;
