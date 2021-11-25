import React, { useEffect, useState } from "react";
import axios from "axios";
import { Weather } from "./Weather";

export const Country = ({ flag, name, capital, subregion, population }) => {
  const [weather, setWeather] = useState(undefined);
  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    setTimeout(() => {
      axios.get(apiWeatherURL).then((response) => {
        const { data } = response;
        setWeather(data);
      });
    }, 2000);

    console.log(apiWeatherURL);
  }, [apiWeatherURL]);
  return (
    <div className="country">
      <h3 className="countryName">
        <strong>{name}</strong>
      </h3>

      <div className="country-content">
        <div className="image-wrap">
          <img src={flag} alt={name} />
        </div>
        <div className="country-items">
          <p className="country-item">
            <strong>Capital: </strong>
            {capital}
          </p>
          <p className="country-item">
            <strong>Region: </strong>
            {subregion}
          </p>
          <p className="country-item">
            <strong>Population: </strong>
            {population}
          </p>
        </div>
        <Weather weather={weather} />
        {/*loading === true ? (
          <div className="spinner"></div>
        ) : (
          <Weather weather={weather} />
        )*/}
      </div>
    </div>
  );
};
