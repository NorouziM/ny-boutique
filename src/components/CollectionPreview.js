import React from "react";
import ProductPreview from "./ProductPreview";
import { Link } from "react-router-dom";

function CollectionPreview({ title, items, routeName }) {
  return (
    <div>
      <div className="mx-auto text-center mt-32 ">
        <Link to={`/shop/${routeName}`}>
          <h1 className="text-4xl mb-12 mt-4">{title}</h1>
        </Link>
      </div>
      <div className="grid flex lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-7">
        {items
          .filter((_item, index) => index < 4)
          .map((item) => {
            return <ProductPreview item={item} />;
          })}
      </div>
    </div>
  );
}

export default CollectionPreview;
