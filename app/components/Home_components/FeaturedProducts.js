const FeaturedProducts = () => (
    <section className="py-10 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-6 lg:px-12">
        {Array(8).fill().map((_, index) => (
          <div
            key={index}
            className="border p-4 rounded shadow hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src="/placeholder.png"
              alt={`Product ${index + 1}`}
              className="w-full h-40 md:h-48 lg:h-56 object-cover mb-4 rounded"
            />
            <h3 className="font-semibold text-lg">Product {index + 1}</h3>
            <p className="text-yellow-800 text-sm md:text-base">$99.99</p>
            <button className="mt-2 px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-200 transition-all duration-300">
              View
            </button>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default FeaturedProducts;
  