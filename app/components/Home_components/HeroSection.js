const HeroSection = () => (
    <section className="flex flex-col md:flex-row items-center justify-between bg-gray-200 py-20 px-4">
        {/* Left Side: Text */}
        <div className="flex flex-col items-center justify-center text-center mb-8 md:w-1/2 h-full px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Welcome to Our Store
            </h1>
            <p className="text-base md:text-lg mb-6">
                Discover the best products at amazing prices.
            </p>
            <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
                Shop Now
            </button>
        </div>


        {/* Right Side: Image */}
        <div className="md:w-1/2">
            <img
                src="/your-image.jpg"  // Replace with your image path
                alt="Store Image"
                className="w-full h-auto object-cover"
            />
        </div>
    </section>
);

export default HeroSection;
