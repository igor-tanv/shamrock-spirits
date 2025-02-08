import products from "@/data/products.json";

type Product = {
  name: string;
  description: string;
  origin: string;
  size: string;
  abv: string;
};

export default function Products() {
  return (
    <div className="py-20 px-10 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-10">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {(products as Product[]).map((product, index) => (
          <div
            key={index}
            className="border border-gray-300 p-5 rounded-lg text-center shadow-sm hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600 mt-2">{product.description}</p>
            <p className="text-sm text-gray-500 mt-2">
              <strong>Origin:</strong> {product.origin}
            </p>
            <p className="text-sm text-gray-500">
              <strong>Size:</strong> {product.size}
            </p>
            <p className="text-sm text-gray-500">
              <strong>ABV:</strong> {product.abv}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
