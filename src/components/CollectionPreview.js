import React from "react";

function CollectionPreview({ title, items }) {
  return (
    <div>
      <div className="mx-auto text-center mt-5 ">
        <h1 className="text-4xl mb-12 mt-4">{title}</h1>
      </div>
      <div className="grid flex lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 px-7">
        {items
          .filter((item, index) => index < 4)
          .map((item) => {
            return (
              <div className="col-span-1 mx-auto mb-10 mx-10">
                <div
                  style={{ height: "29rem", width: "26rem" }}
                  className="overflow-hidden "
                >
                  <img
                    style={{ minWidth: "350px", width: "26rem" }}
                    src={item.imageUrl}
                  />
                </div>
                <div className="flex justify-between mt-2">
                  <h2 className="text-2xl">{item.name}</h2>
                  <h2 className="text-2xl">{item.price}$</h2>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default CollectionPreview;
