import { useState } from "react";
import { countries } from "./Country";

const Dropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [states, setStates] = useState([]);

  const handleCountryChange = (e) => {
    const countryId = e.target.value;
    setSelectedCountry(countryId);
    setSelectedState("");

    const country = countries.find((c) => c.id === parseInt(countryId));
    country ? setStates(country.states) : setStates([]);
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-6">Dependent Dropdowns</h1>
      {/* Country Dropdown */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Select Country:</label>
        <select
          value={selectedCountry}
          onChange={handleCountryChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        >
          <option value="">Select a country</option>
          {countries.map((country) => (
            <option key={country.id} value={country.id}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      {/* State Dropdown */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Select State:</label>
        <select
          value={selectedState}
          onChange={handleStateChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
        >
          <option value="">Select a state</option>
          {states.map((state) => (
            <option key={state.id} value={state.id}>
              {state.name}
            </option>
          ))}
        </select>
      </div>

      {/* Display Selected Values */}
      <div className="mt-6">
        <p className="text-gray-700">
          Selected Country:{" "}
          <span className="font-semibold">
            {countries.find((c) => c.id === parseInt(selectedCountry))?.name ||
              "None"}
          </span>
        </p>
        <p className="text-gray-700">
          Selected State:{" "}
          <span className="font-semibold">
            {states.find((s) => s.id === parseInt(selectedState))?.name ||
              "None"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Dropdown;
