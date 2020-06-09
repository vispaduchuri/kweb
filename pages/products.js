import React from "react";

const ProductBanner = () => {
  return (
    <>
      <div className="product-hero" style={{ backgroundImage: "url(" + "/products.jpg" + ")" }}>
        <div className="product-header">
          <h1>PRODUCTS</h1>
        </div>
      </div>
    </>
  )
}


const Products = () => {
  return (
    <>
      <div className="products">
        <ProductBanner />
        <div className="products-images">

        </div>
      </div>
    </>
  )
};

export default Products;
