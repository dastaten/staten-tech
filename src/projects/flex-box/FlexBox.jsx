import Box from './Box.jsx';
import Buttons from './Buttons.jsx';

export default function FlexBox() {

  return (
    <div className='flex flex-col items-center w-full h-screen gap-3 p-5 bg-gray-950'>
      <div className={`w-full border-2 rounded-md border-sky-700 grow`}>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
        <Box>5</Box>
        <Box>6</Box>
      </div>
      <div className='flex border-2 rounded-md border-sky-700 h-[5vh] w-full text-sky-200 justify-center items-center text-lg lg:text-xl font-bold pt-1'>
        Current styles:&nbsp;<span className='text-sky-300'>{`currentStyles`}</span>
      </div>
      <div className='flex flex-wrap items-center justify-center w-full gap-3 p-3 font-bold border-2 rounded-md border-sky-700 h-fit lg:text-lg'>
        <Buttons />
      </div>
    </div>
  );
}