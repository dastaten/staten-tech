export default function ResultsBottom({ data }) {
  return (
    <div>
      <div className='flex justify-center w-full gap-3 text-sm text-gray-100 sm:gap-5 sm:text-xl'>
        <div className='flex flex-col items-center px-5 py-3 text-center bg-black rounded-2xl sm:py-4 sm:px-6 bg-opacity-20 sm:rounded-[20px] mx-0'>
          <p className='pb-1 font-bold'>Feels Like</p>
          {data.main ? `${data.main.feels_like.toFixed()}°F` : null}
        </div>
        <div className='flex flex-col items-center px-5 py-3 text-center bg-black rounded-2xl sm:py-4 sm:px-6 bg-opacity-20 sm:rounded-[20px] mx-0'>
          <p className='pb-1 font-bold'>Wind</p>
          {data.wind ? `${data.wind.speed.toFixed()} MPH` : null}
        </div>
        <div className='flex flex-col items-center px-5 py-3 text-center bg-black rounded-2xl sm:py-4 sm:px-6 bg-opacity-20 sm:rounded-[20px] mx-0'>
          <p className='pb-1 font-bold'>Humidity</p>
          {data.main ? `${data.main.humidity.toFixed()}%` : null}
        </div>
      </div>
    </div>
  );
}