import { useState } from 'react';

import Boxes from './Boxes.jsx';
import Box from './Box.jsx';
import StyleDisplay from './StyleDisplay.jsx';
import Buttons from './Buttons.jsx';

export default function FlexBox() {
  const [currentStyles, setCurrentStyles] = useState([]);

  return (
    <div className='flex flex-col items-center w-full h-screen gap-3 p-5 bg-gray-950'>
      <Boxes currentStyles={currentStyles}>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
        <Box>5</Box>
        <Box>6</Box>
      </Boxes>
      <StyleDisplay currentStyles={currentStyles} />
      <Buttons setCurrentStyles={setCurrentStyles} />
    </div>
  );
}