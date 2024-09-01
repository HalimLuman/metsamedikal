import React from 'react';
import { CiSearch } from 'react-icons/ci';

const SearchBar = () => {
  return (
    <div className="flex justify-end">
      <form>
        <div className="flex items-center p-2 pl-4 border rounded-full">
          <input
            type="text"
            placeholder="Search for products..."
            className="outline-none flex-grow text-gray-600"
          />
          <button
            type="submit"
            className="p-2 bg-primary-blue hover:bg-primary-blue/80 rounded-full"
          >
            <CiSearch className="text-xl text-white" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
