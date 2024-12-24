"use client";

import { useState, useEffect } from "react";
import { useCart } from "../../contexts/CartContext"; 
import Layout from "../../components/Layout";

const products = [
  { id: 1, name: "Eco Takeaway Box", image: "https://picsum.photos/500/300?random=1", price: "$10" },
  { id: 2, name: "Reusable Plastic Box", image: "https://picsum.photos/500/300?random=2", price: "$15" },
  { id: 3, name: "Cardboard Box", image: "https://picsum.photos/500/300?random=3", price: "$20" },
  { id: 4, name: "Mini Snack Box", image: "https://picsum.photos/500/300?random=4", price: "$12" },
  { id: 5, name: "Meal Prep Box", image: "https://picsum.photos/500/300?random=5", price: "$18" },
  { id: 6, name: "Large Takeaway Box", image: "https://picsum.photos/500/300?random=6", price: "$25" },
];

const sliderImages = [
  "https://picsum.photos/500/300?random=7",
  "https://picsum.photos/500/300?random=8",
  "https://picsum.photos/500/300?random=9",
];

const TakeAwayBoxes = () => {
 
  return (
    <Layout activePage="TakeawayBoxes">
      <Test/>
    </Layout>
  );
};

const Test= () => {

  const note = "Take Away Boxes are ideal for packing meals on the go. These boxes ensure food remains fresh and secure.";
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
const CartContext = useCart()
const addToCart = CartContext.addToCart;
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return(
    < div className="mt-[80px] bg-white">
    <div className="p-6 flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:w-3/4 relative h-[400px] bg-black rounded-lg overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/pictures/Categories-Below-pics.jpeg')",
          }}
        />
        <div className="absolute bottom-10 left-4 text-white">
          <h1 className="text-3xl font-bold">Take Away Boxes</h1>
        </div>
      </div>

      <aside className="w-full lg:w-1/4 bg-yellow-600 p-4 rounded shadow flex items-center justify-center text-center">
        <div>
          <h2 className="text-lg text-white font-semibold mb-2">Category Note</h2>
          <p className="text-white">{note}</p>
        </div>
      </aside>
    </div>

    <section className="p-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border bg-yellow-100 p-4 rounded shadow hover:shadow-lg transition-shadow"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover mb-4 rounded"
              onError={(e) => (e.target.src = "https://via.placeholder.com/500x300?text=Image+Not+Found")}
            />
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 font-medium">{product.price}</p>
            <button
              onClick={() => addToCart(product)} 
              className="bg-yellow-500 text-white px-4 py-2 mt-2 rounded hover:bg-yellow-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>

    <section className="p-6">
      <div className="w-full flex justify-center">
        <img
          src={sliderImages[currentImageIndex]}
          alt={`Slider Image ${currentImageIndex + 1}`}
          className="w-full max-w-[800px] h-[300px] object-cover rounded-lg transition-opacity duration-1000"
        />
      </div>
    </section>
  </div>  )
}
export default TakeAwayBoxes;