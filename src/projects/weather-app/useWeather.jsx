import { useState, useCallback } from 'react';
import axios from 'axios';

const useWeather = (apiKey) => {
  const [data, setData] = useState({});
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchWeather = useCallback(async (location) => {
    if (location === '') return;

    setIsLoading(true);
    setNotFound(false);

    try {
      const url = /^\d+$/.test(location)
        ? `https://api.openweathermap.org/data/2.5/weather?zip=${location},US&units=imperial&appid=${apiKey}`
        : `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;

      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setNotFound(true);
      setData({});
    } finally {
      setIsLoading(false);
    }
  }, [apiKey]);

  return { data, notFound, isLoading, fetchWeather };
};

export default useWeather;