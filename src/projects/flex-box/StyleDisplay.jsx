import copy from '/copy.png';

export default function StyleDisplay({ currentStyles, numberOfBoxes, handleSelectChange }) {
  return (
    <div className='flex w-full gap-3'>
      <div className='flex border-2 rounded-md border-sky-700 min-h-[5vh] w-fit min-w-[130px] text-sky-200 justify-center items-center text-lg lg:text-xl font-bold pt-1 px-3'>
        <span>
          Boxes:
          <select
            className='ml-2 rounded-md outline-none bg-gray-950 text-sky-300'
            value={numberOfBoxes}
            onChange={handleSelectChange}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
            <option value={11}>11</option>
            <option value={12}>12</option>
            <option value={13}>13</option>
            <option value={14}>14</option>
            <option value={15}>15</option>
          </select>
        </span>
      </div>
      <div className='flex border-2 rounded-md border-sky-700 min-h-[5vh] grow text-sky-200 justify-center items-center text-lg lg:text-xl font-bold pt-1'>
        {currentStyles.includes('flex') ? (
          <div className='flex flex-wrap'>
            <span className='whitespace-nowrap'>Current styles:&nbsp;</span>
            <span className='text-sky-300'>{currentStyles.join(' ')}</span>
            {<img src={copy} alt='copy' className='w-5 h-5 ml-3 cursor-pointer' onClick={() => navigator.clipboard.writeText(currentStyles.join(' '))} />}
          </div>
        ) : <span>Select <span className='text-sky-300'>Flex</span> to begin</span>}
      </div>
    </div>
  );
}