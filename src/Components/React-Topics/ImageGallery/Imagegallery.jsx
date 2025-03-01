import { useState } from "react";
import { sculptureList } from "./data.js";

export default function ImageGallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < sculptureList.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={handleNextClick}
          className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition-colors"
        >
          Next
        </button>
        <span className="text-gray-600">
          {index + 1} of {sculptureList.length}
        </span>
      </div>

      <h2 className="text-2xl font-semibold mb-2">
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>

      <button
        onClick={handleMoreClick}
        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors mb-4"
      >
        {showMore ? "Hide" : "Show"} details
      </button>

      {showMore && (
        <p className="text-gray-700 mb-4">{sculpture.description}</p>
      )}

      <img
        src={sculpture.url}
        alt={sculpture.alt}
        className="w-full h-auto rounded-lg shadow-md"
      />
    </div>
  );
}