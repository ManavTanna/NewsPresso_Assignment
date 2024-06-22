import React, { useState } from 'react';

const CategoryFilter = ({ onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onChange(category);
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="relative inline-block">
      <button
        id="categoryDropdownButton"
        type="button"
        onClick={toggleDropdown}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        aria-haspopup="listbox"
        aria-expanded={isOpen ? "true" : "false"}
      >
        {selectedCategory || "Select Category"}
        <svg className={`w-3 h-3 ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>

      {isOpen && (
        <ul
          id="categoryDropdownOptions"
          className="absolute z-10 w-44 mt-1 bg-blue-700 divide-y divide-gray-100 rounded-lg shadow-lg"
          role="listbox"
          aria-labelledby="categoryDropdownButton"
        >
          {["General", "Business", "Technology", "Entertainment", "Health", "Science", "Sports"].map(category => (
            <li
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 cursor-pointer ${selectedCategory === category ? 'bg-blue-200 text-blue-800' : 'hover:bg-blue-800 dark:hover:bg-blue-700'}`}
              role="option"
              aria-selected={selectedCategory === category ? "true" : "false"}
            >
              {category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryFilter;
