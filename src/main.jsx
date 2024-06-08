import React from 'react';
import ReactDOM from 'react-dom/client';

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

// Styles
import './index.css';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout><Home /></Layout>,
      errorElement: <Layout error='404 error'><PageNotFound /></Layout>
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
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);