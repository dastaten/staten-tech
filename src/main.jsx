import React from 'react';
import ReactDOM from 'react-dom/client';

// Analytics
import { initGA } from './analytics';
import { AnalyticsWrapper } from './AnalyticsWrapper';

// Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Components
import Layout from './layouts/Layout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Confirmation from './pages/Confirmation';
import PageNotFound from './pages/PageNotFound';
import FlexBox from './projects/flex-box/FlexBox';
import WeatherApp from './projects/weather-app/Main';
import RiseOfTheThrall from './projects/rise-of-the-thrall/RiseOfTheThrall';

// Styles
import './index.css';

// Initialize GA
initGA('G-RTR6J56N84');

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout><Home /></Layout>,
      errorElement: <Layout error='Whoops...'><PageNotFound /></Layout>
    },
    {
      path: '/about',
      element: <Layout><About /></Layout>,
    },
    {
      path: '/skills',
      element: <Layout><Skills /></Layout>,
    },
    {
      path: '/projects',
      element: <Layout><Projects /></Layout>,
    },
    {
      path: '/contact',
      element: <Layout><Contact /></Layout>,
    },
    {
      path: '/confirmation',
      element: <Layout confirmEmail='Email sent!'><Confirmation /></Layout>,
    },
    {
      path: '/flexbox',
      element: <FlexBox />,
    },
    {
      path: '/weather-app',
      element: <WeatherApp />,
    },
    {
      path: '/rise-of-the-thrall',
      element: <RiseOfTheThrall />,
    },
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnalyticsWrapper>
      <RouterProvider router={router} />
    </AnalyticsWrapper>
  </React.StrictMode>
);