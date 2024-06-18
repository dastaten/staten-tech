import { useState } from 'react';

import { contradictoryStyles } from './utilities/contradictoryStyles';
import { btnTextAndStyle } from './utilities/btnTextAndStyle';

export default function Buttons({ setCurrentStyles }) {
  const [activeButtons, setActiveButtons] = useState([]);
  const [currentStylesState, setCurrentStylesState] = useState([]);

  const handleButtonClick = (index) => {
    setActiveButtons((prevActiveButtons) => {
      const isActive = prevActiveButtons.includes(index);
      return isActive
        ? prevActiveButtons.filter((i) => i !== index)
        : [...prevActiveButtons, index];
    });

    setCurrentStylesState((prevCurrentStyles) => {
      const style = btnTextAndStyle[index][1];
      const isStylePresent = prevCurrentStyles.includes(style);
      const newStyles = isStylePresent
        ? prevCurrentStyles.filter((s) => s !== style)
        : [...prevCurrentStyles, style];

      setCurrentStyles(newStyles);
      return newStyles;
    });
  };

  const isButtonDisabled = (index) => {
    const style = btnTextAndStyle[index][1];
    const contradictoryStylesForCurrentStyle = contradictoryStyles[style] || [];
    return contradictoryStylesForCurrentStyle.some((s) => currentStylesState.includes(s));
  };

  return (
    <div className='flex flex-wrap items-center justify-center w-full gap-3 p-3 font-bold border-2 rounded-md border-sky-700 h-fit lg:text-lg'>
      {btnTextAndStyle.map((btnProps, btnIndex) => (
        <div
          key={btnIndex}
          className={`flex items-center justify-center px-4 pt-2 pb-1 transition-colors duration-300 border-2 border-sky-400 rounded-lg lg:px-5 lg:pt-3 lg:pb-2  ${activeButtons.includes(btnIndex)
            ? 'bg-sky-900 text-sky-400'
            : 'bg-sky-400 text-slate-800'
            } ${isButtonDisabled(btnIndex)
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:cursor-pointer'}`}
          onClick={() => !isButtonDisabled(btnIndex) && handleButtonClick(btnIndex)}
          disabled={isButtonDisabled(btnIndex)}
        >
          {btnProps[0]}
        </div>
      ))}
    </div>
  );
}