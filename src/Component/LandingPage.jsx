import React from "react";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$99",
    image: "https://via.placeholder.com/300x200?text=Headphones",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$149",
    image: "https://via.placeholder.com/300x200?text=Smart+Watch",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: "$49",
    image: "https://via.placeholder.com/300x200?text=Gaming+Mouse",
  },
];

export default function LandingPage() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to ShopEase
        </h1>
        <p className="text-lg mb-6">
          Your one-stop shop for the latest gadgets & accessories
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Shop Now
        </button>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-6 md:px-12">
        <h2 className="text-2xl font-bold text-center mb-10">
          Featured Products
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition p-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-500">{product.price}</p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p className="text-lg mb-4">Join our newsletter for exclusive offers!</p>
        <form className="flex justify-center gap-2 flex-wrap px-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-lg text-gray-900 focus:outline-none"
          />
          <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Subscribe
          </button>
        </form>
        <p className="mt-6 text-sm text-gray-400">
          © {new Date().getFullYear()} ShopEase. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
