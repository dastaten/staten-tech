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

export default function Buttons() {
  const [activeButtons, setActiveButtons] = useState([]);

  const handleButtonClick = (index) => {
    setActiveButtons((prevActiveButtons) => {
      const isActive = prevActiveButtons.includes(index);
      return isActive
        ? prevActiveButtons.filter((i) => i !== index)
        : [...prevActiveButtons, index];
    });
  };

  return (
    <>
      {btnTextAndStyle.map((btnProps, btnIndex) => (
        <div
          key={btnIndex}
          className={`flex items-center justify-center px-4 pt-2 pb-1 transition-colors duration-300 border-2 border-sky-400 rounded-lg lg:px-5 lg:pt-3 lg:pb-2 hover:cursor-pointer ${activeButtons.includes(btnIndex)
            ? 'bg-sky-900 text-sky-400'
            : 'bg-sky-400 text-slate-800'
            }`}
          onClick={() => handleButtonClick(btnIndex)}
        >
          {btnProps[0]}
        </div>
      ))}
    </>
  );
}