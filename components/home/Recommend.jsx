"use client";

import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../common/ProductCard";
import SectionHead from "../common/SectionHead";
import ButtonElement from "../element/ButtonElement";
import { useProduct } from "@/provider/ProductProvider";
import ProductCardLoading from "../common/ProductCardLoading";
const Recommend = () => {
  const { handleShowMore, limit } = useProduct();
  const { products, loading, total } = useSelector((state) => state.product);

  return (
    <section className="content-wrapper">
      <SectionHead title="recommend for you" />
      <div className="content-grid">
        {!products ? (
          <ProductCardLoading />
        ) : (
          <ProductCard products={products} />
        )}

        {loading && <ProductCardLoading />}
      </div>
      {total >= limit && (
        <ButtonElement
          title="load more"
          style={`${loading ? "cursor-not-allowed" : ""} w-full flex-center `}
          handleClick={handleShowMore}
          loading={loading}
        />
      )}
    </section>
  );
};

export default Recommend;
