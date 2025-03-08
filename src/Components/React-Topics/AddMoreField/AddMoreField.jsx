import { useState } from "react";

export default function AddMoreField() {
  const [fields, setFields] = useState([{username: "", email: "" }]);

  const addField = () => {
    setFields([...fields, { username: "", email: "" }]);
  };

  const removeField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  const handleChange = (id, fieldName, value) => {
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.id === id ? { ...field, [fieldName]: value } : field
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", fields);
  };

  return (
    <div className="p-5 max-w-md mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-lg font-bold mb-3">Dynamic Form</h2>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.id} className="flex items-center space-x-2 mb-2">
            <input
              type="text"
              name="username"
              value={field.username}
              onChange={(e) => handleChange(field.id, "username", e.target.value)}
              placeholder="Enter username"
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              name="email"
              value={field.email}
              onChange={(e) => handleChange(field.id, "email", e.target.value)}
              placeholder="Enter email"
              className="border p-2 rounded w-full"
            />
            {fields.length > 1 && (
              <button
                type="button"
                onClick={() => removeField(field.id)}
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              >
                ✕
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addField}
          className="mt-3 bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
        >
          + Add More
        </button>
        <button
          type="submit"
          className="mt-3 bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600"
        >
          Submit
        </button>
      </form>
      {JSON.stringify(fields)}
    </div>
  );
}
