export default function Products() {
  const products = [
    { name: "Irish Whiskey", price: "$50" },
    { name: "Scotch Whisky", price: "$70" },
    { name: "Premium Vodka", price: "$40" },
  ];

  return (
    <div className="py-20 px-10 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-10">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="border border-gray-300 p-5 rounded-lg text-center shadow-sm hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-green-700 font-medium text-lg">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
