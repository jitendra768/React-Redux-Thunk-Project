import { useState, useEffect, Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  ChevronDownIcon,
  XMarkIcon,
  ShoppingCartIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const navigation = [
  { name: "Dashboard", href: "/", current: true },
  {
    name: "React Topics",
    current: false,
    children: [
      { name: "React Topics", href: "/topics" },
      { name: "Usestate", href: "/usestate" },
      { name: "Lifecycle", href: "/lifecycle" },
      { name: "Javascript-Crud", href: "/crud" },
      { name: "Useeffect", href: "/effect" },
      { name: "ForwadRef", href: "/farwardref" },
      { name: "datePiker", href: "/datepicker" },
      { name: "custom-datePicker", href: "/cdatepicker" },
    ],
  },
  { name: "Contact Us", href: "/contact", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Login", href: "/login", current: false },
  { name: "Register", href: "/register", current: false },
  { name: "Theme", href: "/theme", current: false },
];

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode class to the root element and save preference
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Check for saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  return (
    <div className="min-h-full">
      <Disclosure as="nav" className="fixed w-full top-0 z-50 bg-gray-800 dark:bg-gray-900 shadow-lg">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                {/* Logo & Navigation */}
                <div className="flex items-center">
                  <Link to="/" className="flex-shrink-0">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Logo"
                    />
                  </Link>
                  <div className="hidden md:flex md:space-x-4 ml-10">
                    {navigation.map((item) =>
                      item.children ? (
                        <Menu as="div" className="relative" key={item.name}>
                          {({ open: menuOpen }) => (
                            <>
                              <Menu.Button
                                className={classNames(
                                  "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                                  item.current
                                    ? "bg-gray-900 text-white"
                                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                                )}
                              >
                                {item.name}
                                <ChevronDownIcon className="ml-1 h-5 w-5 text-gray-300" aria-hidden="true" />
                              </Menu.Button>
                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                              >
                                <Menu.Items className="absolute left-0 mt-2 w-48 origin-top-left bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                                  {item.children.map((child) => (
                                    <Menu.Item key={child.name}>
                                      {({ active }) => (
                                        <Link
                                          to={child.href}
                                          className={classNames(
                                            active ? "bg-gray-100 dark:bg-gray-700" : "",
                                            "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 transition-colors"
                                          )}
                                        >
                                          {child.name}
                                        </Link>
                                      )}
                                    </Menu.Item>
                                  ))}
                                </Menu.Items>
                              </Transition>
                            </>
                          )}
                        </Menu>
                      ) : (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium transition-colors"
                          )}
                        >
                          {item.name}
                        </Link>
                      )
                    )}
                  </div>
                </div>
                {/* Right Section */}
                <div className="flex items-center">
                  <div className="hidden md:flex items-center space-x-4">
                    <button
                      onClick={toggleDarkMode}
                      className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                    >
                      <span className="sr-only">Toggle dark mode</span>
                      {darkMode ? (
                        <SunIcon className="h-5 w-5 text-yellow-400" />
                      ) : (
                        <MoonIcon className="h-5 w-5 text-gray-300" />
                      )}
                    </button>
                    <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-5 w-5 text-gray-300" />
                    </button>
                    <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
                      <span className="sr-only">View cart</span>
                      <ShoppingCartIcon className="h-5 w-5 text-gray-300" />
                    </button>
                    <Menu as="div" className="relative">
                      <Menu.Button className="flex rounded-full bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span className="sr-only">Open user menu</span>
                        <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                      </Menu.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? "bg-gray-100 dark:bg-gray-700" : "",
                                    "block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 transition-colors"
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                  {/* Mobile menu button */}
                  <div className="-mr-2 flex md:hidden">
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile Navigation */}
            <Disclosure.Panel className="md:hidden">
              <div className="pt-2 pb-3 space-y-1">
                {navigation.map((item) =>
                  item.children ? (
                    <Menu as="div" className="relative" key={item.name}>
                      {({ open: mobileMenuOpen }) => (
                        <>
                          <Menu.Button
                            className={classNames(
                              "w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium transition-colors",
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white"
                            )}
                          >
                            {item.name}
                            <ChevronDownIcon className="h-5 w-5" />
                          </Menu.Button>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Menu.Items className="mt-1 space-y-1 bg-gray-800 rounded-md">
                              {item.children.map((child) => (
                                <Menu.Item key={child.name}>
                                  {({ active }) => (
                                    <Link
                                      to={child.href}
                                      className={classNames(
                                        active
                                          ? "bg-gray-700 text-white"
                                          : "text-gray-300",
                                        "block px-4 py-2 text-base transition-colors"
                                      )}
                                    >
                                      {child.name}
                                    </Link>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        </>
                      )}
                    </Menu>
                  ) : (
                    <Disclosure.Button
                      key={item.name}
                      as={Link}
                      to={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium transition-colors"
                      )}
                    >
                      {item.name}
                    </Disclosure.Button>
                  )
                )}
              </div>
              <div className="border-t border-gray-700 pt-4 pb-3">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-white">{user.name}</div>
                    <div className="text-sm font-medium text-gray-400">{user.email}</div>
                  </div>
                  <button className="ml-auto p-2 rounded-full bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6 text-gray-300" />
                  </button>
                </div>
                <div className="mt-3 space-y-1 px-2">
                  {userNavigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <main className="pt-16">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {/* Your content goes here */}
        </div>
      </main>
    </div>
  );
}
