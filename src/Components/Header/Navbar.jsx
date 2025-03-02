import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <div className="min-h-full">
      <nav className="bg-gray-300 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-gray-800">
                Aarika Flour Mill
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-800 hover:text-gray-600 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {menuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="#home"
                className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <div className="relative">
                <button
                  onClick={toggleSubmenu}
                  className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  Services
                  <svg
                    className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${
                      submenuOpen ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {submenuOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-gray-700 shadow-lg rounded-md overflow-hidden">
                    <a
                      href="#service1"
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-400"
                    >
                      Service 1
                    </a>
                    <a
                      href="#service2"
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-400"
                    >
                      Service 2
                    </a>
                    <a
                      href="#service3"
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-400"
                    >
                      Service 3
                    </a>
                  </div>
                )}
              </div>
              <a
                href="#aboutus"
                className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                About Us
              </a>
              <a
                href="#gallery"
                className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Gallery
              </a>
              <a
                href="#contactUs"
                className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Visit Us
              </a>
            </div>

            {/* Call Now Button */}
            <div className="hidden md:flex items-center">
              <a
                href="tel:+123"
                className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                Call now
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-gray-400">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#home"
                className="block text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>
              <button
                onClick={toggleSubmenu}
                className="w-full text-left text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium flex items-center justify-between"
              >
                Services
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    submenuOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {submenuOpen && (
                <div className="pl-4">
                  <a
                    href="#service1"
                    className="block text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium"
                  >
                    Service 1
                  </a>
                  <a
                    href="#service2"
                    className="block text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium"
                  >
                    Service 2
                  </a>
                  <a
                    href="#service3"
                    className="block text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium"
                  >
                    Service 3
                  </a>
                </div>
              )}
              <a
                href="#aboutus"
                className="block text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium"
              >
                About Us
              </a>
              <a
                href="#gallery"
                className="block text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium"
              >
                Gallery
              </a>
              <a
                href="#contactUs"
                className="block text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium"
              >
                Visit Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
