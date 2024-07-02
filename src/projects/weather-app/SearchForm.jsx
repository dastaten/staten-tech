// SearchForm.jsx
import { useEffect, useRef, useState } from 'react';

export default function SearchForm({ location, handleInputChange, searchLocation, suggestions, setLocation, onInputClear }) {
  const inputRef = useRef(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setSelectedIndex(-1);
  }, [suggestions]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
      const selected = suggestions[selectedIndex];
      handleSuggestionSelect(selected);
    } else {
      searchLocation(location);
    }
    clearInput();
  };

  const handleSuggestionSelect = (suggestion) => {
    const locationString = [suggestion.name, suggestion.state, suggestion.country]
      .filter(Boolean)
      .join(', ');
    setLocation(locationString);
    searchLocation(suggestion.lat, suggestion.lon);
    clearInput();
  };

  const clearInput = () => {
    setLocation('');
    onInputClear();
    setShowSuggestions(false);
    setSelectedIndex(-1);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleInputFocus = () => {
    setShowSuggestions(true);
  };

  const handleLocalInputChange = (e) => {
    const value = e.target.value;
    handleInputChange(e);
    setShowSuggestions(true);
    if (value.length === 0) {
      onInputClear();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prevIndex =>
        prevIndex < suggestions.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : -1));
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      handleSuggestionSelect(suggestions[selectedIndex]);
    }
  };

  return (
    <div className='relative flex justify-center text-gray-800 pb-9'>
      <form onSubmit={handleSubmit} className="relative">
        <input
          ref={inputRef}
          className='p-2 pl-4 pr-10 w-[265px] text-sm border-2 rounded-full border-slate-300 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-transparent transition duration-200 ease-in-out'
          value={location}
          onChange={handleLocalInputChange}
          onFocus={handleInputFocus}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          onKeyDown={handleKeyDown}
          placeholder="Enter city name"
          type="text"
        />
        {showSuggestions && suggestions.length > 0 && (
          <ul className="absolute z-10 w-full mt-1 overflow-auto bg-white border border-gray-300 shadow-xl rounded-xl max-h-70">
            {suggestions.map((suggestion, index) => {
              const key = `${suggestion.name}-${suggestion.state || ''}-${suggestion.country}-${index}`;
              return (
                <li
                  key={key}
                  className={`px-4 py-2 text-sm cursor-pointer transition duration-200 ease-in-out
                    ${index === selectedIndex
                      ? 'bg-blue-100 text-blue-800'
                      : 'hover:bg-gray-100'
                    }`}
                  onClick={() => handleSuggestionSelect(suggestion)}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  <div className="font-semibold">{suggestion.name}</div>
                  <div className="text-xs text-gray-500">
                    {[suggestion.state, suggestion.country].filter(Boolean).join(', ')}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </form>
    </div>
  );
}
