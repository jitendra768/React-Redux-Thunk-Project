const CustomDatePicker = () => {
  return (
    <div className="flex flex-col m-6 items-center space-y-4 p-4 bg-white shadow-lg rounded-lg w-96">
      <h2 className="text-lg font-semibold">Select Date Range</h2>

      {/* Start Date Picker */}
      <div className="flex flex-col">
        <label className="text-gray-700 mb-1">Start Date</label>
        <input type="date" className="border p-2 rounded-md w-64" />
      </div>

      {/* End Date Picker */}
      <div className="flex flex-col">
        <label className="text-gray-700 mb-1">End Date</label>
        <input type="date" className="border p-2 rounded-md w-64" />
      </div>
    </div>
  );
};

export default CustomDatePicker;
