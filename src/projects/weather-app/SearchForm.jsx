import { useEffect, useRef } from 'react';

export default function SearchForm({ location, handleInputChange, searchLocation }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className='flex justify-center text-gray-800 pb-9'>
      <form onSubmit={searchLocation}>
        <input
          ref={inputRef}
          className='p-1 pt-2 pl-4 border-2 rounded-full border-slate-300 focus:outline-none focus:ring focus:ring-[#c5e8ff] w-[265px] text-slate-500'
          value={location}
          onChange={handleInputChange}
          placeholder="Enter city name or US zip code"
          type="text"
        />
      </form>
    </div>
  );
}