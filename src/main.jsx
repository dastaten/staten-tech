import React from 'react';
import ReactDOM from 'react-dom/client';

// Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';

// Styles
import './index.css';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
      errorElement: <PageNotFound />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/skills',
      element: <Skills />
    },
    {
      path: '/projects',
      element: <Projects />
    },
    {
      path: '/contact',
      element: <Contact />
    },
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
);