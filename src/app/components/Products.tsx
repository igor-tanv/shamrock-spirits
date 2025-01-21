export default function Products() {
  const products = [
    {
      name: "Defiant American Single Malt Whiskey",
      ingredients: "100% malted barley, yeast, and American toasted white oak. Milled, mashed, and distilled by Blue Ridge Distilling Company, NC, through copper pot distillation.",
      origin: "USA",
      size: "750ml",
      abv: "41%",
      price: "1,150,000",
    },
    {
      name: "Olde Raleigh Whiskey Society Blended Bourbon",
      ingredients: "100% blended from a fermentation process using corn, barley, rye, and wheat. Flavors of pepper, caramel, malt chocolate, and oak.",
      origin: "USA",
      size: "750ml",
      abv: "46.5%",
      price: "3,050,000",
    },
    {
      name: "Old Nick Straight Bourbon Whiskey",
      ingredients: "60% corn, 35% wheat, 5% barley. Produced by Old Nick Williams, NC, using ancestral grains, distilled with copper and steel stills.",
      origin: "USA",
      size: "750ml",
      abv: "41%",
      price: "1,250,000",
    },
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
            <p className="text-sm text-gray-600 mt-2">{product.ingredients}</p>
            <p className="text-sm text-gray-500 mt-2">
              <strong>Origin:</strong> {product.origin}
            </p>
            <p className="text-sm text-gray-500">
              <strong>Size:</strong> {product.size}
            </p>
            <p className="text-sm text-gray-500">
              <strong>ABV:</strong> {product.abv}
            </p>
            <p className="text-green-700 font-medium text-lg mt-3">
              <strong>Price:</strong> {product.price} (VAT)
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
