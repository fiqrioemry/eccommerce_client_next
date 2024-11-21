"use client";
import React, { useEffect, useState } from "react";
import LoadingPage from "./LoadingPage";
import SelectElement from "./SelectElement";
import FormElement from "./FormElement";

const LocationForm = () => {
  const [location, setLocation] = useState({
    provinces: null,
    selectedProvince: null,
    cities: null,
    selectedCity: null,
  });
  console.log(location.provinces);

  const getProvince = async () => {
    try {
      const response = await fetch(
        "http://localhost:3300/api/rajaongkir/provinces"
      );
      const result = await response.json();
      setLocation((prevLocation) => ({
        ...prevLocation,
        provinces: result.data,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setLocation((prevLocation) => ({
      ...prevLocation,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    console.log("success");
  };

  const getCities = async (params) => {
    try {
      const response = await fetch(
        `http://localhost:3300/api/rajaongkir/cities?province=${params}`
      );
      const result = await response.json();
      setLocation((prevLocation) => ({
        ...prevLocation,
        cities: result.data.results,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProvince();
  }, []);

  useEffect(() => {
    if (location.selectedProvince) {
      getCities(location.selectedProvince);
    }
  }, [location.selectedProvince]);

  console.log(location.cities);

  if (!location.provinces) return <LoadingPage />;
  return (
    <div className="w-[350px]">
      <FormElement
        formTitle="Detail Lokasi"
        buttonTitle="Submit"
        buttonStyle="w-full"
        wrapperStyle="py-4 px-4"
        handleSubmit={handleSubmit}
      >
        <SelectElement
          //   title="Province"
          handleChange={handleChange}
          subtitle="Pilih Province"
          option={location.provinces}
          keyName="provinces"
          optionValue="province_id"
          optionName="province"
        />

        <SelectElement
          //   title="Province"
          handleChange={handleChange}
          subtitle="Pilih Province"
          option={location.provinces}
          keyName="provinces"
          optionValue="province_id"
          optionName="province"
        />
      </FormElement>
    </div>
  );
};

export default LocationForm;
