// src/AnalyticsWrapper.jsx
import { useEffect } from 'react';
import { logPageView } from './analytics';

export const AnalyticsWrapper = ({ children }) => {
  useEffect(() => {
    const handleRouteChange = (location) => {
      logPageView(location.pathname);
    };

    // Log initial page view
    logPageView(window.location.pathname);

    // Add listener for route changes
    window.addEventListener('popstate', () => handleRouteChange(window.location));

    return () => {
      window.removeEventListener('popstate', () => handleRouteChange(window.location));
    };
  }, []);

  return children;
};