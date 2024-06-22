import React, { useState } from 'react';

const countries = [
  { code: 'in', name: 'India' },
  { code: 'us', name: 'United States' },
  { code: 'gb', name: 'United Kingdom' },
  { code: 'ca', name: 'Canada' },
  { code: 'au', name: 'Australia' },
  { code: 'jp', name: 'Japan' },
  { code: 'ru', name: 'Russia' },
  
];

const CountryFilter = ({ onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    onChange(country);
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="relative inline-block">
      <button
        id="countryDropdownButton"
        type="button"
        onClick={toggleDropdown}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        aria-haspopup="listbox"
        aria-expanded={isOpen ? "true" : "false"}
      >
        {selectedCountry ? countries.find(c => c.code === selectedCountry)?.name : "Select Country"}
        <svg className={`w-3 h-3 ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>

      {isOpen && (
        <ul
          id="countryDropdownOptions"
          className="absolute z-10 w-44 mt-1 bg-blue-700 divide-y divide-gray-100 rounded-lg shadow-lg"
          role="listbox"
          aria-labelledby="countryDropdownButton"
        >
          {countries.map(country => (
            <li
              key={country.code}
              onClick={() => handleCountryChange(country.code)}
              className={`px-4 py-2 cursor-pointer ${selectedCountry === country.code ? 'bg-blue-200 text-blue-800' : 'hover:bg-blue-800 dark:hover:bg-blue-700'}`}
              role="option"
              aria-selected={selectedCountry === country.code ? "true" : "false"}
            >
              {country.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountryFilter;
