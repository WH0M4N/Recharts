import React from "react";
import "../"

const ProductsCard = ({ products }) => {
  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-lg max-w-md mx-auto">
      <ul className="space-y-4">
        {products.map((p) => (
          <li
            key={p.name}
            className="text-lg font-semibold text-gray-800 hover:text-blue-500 cursor-pointer"
          >
            {p.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsCard;
