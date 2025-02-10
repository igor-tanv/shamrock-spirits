"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import products from "../../data/products.json";

interface Product {
  name: string;
  image: string;
  descriptions: {
    en: string;
    vi: string;
  };
  origin: string;
  size: string;
  abv: string;
}

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { t, i18n } = useTranslation(); // Get current language

  const openModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="py-20 px-10 bg-gray-50">
     <h2 className="text-4xl font-bold text-center mb-10 text-black">
        {t("ourProducts")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="border border-gray-300 p-5 rounded-lg text-center shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => openModal(product)}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>

{/* Modal */}
{selectedProduct && (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    onClick={closeModal}
  >
    <div
      className="bg-white p-6 rounded-lg max-w-lg text-center relative mt-10" 
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
    >
      {/* Close Button */}
      <button className="absolute top-4 right-4 text-black text-2xl" onClick={closeModal}> // Ensure text-black
        ✖
      </button>

      {/* Product Image */}
      <Image
        src={selectedProduct.image}
        alt={selectedProduct.name}
        width={300}
        height={450}
        className="mx-auto rounded-lg shadow-lg"
      />

      {/* Product Info */}
      <h3 className="text-2xl font-bold text-black mt-4"> 
        {selectedProduct.name}
      </h3>
      <p className="text-gray-700 mt-2">
        {selectedProduct.descriptions[i18n.language as keyof typeof selectedProduct.descriptions]}
      </p>
      <p className="text-gray-500 mt-2"><strong>{t("origin")}:</strong> {selectedProduct.origin}</p>
      <p className="text-gray-500"><strong>{t("size")}:</strong> {selectedProduct.size}</p>
      <p className="text-gray-500"><strong>{t("abv")}:</strong> {selectedProduct.abv}</p>
    </div>
  </div>
)}

    </div>
  );
}
