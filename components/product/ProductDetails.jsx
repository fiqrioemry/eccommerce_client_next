"use client";
import { Button } from "@/components/ui/button";
import { FaMinus, FaPlus } from "react-icons/fa";
import ImageElement from "../ImageElement";

const ProductDetails = () => {
  return (
    <div className="product-detail-parent">
      {/* product images */}
      <div className="product-detail-image">
        <div className="product-detail-multiple">
          {[...Array(4)].map((_, index) => {
            return (
              <ImageElement
                width={80}
                height={80}
                style="detail-multiple-image"
                alt=""
                path="/assets/empty_cart.png"
                key={index}
              />
            );
          })}
        </div>
        <ImageElement
          width={350}
          height={350}
          style="detail-single-image"
          alt=""
          path="/assets/empty_cart.png"
        />
      </div>

      {/* product description */}
      <div>
        <h2>PRODUCT NAME</h2>
        <h3>RP. 1.750.000</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          in eos corrupti dolore sit nulla aliquid quibusdam magnam quas totam
          mollitia architecto minima quidem eaque modi consequatur unde
          aspernatur saepe?
        </p>
        <div className="py-2">
          <div className="flex">
            <Button variant="primary">
              <FaMinus />
            </Button>
            <div className="w-[75px] flex-center borders-tb">1</div>
            <Button variant="primary">
              <FaPlus />
            </Button>
          </div>
        </div>
        <div className="space-y-2">
          <Button className="w-full">ADD TO CART</Button>
          <Button className="w-full">CHECKOUT</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
