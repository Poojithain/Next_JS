import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input 
        type="text" 
        placeholder="Search..." 
        value={query} 
        onChange={handleChange} 
        className="border rounded-l px-4 py-2 focus:outline-none focus:border-blue-500 
                   shadow-md focus:shadow-lg transition duration-300 ease-in-out"
        style={{ minWidth: '200px' }}
      />
      <button 
        type="submit" 
        className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 
                   shadow-md focus:shadow-lg transition duration-300 ease-in-out"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
    