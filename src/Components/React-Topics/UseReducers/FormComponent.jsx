import { useReducer } from "react";

// Reducer function
function formReducer(state, action) {
  switch (action.type) {
    case "FIELD_CHANGE":
      return {
        ...state,
        values: {
          ...state.values,
          [action.field]: action.value,
        },
        errors: {
          ...state.errors,
          [action.field]: "", // Clear error when field changes
        },
      };

    case "VALIDATE_FIELD":
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.field]: validateField(
            action.field,
            state.values[action.field]
          ),
        },
      };

    case "SUBMIT": // Validate all fields before submission
    {
      const newErrors = {};
      Object.keys(state.values).forEach((field) => {
        newErrors[field] = validateField(field, state.values[field]);
      });

      return {
        ...state,
        isSubmitting: true,
        errors: newErrors,
        submitCount: state.submitCount + 1,
      };
    }

    case "SUCCESS":
      return {
        ...state,
        isSubmitting: false,
        isSuccess: true,
      };

    case "FAILURE":
      return {
        ...state,
        isSubmitting: false,
        errorMessage: action.message,
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

// Validation helper
function validateField(field, value) {
  switch (field) {
    case "username":
      return value.length < 3 ? "Username must be at least 3 characters" : "";
    case "password":
      return value.length < 6 ? "Password must be at least 6 characters" : "";
    case "email":
      return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? "Invalid email format"
        : "";
    default:
      return "";
  }
}

// Initial state
const initialState = {
  values: {
    username: "",
    password: "",
    email: "",
  },
  errors: {
    username: "",
    password: "",
    email: "",
  },
  isSubmitting: false,
  isSuccess: false,
  submitCount: 0,
  errorMessage: "",
};

function FormComponent() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (field) => (e) => {
    dispatch({
      type: "FIELD_CHANGE",
      field: field,
      value: e.target.value,
    });

    // Optional: Validate after change (could debounce this)
    if (state.submitCount > 0) {
      dispatch({
        type: "VALIDATE_FIELD",
        field: field,
      });
    }
  };

  const handleBlur = (field) => () => {
    dispatch({
      type: "VALIDATE_FIELD",
      field: field,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT" });

    // Check if form is valid
    const isValid = Object.values(state.errors).every((error) => !error);

    if (isValid) {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        dispatch({ type: "SUCCESS" });
      } catch (error) {
        dispatch({ type: "FAILURE", message: error.message });
      }
    }
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div className="form-container">
      {state.isSuccess ? (
        <div className="success-message">
          <h2>Form Submitted Successfully!</h2>
          <button onClick={handleReset}>Submit Another</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Registration Form</h2>

          {state.errorMessage && (
            <div className="error-message">{state.errorMessage}</div>
          )}

          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={state.values.username}
              onChange={handleChange("username")}
              onBlur={handleBlur("username")}
            />
            {state.errors.username && (
              <span className="field-error">{state.errors.username}</span>
            )}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={state.values.password}
              onChange={handleChange("password")}
              onBlur={handleBlur("password")}
            />
            {state.errors.password && (
              <span className="field-error">{state.errors.password}</span>
            )}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={state.values.email}
              onChange={handleChange("email")}
              onBlur={handleBlur("email")}
            />
            {state.errors.email && (
              <span className="field-error">{state.errors.email}</span>
            )}
          </div>

          <button type="submit" disabled={state.isSubmitting}>
            {state.isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      )}
    </div>
  );
}

// Add some basic styling
const styles = `
  .form-container {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  .form-group {
    margin-bottom: 15px;
  }
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  .field-error {
    color: red;
    font-size: 0.8em;
    display: block;
    margin-top: 5px;
  }
  .error-message {
    color: red;
    background: #ffeeee;
    padding: 10px;
    border-radius: 4px;
    margin-bottom: 15px;
  }
  .success-message {
    text-align: center;
    padding: 20px;
    background: #eeffee;
    border-radius: 4px;
  }
  button {
    background: #4CAF50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`;

// Usage example
function App() {
  return (
    <>
      <style>{styles}</style>
      <FormComponent />
    </>
  );
}

export default App;
