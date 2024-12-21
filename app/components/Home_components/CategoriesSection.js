import Link from "next/link";

const CategoriesSection = () => {
  const categories = [
    { name: "Take Away Boxes", image: "/pictures/HeroSection1.jpeg", link: "/categories/Takeawayboxes" },
    { name: "Champagne Fluets", image: "/pictures/Champagne-Fluets.jpeg", link: "/categories/Takeawayboxes/Champagnefluets" },
    { name: "Cutlery", image: "/pictures/Cutlery.jpeg", link: "/categories/Cutlery" },
    { name: "Paper Products", image: "/pictures/Paper-Napkins.jpeg", link: "/categories/Takeawayboxes/paper-products" },
    { name: "Glassware", image: "/pictures/Pint-and-Half-Pint-Glasses.jpeg", link: "/categories/Takeawayboxes/glassware" },
    { name: "Cups", image: "/pictures/Paper-and-Coffee-Cups.jpeg", link: "/categories/Takeawayboxes/party-supplies" },
  ];

  return (
    <section className="py-8 bg-white">
      <h2 className="text-2xl font-bold text-center mb-6">Shop by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 md:px-8 lg:px-10">
        {categories.map((category) => (
          <Link href={category.link} key={category.name}>
            <div className="text-center cursor-pointer">
              <div
                className="w-40 h-40 mx-auto bg-gray-100 rounded-full shadow hover:shadow-lg transition-shadow duration-300 bg-cover bg-center"
                style={{ backgroundImage: `url(${category.image})` }}
              ></div>
              <p className="mt-3 text-lg font-semibold">{category.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
