import { useState } from 'react';

import { contradictoryStyles } from './utilities/contradictoryStyles';
import { btnTextAndStyle } from './utilities/btnTextAndStyle';

export default function Buttons({ setCurrentStyles }) {
  const [activeButtons, setActiveButtons] = useState([]);
  const [currentStylesState, setCurrentStylesState] = useState([]);

  const handleButtonClick = (index) => {
    const newStyle = btnTextAndStyle[index][1];
    const isActive = activeButtons.includes(index);

    // Remove contradictory styles and their corresponding active buttons
    const updatedStyles = currentStylesState.filter(
      (style) => !contradictoryStyles[newStyle]?.includes(style)
    );
    const updatedActiveButtons = activeButtons.filter(
      (buttonIndex) => !contradictoryStyles[newStyle]?.includes(btnTextAndStyle[buttonIndex][1])
    );

    // Add or remove the new style and update active buttons
    const newStyles = isActive
      ? updatedStyles.filter((style) => style !== newStyle)
      : [...updatedStyles, newStyle];
    const newActiveButtons = isActive
      ? updatedActiveButtons.filter((buttonIndex) => buttonIndex !== index)
      : [...updatedActiveButtons, index];

    setCurrentStylesState(newStyles);
    setCurrentStyles(newStyles);
    setActiveButtons(newActiveButtons);
  };

  return (
    <div className='flex flex-wrap items-center justify-center w-full gap-3 p-3 font-bold border-2 rounded-md border-sky-700 h-fit lg:text-lg'>
      {btnTextAndStyle.map((btnProps, btnIndex) => (
        <div
          key={btnIndex}
          className={`flex items-center justify-center px-4 pt-2 pb-1 transition-colors duration-300 border-2 border-sky-400 rounded-lg lg:px-5 lg:pt-3 lg:pb-2 cursor-pointer ${activeButtons.includes(btnIndex)
            ? 'bg-sky-900 text-sky-400'
            : 'bg-sky-400 text-slate-800'
            }`}
          onClick={() => handleButtonClick(btnIndex)}
        >
          {btnProps[0]}
        </div>
      ))}
    </div>
  );
}