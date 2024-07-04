import { useState, useEffect } from 'react';

import Boxes from './Boxes.jsx';
import Box from './Box.jsx';
import StyleDisplay from './StyleDisplay.jsx';
import Buttons from './Buttons.jsx';

export default function FlexBox() {
  const [currentStyles, setCurrentStyles] = useState([]);
  const [numberOfBoxes, setNumberOfBoxes] = useState(5);

  const handleSelectChange = (event) => {
    setNumberOfBoxes(parseInt(event.target.value));
  };

  useEffect(() => {
    document.title = `Flexbox Playground | An interactive tool that allows developers to experiment with flexbox styles and generate custom Tailwind CSS classes`;
  }, []);

  return (
    <div className='flex flex-col items-center w-full h-screen gap-3 p-5 bg-gray-950'>
      <Boxes currentStyles={currentStyles}>
        {[...Array(numberOfBoxes)].map((_, index) => (
          <Box key={index}>{index + 1}</Box>
        ))}
      </Boxes>
      <StyleDisplay
        currentStyles={currentStyles}
        numberOfBoxes={numberOfBoxes}
        handleSelectChange={handleSelectChange}
      />
      <Buttons setCurrentStyles={setCurrentStyles} />
    </div>
  );
}