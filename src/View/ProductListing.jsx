import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Common/Spinner";
import { fetchData } from "../Redux/Actions/ProductAction";

const ProductList = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.allProducts);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1);
  };

  const filteredProducts = data?.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" || item.category === selectedCategory)
  );

  const categories = [...new Set(data?.map((item) => item.category))];

  const totalPages = Math.ceil(filteredProducts?.length / itemsPerPage);
  const paginatedProducts = filteredProducts?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="font-sans p-6 w-full flex flex-col gap-6 bg-gray-50 min-h-screen">
      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-6 items-center bg-white p-6 rounded-lg shadow-md">
        <div className="w-full md:w-1/4">
          <h3 className="font-semibold text-lg mb-2">Filter by Category</h3>
          <select
            className="w-full p-3 border rounded-lg"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full md:w-3/4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-3 border rounded-lg"
          />
        </div>
      </div>
      
      {/* Product List */}
      <div className="w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {paginatedProducts?.length > 0 ? (
            paginatedProducts.map((item) => (
              <div
                key={item.id}
                className="bg-white flex flex-col overflow-hidden cursor-pointer hover:shadow-lg transition-all rounded-lg"
              >
                <img
                  src={item.thumbnail}
                  alt={item.thumbnail}
                  className="w-full object-cover object-top h-60"
                />
                <div className="p-4 flex-1 flex flex-col">
                  <h5 className="text-lg font-semibold text-gray-800 truncate">
                    {item.title}
                  </h5>
                  <p className="mt-1 text-gray-500 truncate">{item.category}</p>
                  <h6 className="text-lg font-bold text-blue-600 mt-2">
                    ${item.price}
                  </h6>
                  <button
                    type="button"
                    className="text-md px-4 py-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium tracking-wide mt-4 rounded-lg"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-lg font-semibold text-gray-600">No products found.</p>
          )}
        </div>
        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 gap-4">
            <button
              className="px-5 py-3 border rounded-lg bg-white shadow-md disabled:opacity-50 hover:bg-gray-100"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <span className="px-5 py-3 bg-gray-100 rounded-lg font-medium text-lg">Page {currentPage} of {totalPages}</span>
            <button
              className="px-5 py-3 border rounded-lg bg-white shadow-md disabled:opacity-50 hover:bg-gray-100"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;