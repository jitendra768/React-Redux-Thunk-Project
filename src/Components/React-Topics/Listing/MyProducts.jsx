import axios from "axios";
import { useEffect, useState } from "react";

export default function MyProducts() {
  const [allProducts, setAllProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name-asc");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setAllProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  // Search Filter Logic
  const searchFilter = allProducts.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  // Sorting Logic
  const sortedProducts = [...searchFilter].sort((a, b) => {
    if (sortBy === "name-asc") return a.title.localeCompare(b.title);
    if (sortBy === "name-desc") return b.title.localeCompare(a.title);
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    return 0;
  });

  const totalPage = Math.ceil(sortedProducts.length / itemsPerPage);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPage) {
      setCurrentPage(newPage);
    }
  };
  return (
    <div className="bg-gray-100 min-h-screen p-10 mt-12">
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
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
          >
            <option value="name-asc">Sort by Name (A-Z)</option>
            <option value="name-desc">Sort by Name (Z-A)</option>
            <option value="price-asc">Sort by Price (Low to High)</option>
            <option value="price-desc">Sort by Price (High to Low)</option>
          </select>
        </div>

        {/* Loading Spinner */}
        {loading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {paginatedProducts.length > 0 ? (
                paginatedProducts.map((product) => (
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
                ))
              ) : (
                <div className="text-center text-gray-600">
                  No products found.
                </div>
              )}
            </div>

            {/* Pagination UI */}
            <div className="flex justify-between items-center mt-10">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-md border ${
                  currentPage === 1 ? "bg-gray-300" : "bg-blue-500 text-white"
                }`}
              >
                Previous
              </button>

              <span>
                Page {currentPage} of {totalPage}
              </span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPage}
                className={`px-4 py-2 rounded-md border ${
                  currentPage === totalPage
                    ? "bg-gray-300"
                    : "bg-blue-500 text-white"
                }`}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
