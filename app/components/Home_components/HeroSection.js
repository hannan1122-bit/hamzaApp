import { useState, useEffect } from "react";

const HeroSection = () => {
    // Array of image URLs
    const images = [
        "/pictures/Cutlery.jpeg",
        "/pictures/Paper-and-Coffee-Cups.jpeg",
        "/pictures/Categories-Below-pics.jpeg"
    ];

    // State to keep track of the current image index
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        // Change the image every 3 seconds
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="flex flex-col md:flex-row items-center justify-between bg-white-200 py-20 px-4">
            {/* Left Side: Text */}
            <div className="flex flex-col items-center justify-center text-center mb-8 md:w-1/2 h-full px-4">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    Welcome to Hills Packaging
                </h1>
                <p className="text-base md:text-lg mb-6">
                    Eco-friendly bagasse food boxes for Takeaways and street food, inculding burger boxes, fish & chips, lunch boxes and food go to containers
                </p>
                <button className="px-6 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition duration-300">
                    Shop Now
                </button>
            </div>

            {/* Right Side: Image */}
            <div className="md:w-1/2 flex items-center justify-center">
                <img
                    src={images[currentImageIndex]} // Dynamic image source
                    alt="Store Image"
                    className="w-[500px] h-[300px] object-cover rounded-md shadow-lg"
                />
            </div>
        </section>
    );
};

export default HeroSection;
