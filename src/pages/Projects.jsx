import { useState, useEffect } from 'react';

import Section from '../components/Section';
import ProjectFlexBoxPic from '/project-flex-box.jpg';
import ProjectWeatherAppPic from '/project-weather-app.jpg';
import Project from '../components/Project';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Section>
      <div className={`flex flex-col items-center justify-center w-full transition-opacity duration-500 ${isVisible ? ' opacity-100' : 'opacity-0'}`}>

        <div className='px-6 pt-4 pb-3 mb-6 text-lg md:text-xl font-bold rounded-full w-fit h-fit bg-dark text-alt border-default border-[1px]'>React + Tailwind
        </div>

        <Project
          projectTitle='Flexbox Playground'
          projectLink='/flexbox'
          ProjectPic={ProjectFlexBoxPic}>
          An interactive tool that allows developers to experiment with flexbox styles and generate custom Tailwind CSS classes. Key features include:
          <ul className='pt-3 pb-4 pl-4 ml-3 list-disc'>
            <li className='pl-1'>Customize the number of boxes</li>
            <li className='pl-1'>Explore various flexbox properties like direction, justification, and alignment</li>
            <li className='pl-1'>Live preview of style changes</li>
            <li className='pl-1'>Copy generated styles to clipboard for seamless integration</li>
          </ul>
          The Flexbox Playground streamlines the process of creating responsive layouts, making it an invaluable resource for both beginners learning flexbox and experienced developers seeking a quick styling solution.
        </Project>

        <Project
          projectTitle='WeatherSense'
          projectLink='/weather-app'
          ProjectPic={ProjectWeatherAppPic}>
          An intelligent weather application built with React, offering enhanced features for a superior user experience. Key features include:
          <ul className='pt-3 pb-4 pl-4 ml-3 list-disc'>
            <li className='pl-1'>Real-time city suggestions as users type, ensuring accurate location selection</li>
            <li className='pl-1'>Dynamic weather icon display next to the city name</li>
            <li className='pl-1'>Country code display for clear geographical context</li>
            <li className='pl-1'>Comprehensive weather data including temperature, {`"feels like"`} temperature, wind speed, and humidity</li>
            <li className='pl-1'>Responsive design for optimal viewing on all devices</li>
          </ul>
          WeatherSense demonstrates advanced React development, API integration, and user-centric design, setting it apart from typical weather apps. It showcases the ability to create complex, interactive web applications with a focus on user experience and functionality.
        </Project>

      </div>
    </Section>
  );
}