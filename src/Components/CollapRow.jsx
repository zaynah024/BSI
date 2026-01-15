import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const data = [
  {
    id: 1,
    title: "Our Vision",
    content:
      "We aim to provide the best consultancy services to all our clients and guide them through the whole process, making it a seamless experience for them.",
  },
  {
    id: 2,
    title: "Our CEO",
    content:
      "Our CEO, John Doe, has over 20 years of experience in the education consultancy sector and is passionate about helping students achieve their dreams.",
  },
];

const CollapsibleRow = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b rounded-md   mb-2 overflow-hidden">
      <div
        className="flex justify-between items-center px-4 py-3 cursor-pointer    "
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{title}</span>

        {isOpen ? (
          <span className="rounded-full p-2 text-xs border">
            <FaMinus />
          </span>
        ) : (
          <span className="rounded-full p-2 text-xs border">
            <FaPlus />
          </span>
        )}
      </div>

      {isOpen && (
        <div className="px-4 py-3 bg-white text-sm text-gray-700  ">
          {content}
        </div>
      )}
    </div>
  );
};

const CollapsRow = () => {
  return (
    <div className="py-6 max-w-xl mx-auto">
      {data.map((item) => (
        <CollapsibleRow
          key={item.id}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
};

export default CollapsRow;
