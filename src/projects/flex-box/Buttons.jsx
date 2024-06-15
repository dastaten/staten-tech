import { useState } from 'react';

const buttonTextAndStyle = {
  0: ['Flex', 'flex'],
  1: ['Row', 'flex-row'],
  2: ['Column', 'flex-col'],
  3: ['Row Reverse', 'flex-row-reverse'],
  4: ['Column Reverse', 'flex-col-reverse'],
  5: ['Wrap', 'flex-wrap'],
  6: ['No Wrap', 'flex-nowrap'],
  7: ['Justify Start', 'justify-start'],
  8: ['Justify Center', 'justify-center'],
  9: ['Justify End', 'justify-end'],
  10: ['Justify Between', 'justify-between'],
  11: ['Justify Around', 'justify-around'],
  12: ['Justify Evenly', 'justify-evenly'],
  13: ['Align Start', 'align-start'],
  14: ['Align Center', 'align-center'],
  15: ['Align End', 'align-end'],
};

export default function Buttons({ handleStyles }) {
  const [isActiveButtons, setIsActiveButtons] = useState(
    new Array(15).fill(false)
  );

  function handleClick(buttonIndex, style) {
    setIsActiveButtons((prevActiveButtons) => {
      const updatedActiveButtons = [...prevActiveButtons];
      updatedActiveButtons[buttonIndex] = !prevActiveButtons[buttonIndex];
      handleStyles(buttonIndex, style);
      return updatedActiveButtons;
    });
  }

  return (
    <>
      {isActiveButtons.map((buttonIndex, isActive) => (
        <div
          key={buttonIndex}
          className={`flex items-center justify-center px-4 pt-2 pb-1 transition-colors duration-300 border-2 rounded-lg lg:px-5 lg:pt-3 lg:pb-2 hover:cursor-pointer hover:bg-sky-900 border-sky-400 hover:text-sky-400 ${isActive ? 'bg-sky-900 text-sky-400' : 'bg-sky-400 text-slate-800'
            }`}
          onClick={() => handleClick(buttonIndex, buttonTextAndStyle[buttonIndex][1])}
        >
          {buttonTextAndStyle[buttonIndex][0]}
        </div>
      ))}
    </>
  );
}
