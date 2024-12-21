"use client";

import { useState, useEffect } from "react";
import Layout from "../../components/Layout";

const products = [
  { id: 1, name: "Product 1", image: "https://picsum.photos/500/300?random=4", price: "$10" },
  { id: 2, name: "Product 2", image: "https://picsum.photos/500/300?random=5", price: "$15" },
  { id: 3, name: "Product 3", image: "https://picsum.photos/500/300?random=6", price: "$20" },
  { id: 4, name: "Product 4", image: "https://picsum.photos/500/300?random=7", price: "$12" },
  { id: 5, name: "Product 5", image: "https://picsum.photos/500/300?random=8", price: "$18" },
  { id: 6, name: "Product 6", image: "https://picsum.photos/500/300?random=9", price: "$25" },
  { id: 7, name: "Product 7", image: "https://picsum.photos/500/300?random=10", price: "$30" },
  { id: 8, name: "Product 8", image: "https://picsum.photos/500/300?random=11", price: "$22" },
  { id: 9, name: "Product 9", image: "https://picsum.photos/500/300?random=12", price: "$14" },
  { id: 10, name: "Product 10", image: "https://picsum.photos/500/300?random=13", price: "$19" },
];

// Random image URLs from the web
const images = [
  "https://picsum.photos/500/300?random=1",
  "https://picsum.photos/500/300?random=2",
  "https://picsum.photos/500/300?random=3",
];

const TakeAwayBoxes = ({ addToCart }) => {
  const note = "Take Away Boxes are ideal for packing meals on the go. These boxes ensure food remains fresh and secure.";

  // State for the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Effect to change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <Layout>
      <div className="mt-[80px] bg-white">
        <div className="p-6 flex flex-col lg:flex-row gap-6">
          {/* Take Away Boxes Section with Black Background */}
          <div className="w-full lg:w-3/4 relative h-[400px] bg-black rounded-lg overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('/pictures/Categories-Below-pics.jpeg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute bottom-10 left-4 text-white">
              <h1 className="text-3xl font-bold">Take Away Boxes</h1>
            </div>
          </div>

          {/* Note Section (1/4 space on the left) */}
          <aside className="w-full lg:w-1/4 bg-yellow-600 p-4 rounded shadow flex items-center justify-center text-center">
            <div>
              <h2 className="text-lg text-white font-semibold mb-2">Category Note</h2>
              <p className="text-white">{note}</p>
            </div>
          </aside>
        </div>

        {/* Products Section */}
        <section className="p-6">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="border bg-yellow-600 p-4 rounded shadow hover:shadow-lg transition-shadow"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover mb-4 rounded"
                  onError={(e) => e.target.src = "https://via.placeholder.com/500x300?text=Image+Not+Found"} // Fallback image on error
                />
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-white">{product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-yellow-500 text-white px-4 py-2 mt-2 rounded hover:bg-gray-600"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Image Slider Sectio*/}
        <section className="p-6">
          <div className="w-full flex justify-center">
            {/* Only the current image is shown */}
            <div className="transition-opacity duration-1000">
              <img
                src={images[currentImageIndex]}
                alt={`Slider Image ${currentImageIndex + 1}`}
                className="w-full h-[300px] object-cover rounded-lg"
              />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default TakeAwayBoxes;
