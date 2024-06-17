import { useState } from 'react';

const btnTextAndStyle = [
  ['Flex', 'flex'],
  ['Row', 'flex-row'],
  ['Column', 'flex-col'],
  ['Row Reverse', 'flex-row-reverse'],
  ['Column Reverse', 'flex-col-reverse'],
  ['Wrap', 'flex-wrap'],
  ['No Wrap', 'flex-nowrap'],
  ['Justify Start', 'justify-start'],
  ['Justify Center', 'justify-center'],
  ['Justify End', 'justify-end'],
  ['Justify Between', 'justify-between'],
  ['Justify Around', 'justify-around'],
  ['Justify Evenly', 'justify-evenly'],
  ['Align Start', 'align-start'],
  ['Align Center', 'align-center'],
  ['Align End', 'align-end']
];

const contradictoryStyles = {
  'flex-row': ['flex-col', 'flex-row-reverse', 'flex-col-reverse'],
  'flex-col': ['flex-row', 'flex-row-reverse', 'flex-col-reverse'],
  'flex-row-reverse': ['flex-row', 'flex-col', 'flex-col-reverse'],
  'flex-col-reverse': ['flex-row', 'flex-col', 'flex-row-reverse'],
  'flex-wrap': ['flex-nowrap', 'flex-wrap-reverse'],
  'flex-nowrap': ['flex-wrap', 'flex-wrap-reverse'],
  'flex-wrap-reverse': ['flex-wrap', 'flex-nowrap'],
  'justify-start': ['justify-end', 'justify-center', 'justify-between', 'justify-around', 'justify-evenly'],
  'justify-end': ['justify-start', 'justify-center', 'justify-between', 'justify-around', 'justify-evenly'],
  'justify-center': ['justify-start', 'justify-end', 'justify-between', 'justify-around', 'justify-evenly'],
  'justify-between': ['justify-start', 'justify-end', 'justify-center', 'justify-around', 'justify-evenly'],
  'justify-around': ['justify-start', 'justify-end', 'justify-center', 'justify-between', 'justify-evenly'],
  'justify-evenly': ['justify-start', 'justify-end', 'justify-center', 'justify-between', 'justify-around'],
  'align-start': ['align-end', 'align-center', 'align-stretch'],
  'align-end': ['align-start', 'align-center', 'align-stretch'],
  'align-center': ['align-start', 'align-end', 'align-stretch'],
  'align-stretch': ['align-start', 'align-end', 'align-center']
};

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
          className={`flex items-center justify-center px-4 pt-2 pb-1 transition-colors duration-300 border-2 border-sky-400 rounded-lg lg:px-5 lg:pt-3 lg:pb-2 hover:cursor-pointer ${activeButtons.includes(btnIndex)
            ? 'bg-sky-900 text-sky-400'
            : 'bg-sky-400 text-slate-800'
            } ${isButtonDisabled(btnIndex) ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={() => !isButtonDisabled(btnIndex) && handleButtonClick(btnIndex)}
          disabled={isButtonDisabled(btnIndex)}
        >
          {btnProps[0]}
        </div>
      ))}
    </div>
  );
}