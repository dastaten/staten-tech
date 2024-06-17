import { useState } from 'react';
import Box from './Box.jsx';

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

export default function FlexBox() {
  const [activeButtons, setActiveButtons] = useState([]);
  const [currentStyles, setCurrentStyles] = useState([]);

  const handleButtonClick = (index) => {
    setActiveButtons((prevActiveButtons) => {
      const isActive = prevActiveButtons.includes(index);
      return isActive
        ? prevActiveButtons.filter((i) => i !== index)
        : [...prevActiveButtons, index];
    });

    setCurrentStyles((prevCurrentStyles) => {
      const style = btnTextAndStyle[index][1];
      const isStylePresent = prevCurrentStyles.includes(style);
      return isStylePresent
        ? prevCurrentStyles.filter((s) => s !== style)
        : [...prevCurrentStyles, style];
    });
  };

  return (
    <div className='flex flex-col items-center w-full h-screen gap-3 p-5 bg-gray-950'>
      <div className={`w-full border-2 rounded-md border-sky-700 grow ${currentStyles.join(' ')}`}>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
        <Box>5</Box>
        <Box>6</Box>
      </div>
      <div className='flex border-2 rounded-md border-sky-700 h-[5vh] w-full text-sky-200 justify-center items-center text-lg lg:text-xl font-bold pt-1'>
        Current styles:&nbsp;<span className='text-sky-300'>{currentStyles.join(' ')}</span>
      </div>
      <div className='flex flex-wrap items-center justify-center w-full gap-3 p-3 font-bold border-2 rounded-md border-sky-700 h-fit lg:text-lg'>
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
      </div>
    </div>
  );
}