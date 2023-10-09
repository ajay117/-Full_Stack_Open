import { useEffect, useState } from "react";
import axios from "axios";

const PopulateCountry = ({ country }) => {
  const apiKey = import.meta.env.VITE_WEATHER_KEY;
  let [data, setData] = useState(null);
  const {
    capital,
    languages,
    area,
    flags,
    name: { common },
  } = country;
  const [lat, lon] = country.capitalInfo.latlng;
  const flagStyle = {
    width: "200px",
    height: "auto",
  };

  useEffect(() => {
    const urlAddress = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(urlAddress).then((response) => setData(response.data));
  }, []);

  //   let { country } = country;
  const languageList = (langObj) => {
    return Object.keys(langObj).map((lang, index) => (
      <li key={index}>{langObj[lang]}</li>
    ));
  };
  return (
    <div>
      <h1>{common}</h1>
      <br />
      <p>capital {capital}</p>
      <p>area {area}</p>
      <p>
        <b>languages</b>:
      </p>
      <ul>{languageList(languages)}</ul>

      <img style={flagStyle} src={flags.png} alt="" />

      {data && (
        <div className="weather">
          <p>
            <b>Weather in {capital}</b>
          </p>

          <p>temperature {data.main.temp} Celcius</p>

          <p>{data.weather.icon}</p>
          <img
            src={` https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt=""
          />
          <p>wind {data.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default PopulateCountry;
