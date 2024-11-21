import React from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MdShoppingCart } from "react-icons/md";
import Image from "next/image";

const ShoppingCart = () => {
  const cart = [];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <MdShoppingCart className="text-3xl cursor-pointer" />
      </PopoverTrigger>
      <PopoverContent className="w-80 bg-background">
        <div>
          <h3 className="borders-b py-4">Shopping Cart</h3>
        </div>

        {cart.length === 0 ? (
          <div className="flex-center flex-col h-[250px]">
            <Image
              width={175}
              height={175}
              className="h-[200px]"
              src="/assets/empty_cart.png"
              alt="emptycart"
            />
            <h2>Cart is empty ...</h2>
          </div>
        ) : (
          <div className="flex flex-col h-full justify-between">
            <div className="overflow-y-auto max-h-[400px]">
              {cart.map((item, index) => (
                <CartProductElement item={item} key={index} />
              ))}
            </div>

            {/* checkout */}
            <div className="py-10 md:py-4">
              <div className="flex justify-between py-2">
                <div className="flex items-center gap-x-2">
                  {/* Select All Checkbox */}
                  <input
                    onChange={handleSelectAll}
                    type="checkbox"
                    className="w-4 h-4"
                    checked={checkout.length === cart.length}
                  />
                  <div>Pilih semua</div>
                </div>

                <div>Total harga: ${total.toFixed(2)}</div>
              </div>

              <button
                onClick={handleCheckout}
                className={`${
                  checkout.length !== 0
                    ? "bg-tertiary"
                    : "bg-gray-500 cursor-not-allowed "
                } btn w-full text-white`}
                disabled={checkout.length === 0}
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default ShoppingCart;
