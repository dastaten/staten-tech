export default function ResultsTop({ data }) {
  return (
    <div>
      <div className='pl-2 mb-3 text-3xl sm:text-4xl drop-shadow-md'>{data.name}</div>
      <div className='pl-2 font-bold text-8xl sm:text-[7rem] drop-shadow-md'>{data.main ? `${data.main.temp.toFixed()}°F` : null}</div>
      <div className='pt-3 pr-5 text-2xl text-right sm:pr-10 sm:text-3xl drop-shadow-md'>{data.weather ? `${data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)}` : null}</div>
    </div>
  );
}