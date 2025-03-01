import { useState } from "react";

const FunctionalTabForm = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const renderTabContent = () => {
    switch (activeTab) {
      case "tab1":
        return (
          <div className="p-6 border border-gray-200 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Tab 1 Content</h2>
            <form className="space-y-4">
              <label className="block">
                <span className="text-gray-700">Name:</span>
                <input
                  type="text"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Email:</span>
                <input
                  type="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </label>
            </form>
          </div>
        );
      case "tab2":
        return (
          <div className="p-6 border border-gray-200 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Tab 2 Content</h2>
            <form className="space-y-4">
              <label className="block">
                <span className="text-gray-700">Address:</span>
                <input
                  type="text"
                  name="address"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Phone:</span>
                <input
                  type="tel"
                  name="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </label>
            </form>
          </div>
        );
      case "tab3":
        return (
          <div className="p-6 border border-gray-200 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Tab 3 Content</h2>
            <form className="space-y-4">
              <label className="block">
                <span className="text-gray-700">Comments:</span>
                <textarea
                  name="comments"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Subscribe:</span>
                <input
                  type="checkbox"
                  name="subscribe"
                  className="mt-1 block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </label>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("tab1")}
          className={`px-4 py-2 rounded-md ${
            activeTab === "tab1"
              ? "bg-indigo-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Tab 1
        </button>
        <button
          onClick={() => setActiveTab("tab2")}
          className={`px-4 py-2 rounded-md ${
            activeTab === "tab2"
              ? "bg-indigo-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Tab 2
        </button>
        <button
          onClick={() => setActiveTab("tab3")}
          className={`px-4 py-2 rounded-md ${
            activeTab === "tab3"
              ? "bg-indigo-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Tab 3
        </button>
      </div>
      <div>{renderTabContent()}</div>
    </div>
  );
};

export default FunctionalTabForm;
