import { useState, useEffect, useCallback } from 'react';
import clouds from './images/clouds.jpg';
import SearchForm from './SearchForm';
import ResultsTop from './ResultsTop';
import ResultsBottom from './ResultsBottom';
import useWeather from './useWeather';
import TransitionWrapper from './TransitionWrapper';
import useDebounce from './useDebounce';

export default function Main() {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const [location, setLocation] = useState('');
  const debouncedLocation = useDebounce(location, 150);

  const { data, notFound, isLoading, fetchWeather, suggestions, fetchSuggestions, clearSuggestions } = useWeather(apiKey);

  useEffect(() => {
    document.title = 'WeatherSense | An intelligent weather application built with React';
  }, []);

  useEffect(() => {
    if (debouncedLocation) {
      fetchSuggestions(debouncedLocation);
    } else {
      clearSuggestions();
    }
  }, [debouncedLocation, fetchSuggestions, clearSuggestions]);

  const searchLocation = useCallback((lat, lon) => {
    fetchWeather(lat, lon);
  }, [fetchWeather]);

  const handleInputChange = useCallback((event) => {
    const value = event.target.value;
    setLocation(value);
  }, []);

  const handleInputClear = useCallback(() => {
    setLocation('');
    clearSuggestions();
  }, [clearSuggestions]);

  const renderContent = () => {
    if (data.name) {
      return (
        <>
          <ResultsTop data={data} />
          <ResultsBottom data={data} />
        </>
      );
    } else if (notFound) {
      return (
        <div className='flex flex-col items-center justify-start h-full'>
          <p className='py-5 text-3xl font-bold sm:text-4xl'>Location not found.</p>
          <p className='text-lg text-center sm:text-xl px-7'>Please check the city name you entered.</p>
        </div>
      );
    } else {
      return (
        <div className='flex flex-col items-center justify-start h-full'>
          <h1 className="py-5 text-4xl font-bold sm:text-5xl">Welcome!</h1>
          <p className="text-lg text-center sm:text-xl px-7">Enter a city name to view weather information.</p>
        </div>
      );
    }
  };

  return (
    <div className="relative h-screen font-weather">
      <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url(${clouds})` }}></div>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative z-10 flex flex-col h-full pt-10 pb-24 sm:pb-12 text-gray-50">
        <div className="flex flex-col flex-grow">
          <SearchForm
            location={location}
            handleInputChange={handleInputChange}
            searchLocation={searchLocation}
            suggestions={suggestions}
            setLocation={setLocation}
            onInputClear={handleInputClear}
          />
          <div className="flex-grow w-full max-w-md mx-auto">
            <TransitionWrapper isLoading={isLoading}>
              {renderContent()}
            </TransitionWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}
