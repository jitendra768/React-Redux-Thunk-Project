/* eslint-disable react/prop-types */
import { useState } from "react";

const myArray = [
  { name: "A", age: 26, gender: "M", graduation: "B.Tech" },
  { name: "B", age: 23, gender: "F", graduation: "BCA" },
  { name: "C", age: 30, gender: "M", graduation: "BA" },
  { name: "D", age: 35, gender: "M", graduation: "B.Tech" },
  { name: "E", age: 20, gender: "F", graduation: "BA" },
];

const groupByGraduation = (data) => {
  return data.reduce((acc, item) => {
    if (!acc[item.graduation]) {
      acc[item.graduation] = [];
    }
    acc[item.graduation].push(item);
    return acc;
  }, {});
};

const grouped = groupByGraduation(myArray);

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50"
      >
        <h5 className="text-lg font-semibold">{title}</h5>
        <svg
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-50">
          {content.map((item, index) => (
            <div key={index} className="p-2 border-b last:border-b-0">
              <p>
                <strong>Name:</strong> {item.name}
              </p>
              <p>
                <strong>Age:</strong> {item.age}
              </p>
              <p>
                <strong>Gender:</strong> {item.gender}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <div className="mx-auto max-w-4xl">
        {Object.keys(grouped).map((graduation, idx) => (
          <AccordionItem
            key={idx}
            title={graduation}
            content={grouped[graduation]}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
