import axios from "axios";
import { useEffect, useState } from "react";

export default function MyProducts() {
  const [allProducts, setAllProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      const product = await axios.get("https://fakestoreapi.com/products");
      setAllProducts(product.data);
    };
    getProducts();
  }, []);

  const searchFilter = allProducts.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
          Explore Our Products
        </h1>

        {/* Search & Sort UI */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-3 rounded-lg w-full md:w-1/3 mb-4 md:mb-0 shadow-sm focus:ring-2 focus:ring-blue-500"
          />
          <select className="border p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500">
            <option>Sort by Name (A-Z)</option>
            <option>Sort by Name (Z-A)</option>
            <option>Sort by Price (Low to High)</option>
            <option>Sort by Price (High to Low)</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {searchFilter?.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <a href={product.href} className="group block">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:opacity-80 transition-opacity"
                />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 truncate">
                    {product.title}
                  </h3>
                  <p className="text-gray-500 mt-2 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-semibold text-blue-600">
                      ${product.price}
                    </span>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                      Buy Now
                    </button>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Pagination UI */}
        <div className="flex justify-between items-center mt-10">
          <button className="px-6 py-3 rounded-lg border bg-gray-300 hover:bg-gray-400 transition">
            Previous
          </button>
          <span className="text-gray-700">Page 1 of 5</span>
          <button className="px-6 py-3 rounded-lg border bg-blue-500 text-white hover:bg-blue-600 transition">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
