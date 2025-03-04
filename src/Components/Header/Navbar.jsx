import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [openNestedSubmenu, setOpenNestedSubmenu] = useState(null);

  const toggleSubmenu = (menuName) => {
    setOpenSubmenu(openSubmenu === menuName ? null : menuName);
    setOpenNestedSubmenu(null);
  };

  const toggleNestedSubmenu = (submenuName) => {
    setOpenNestedSubmenu(
      openNestedSubmenu === submenuName ? null : submenuName
    );
  };

  return (
    <div className="min-h-full">
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="text-2xl font-bold text-gray-800">
            Aarika Flour Mill
          </div>

          {/* Icons Section */}
          <div className="flex items-center gap-4 md:order-2">
            <Link to="/cart" className="text-gray-600 dark:text-white hover:text-blue-600">
              <ShoppingCart size={24} />
            </Link>
            <Link to="/profile" className="text-gray-600 dark:text-white hover:text-blue-600">
              <User size={24} />
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center p-2 w-10 h-10 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" viewBox="0 0 17 14" fill="none">
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" viewBox="0 0 17 14" fill="none">
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Desktop Menu */}
          <div
            className={`${
              menuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 bg-gray-50 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900">
              <li>
                <Link
                  to={"/"}
                  className="block py-2 px-3 text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
                >
                  Home
                </Link>
              </li>

              {/* React Task - Main Dropdown */}
              <li className="relative">
                <button
                  onClick={() => toggleSubmenu("reactTask")}
                  className="flex items-center py-2 px-3 text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
                >
                  React Task
                  <svg
                    className={`w-4 h-4 ml-2 transform transition-transform ${
                      openSubmenu === "reactTask" ? "rotate-180" : "rotate-0"
                    }`}
                    viewBox="0 0 10 6"
                    fill="none"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M1 1l4 4 4-4"
                    />
                  </svg>
                </button>

                {/* First Level Dropdown */}
                {openSubmenu === "reactTask" && (
                  <div className="absolute left-0 mt-2 w-44 bg-white shadow-lg rounded-md z-10">
                    <Link
                      to={"/dropdown"}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Depend Dropdown
                    </Link>
                    <Link
                      to={"/functiontabForm"}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Tab Form
                    </Link>
                    <Link
                      to={"/images"}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Image Gallery
                    </Link>

                    {/* Nested Dropdown Inside React Task */}
                    <div className="relative">
                      <button
                        onClick={() => toggleNestedSubmenu("moreOptions")}
                        className="flex justify-between w-full px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Product Options
                        <svg
                          className={`w-4 h-4 ml-2 transform transition-transform ${
                            openNestedSubmenu === "moreOptions"
                              ? "rotate-180"
                              : "rotate-0"
                          }`}
                          viewBox="0 0 10 6"
                          fill="none"
                        >
                          <path
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M1 1l4 4 4-4"
                          />
                        </svg>
                      </button>

                      {/* Nested Dropdown Menu */}
                      {openNestedSubmenu === "moreOptions" && (
                        <div className="absolute left-full top-0 mt-0 w-44 bg-white shadow-lg rounded-md z-10">
                          <Link
                            to={"/ProductList"}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          >
                            Product List
                          </Link>
                          <Link
                            to={"/productcart"}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          >
                            Product Cart
                          </Link>
                          <Link
                            to={"/datepicker"}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          >
                            Date Picker
                          </Link>
                          <Link
                            to={"/cdatepicker"}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          >
                            Custom Date
                          </Link>
                          <Link
                            to={"/todo"}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          >
                            Todo App
                          </Link>
                        </div>
                      )}
                    </div>

                    <Link
                      to={"/addfield"}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Dynamic Form
                    </Link>
                  </div>
                )}
              </li>

              {/* React Topics Dropdown */}
              <li className="relative">
                <button
                  onClick={() => toggleSubmenu("reactTopics")}
                  className="flex items-center py-2 px-3 text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
                >
                  React Topics
                  <svg
                    className={`w-4 h-4 ml-2 transform transition-transform ${
                      openSubmenu === "reactTopics" ? "rotate-180" : "rotate-0"
                    }`}
                    viewBox="0 0 10 6"
                    fill="none"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M1 1l4 4 4-4"
                    />
                  </svg>
                </button>

                {openSubmenu === "reactTopics" && (
                  <div className="absolute left-0 mt-2 w-44 bg-white shadow-lg rounded-md z-10">
                    <Link
                      to={"/dropdown"}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Depend Dropdown
                    </Link>
                    <Link
                      to={"/functiontabForm"}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Tab Form
                    </Link>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Earnings
                    </a>
                  </div>
                )}
              </li>

              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
