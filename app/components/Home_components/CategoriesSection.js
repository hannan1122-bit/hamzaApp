const CategoriesSection = () => (
    <section className="py-10 bg-white">
      <h2 className="text-2xl font-bold text-center mb-6">Shop by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-6 lg:px-12">
        {['Category 1', 'Category 2', 'Category 3', 'Category 4'].map((category) => (
          <div
            key={category}
            className="bg-gray-100 p-6 text-center rounded shadow hover:shadow-lg transition-shadow duration-300"
          >
            <p className="text-lg font-semibold">{category}</p>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default CategoriesSection;
  