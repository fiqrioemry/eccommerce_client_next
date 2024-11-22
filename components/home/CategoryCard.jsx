import React from "react";
import Image from "next/image";
import ImageElement from "../ImageElement";

const CategoryCard = () => {
  const categoryList = [
    {
      title: "Electronics",
      image: "/assets/computer.png",
    },
    {
      title: "Handphone and Tablets",
      image: "/assets/handphone.png",
    },
    {
      title: "Men's Fashion",
      image: "/assets/mens_fashion.png",
    },
    {
      title: "Women's Fashion",
      image: "/assets/womens_fashion.png",
    },
  ];
  return (
    <>
      {categoryList.map((item, index) => {
        return (
          <div className="borders p-2 text-center" key={index}>
            <ImageElement
              width={175}
              height={175}
              style="home-category-image"
              path={item.image}
              alt={item.title}
            />

            <h4>{item.title}</h4>
          </div>
        );
      })}
    </>
  );
};

export default CategoryCard;
