import { useEffect, useState } from "react";
import Pagination from "./Pagination";

const PaginationMain = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const result = await res.json();
      setData(result);
    };
    fetchData();
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-5">
        <h1 className="text-3xl font-bold text-center my-5">
          Pagination with React and Tailwind CSS
        </h1>

        {/* Display Data */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentData.map((item) => (
            <div key={item.id} className="p-5 bg-white shadow-lg rounded-md">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p>{item.body}</p>
            </div>
          ))}
        </div>

        {/* Pagination Component */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default PaginationMain;
