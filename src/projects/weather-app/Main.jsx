// OpenWeather Weather App for portfolio project
import { useState } from 'react';
import axios from 'axios';

import clouds from './images/clouds.jpg';

export default function Main() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;

  const searchLocation = async (event) => {
    event.preventDefault();

    if (location === '') {
      return;
    }

    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      window.alert('Hmm... something went wrong. Please try again.');
    }

    setLocation('');
  };

  return (
    <div className="relative h-screen">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${clouds})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full py-10 text-gray-50">
        <div className='flex flex-col flex-grow'>
          <div className='flex justify-center pb-12 text-gray-800'>
            <form onSubmit={searchLocation}>
              <input
                className='p-1 pt-2 pl-4 border-2 rounded-full border-slate-300 focus:outline-none focus:ring focus:ring-[#c5e8ff]'
                value={location}
                onChange={event => setLocation(event.target.value)}
                placeholder="Enter city name"
                type="text"
              />
            </form>
          </div>
          <div className='flex flex-col justify-between h-full mx-auto max-w-fit'>
            <div>
              <div className='mb-5 text-2xl sm:text-4xl'>{data.name}</div>
              <div className='mb-1 font-bold text-8xl sm:text-9xl'>{data.main ? `${data.main.temp.toFixed()}°F` : null}</div>
              <div className='mr-5 text-xl text-right sm:mr-10 sm:text-2xl'>{data.weather ? `${data.weather[0].main}` : null}</div>
            </div>
            {data.name && (
              <div className='flex justify-between w-full gap-3 text-gray-100 sm:gap-4 sm:text-2xl'>
                <div className='flex flex-col items-center px-6 pt-3 pb-2 text-center bg-black rounded-2xl sm:pt-5 sm:pb-4 sm:px-7 bg-opacity-20 sm:rounded-3xl'>
                  <p className='font-bold'>Feel</p>
                  {data.main ? `${data.main.feels_like.toFixed()}°F` : null}
                </div>
                <div className='flex flex-col items-center px-6 pt-3 pb-2 text-center bg-black rounded-2xl sm:pt-5 sm:pb-4 sm:px-7 bg-opacity-20 sm:rounded-3xl'>
                  <p className='font-bold'>Humidity</p>
                  {data.main ? `${data.main.humidity}%` : null}
                </div>
                <div className='flex flex-col items-center px-6 pt-3 pb-2 text-center bg-black rounded-2xl sm:pt-5 sm:pb-4 sm:px-7 bg-opacity-20 sm:rounded-3xl'>
                  <p className='font-bold'>Wind</p>
                  {data.wind ? `${data.wind.speed} MPH` : null}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}