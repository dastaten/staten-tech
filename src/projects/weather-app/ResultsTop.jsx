export default function ResultsTop({ data }) {
  const iconUrl = data.weather ? `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` : null;

  return (
    <div>
      <div className='flex items-center pl-2 mb-3 text-2xl sm:text-3xl'>
        {iconUrl && <img src={iconUrl} alt="Weather Icon" className="w-10 h-10 mr-2 drop-shadow-md" />}
        <span className="drop-shadow-md">
          {data.name} {data.sys ? `(${data.sys.country})` : null}
        </span>
      </div>
      <div className='pl-2 font-bold text-8xl sm:text-[7rem] drop-shadow-md'>
        {data.main ? `${data.main.temp.toFixed()}°F` : null}
      </div>
      <div className='pt-3 text-xl text-right pr-7 sm:pr-10 sm:text-2xl drop-shadow-md'>
        {data.weather ? `${data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)}` : null}
      </div>
    </div>
  );
}