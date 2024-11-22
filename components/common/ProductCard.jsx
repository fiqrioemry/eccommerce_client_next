"use client";

import React from "react";
import { Button } from "../ui/button";
import ImageElement from "../ImageElement";

const ProductCard = ({ content }) => {
  return (
    <>
      {[...Array(4)].map((_, index) => {
        return (
          <div className="borders p-2 space-y-1 " key={index}>
            <ImageElement
              width={200}
              height={200}
              style="product-card-image"
              src="https://images.tokopedia.net/img/cache/200-square/VqbcmM/2024/1/5/1aadeecc-6a66-498c-96f5-789970c361fe.jpg.webp?ect=4g"
              alt="temporary"
            />

            <h3>Product Name</h3>
            <h4>Rp. 100.000</h4>
            <div>
              <Button variant="primary" className="w-full">
                Detail
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductCard;
