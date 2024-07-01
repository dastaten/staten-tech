import { useState, useEffect, useCallback } from 'react';
import clouds from './images/clouds.jpg';
import SearchForm from './SearchForm';
import ResultsTop from './ResultsTop';
import ResultsBottom from './ResultsBottom';
import useWeather from './useWeather';
import TransitionWrapper from './TransitionWrapper';

export default function Main() {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const [location, setLocation] = useState('');

  const { data, notFound, isLoading, fetchWeather } = useWeather(apiKey);

  useEffect(() => {
    document.title = 'React Weather App | A Staten Tech Project';
  }, []);

  const searchLocation = useCallback(() => {
    fetchWeather(location);
  }, [location, fetchWeather]);

  const handleInputChange = useCallback((event) => {
    const value = event.target.value;
    setLocation(value);
  }, []);

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
          <p className='text-lg text-center sm:text-xl px-7'>Please check the city name or US zip code you entered.</p>
        </div>
      );
    } else {
      return (
        <div className='flex flex-col items-center justify-start h-full'>
          <h1 className="py-5 text-4xl font-bold sm:text-5xl">Welcome!</h1>
          <p className="text-lg text-center sm:text-xl px-7">Enter a city name or US zip code to view weather information.</p>
        </div>
      );
    }
  };

  return (
    <div className="relative h-screen font-weather">
      <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url(${clouds})` }}></div>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative z-10 flex flex-col h-full py-10 text-gray-50">
        <div className="flex flex-col flex-grow">
          <SearchForm
            location={location}
            handleInputChange={handleInputChange}
            searchLocation={searchLocation}
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