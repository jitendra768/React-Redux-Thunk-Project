// eslint-disable-next-line react/prop-types
const ChildC = ({ user }) => {
  // eslint-disable-next-line react/prop-types
  const { name, lastName, age, profession, city } = user;
  return (
    <>
      <p>
        {`My name is ${name} ${lastName} and i am ${age} years old and i am ${profession} at ${city}`}
      </p>
      <button
        type="button"
        className="mt-4 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700"
      >
        View
      </button>
    </>
  );
};

export default ChildC;
