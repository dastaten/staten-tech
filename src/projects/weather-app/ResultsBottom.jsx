export default function ResultsBottom({ data }) {
  return (
    <div>
      <div className='flex justify-center w-full gap-4 text-gray-100 sm:gap-4 sm:text-xl'>
        <div className='flex flex-col items-center px-6 pt-2 pb-2 text-center bg-black rounded-2xl sm:pt-4 sm:pb-4 sm:px-7 bg-opacity-20 sm:rounded-3xl'>
          <p className='font-bold'>Feel</p>
          {data.main ? `${data.main.feels_like.toFixed()}°F` : null}
        </div>
        <div className='flex flex-col items-center px-6 pt-2 pb-2 text-center bg-black rounded-2xl sm:pt-4 sm:pb-4 sm:px-7 bg-opacity-20 sm:rounded-3xl'>
          <p className='font-bold'>Humidity</p>
          {data.main ? `${data.main.humidity.toFixed()}%` : null}
        </div>
        <div className='flex flex-col items-center px-6 pt-2 pb-2 text-center bg-black rounded-2xl sm:pt-4 sm:pb-4 sm:px-7 bg-opacity-20 sm:rounded-3xl'>
          <p className='font-bold'>Wind</p>
          {data.wind ? `${data.wind.speed.toFixed()} MPH` : null}
        </div>
      </div>
    </div>
  );
}