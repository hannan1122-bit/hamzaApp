import Link from "next/link";

const CategoriesSection = () => {
  const categories = [
    { name: "Kitchen Essentials", image: "/pictures/HeroSection1.jpeg", link: "/categories/kitchen-essentials" },
    { name: "Tableware", image: "/pictures/Champagne-Fluets.jpeg", link: "/categories/tableware" },
    { name: "Cutlery", image: "/pictures/Cutlery.jpeg", link: "/categories/cutlery" },
    { name: "Paper Products", image: "/pictures/Paper-Napkins.jpeg", link: "/categories/paper-products" },
    { name: "Glassware", image: "/pictures/Pint-and-Half-Pint-Glasses.jpeg", link: "/categories/glassware" },
    { name: "Party Supplies", image: "/pictures/Paper-and-Coffee-Cups.jpeg", link: "/categories/party-supplies" },
  ];

  return (
    <section className="py-10 bg-white">
      <h2 className="text-2xl font-bold text-center mb-6">Shop by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-6 lg:px-12">
        {categories.map((category) => (
          <Link href={category.link} key={category.name}>
            <div className="text-center">
              <div
                className="w-32 h-32 mx-auto bg-gray-100 rounded-full shadow hover:shadow-lg transition-shadow duration-300 bg-cover bg-center"
                style={{ backgroundImage: `url(${category.image})` }}
              ></div>
              <p className="mt-2 text-lg font-semibold">{category.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
