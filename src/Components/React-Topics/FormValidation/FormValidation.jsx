import { useState } from "react";

export default function FormValidation() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirm_password: "",
    first_name: "",
    last_name: "",
    phone: "",
    company: "",
  });

  const [errors, setErrors] = useState({});

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Clear errors as user types
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  // Validation Rules
  const validate = () => {
    const newErrors = {};

    // Email Validation
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    // Password Validation
    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Confirm Password
    if (form.confirm_password !== form.password) {
      newErrors.confirm_password = "Passwords do not match";
    }

    // First & Last Name Validation
    if (!form.first_name) newErrors.first_name = "First name is required";
    if (!form.last_name) newErrors.last_name = "Last name is required";

    // Phone Validation
    if (!form.phone) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    // Company Validation
    if (!form.company) {
      newErrors.company = "Company name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully:", form);
      alert("Form submitted successfully!");
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <div className="mt-32 mx-20 p-10 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        {/* Email */}
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="email"
            id="email"
            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 
                        border-b-2 ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        } 
                        appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
            placeholder=" "
            value={form.email}
            onChange={handleChange}
          />
          <label
            htmlFor="email"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 
                       scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 
                       peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="password"
            name="password"
            id="password"
            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 
                        border-b-2 ${
                          errors.password ? "border-red-500" : "border-gray-300"
                        } 
                        appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
            placeholder=" "
            value={form.password}
            onChange={handleChange}
          />
          <label
            htmlFor="password"
            className="absolute text-sm text-gray-500 duration-300 
                     transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                     peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                     peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="password"
            name="confirm_password"
            id="confirm_password"
            className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 
                        border-b-2 ${
                          errors.confirm_password
                            ? "border-red-500"
                            : "border-gray-300"
                        } 
                        appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
            placeholder=" "
            value={form.confirm_password}
            onChange={handleChange}
          />
          <label
            htmlFor="confirm_password"
            className="absolute text-sm text-gray-500 duration-300 
                     transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                     peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                     peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Confirm Password
          </label>
          {errors.confirm_password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.confirm_password}
            </p>
          )}
        </div>

        {/* Grid Fields: First Name and Last Name */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative z-0 w-full group">
            <input
              type="text"
              name="first_name"
              id="first_name"
              className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 
                          border-b-2 ${
                            errors.first_name
                              ? "border-red-500"
                              : "border-gray-300"
                          } 
                          appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              placeholder=" "
              value={form.first_name}
              onChange={handleChange}
            />
            <label htmlFor="first_name">First name</label>
            {errors.first_name && (
              <p className="text-red-500 text-xs mt-1">{errors.first_name}</p>
            )}
          </div>

          <div className="relative z-0 w-full group">
            <input
              type="text"
              name="last_name"
              id="last_name"
              className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 
                          border-b-2 ${
                            errors.last_name
                              ? "border-red-500"
                              : "border-gray-300"
                          } 
                          appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              placeholder=" "
              value={form.last_name}
              onChange={handleChange}
            />
            <label htmlFor="last_name">Last name</label>
            {errors.last_name && (
              <p className="text-red-500 text-xs mt-1">{errors.last_name}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-6 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
