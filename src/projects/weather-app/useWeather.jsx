import { useState, useCallback } from 'react';
import axios from 'axios';

export default function useWeather(apiKey) {
  const [data, setData] = useState({});
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const fetchWeather = useCallback(async (lat, lon) => {
    if (!lat || !lon) return;

    setIsLoading(true);
    setNotFound(false);

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
      const response = await axios.get(url);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setNotFound(true);
      setData({});
    } finally {
      setIsLoading(false);
    }
  }, [apiKey]);

  const fetchSuggestions = useCallback(async (input) => {
    if (input.length < 3) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=${apiKey}`
      );
      setSuggestions(response.data);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      setSuggestions([]);
    }
  }, [apiKey]);

  const clearSuggestions = useCallback(() => {
    setSuggestions([]);
  }, []);

  return {
    data,
    notFound,
    isLoading,
    fetchWeather,
    suggestions,
    fetchSuggestions,
    clearSuggestions
  };
}
