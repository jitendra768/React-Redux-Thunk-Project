import { useState } from "react";

export default function AddMoreField() {
  const [fields, setFields] = useState([{ id: Date.now(), value: "" }]);

  const addField = () => {
    setFields([...fields, { id: Date.now(), value: "" }]);
  };

  const removeField = (id) => {
    if (fields.length > 1) {
      setFields(fields.filter((field) => field.id !== id));
    }
  };

  const handleChange = (id, newValue) => {
    setFields(
      fields.map((field) =>
        field.id === id ? { ...field, value: newValue } : field
      )
    );
  };
  return (
    <div className="p-5 max-w-md mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-lg font-bold mb-3">Dynamic Form</h2>
      {fields.map((field) => (
        <div key={field.id} className="flex items-center space-x-2 mb-2">
          <input
            type="text"
            value={field.value}
            onChange={(e) => handleChange(field.id, e.target.value)}
            placeholder="Enter value"
            className="border p-2 rounded w-full"
          />
          {fields.length > 1 && (
            <button
              onClick={() => removeField(field.id)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              ✕
            </button>
          )}
        </div>
      ))}
      <button
        onClick={addField}
        className="mt-3 bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
      >
        + Add More
      </button>
    </div>
  );
}
