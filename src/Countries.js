import React from "react";
import { useState } from "react";
import { Country } from "./Country";
import axios from "axios";
export const Countries = () => {
  //PROPS NOTES STATE
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const apiCountriesURL = `https://restcountries.com/v2/name/${search}`;

  const [loading, setLoading] = useState(false);

  //AL ESCRIBIR EN TEXTAREA ACTUALIZA STATE DE NEWNOTE
  //const handleChange = (event) => {};

  //AL ENVIAR INFORMACIÖN CREA UNA NUEVA NOTA
  //Y LA AÑADE AL STATE DE LA LISTA DE NOTAS Y LA ACTUALIZA
  /*const handleSubmit = (event) => {
    event.preventDefault();
    
    });
  };*/
  /*useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios.get("https://restcountries.com/v2/all").then((response) => {
        const { data } = response;
        setCountries(data);
        setLoading(false);
      });
    }, 2000);
  }, []);*/
  const handleChange = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

  const handleSearch = (event) => {
    setCountries([]);
    event.preventDefault();
    console.log(search);
    setLoading(true);
    setTimeout(() => {
      axios.get(apiCountriesURL).then((response) => {
        const { data } = response;
        setCountries(data);
        setLoading(false);
      });
    }, 2000);
    console.log(countries);

    setSearch("");
  };

  return (
    <React.Fragment>
      <div className="titleSection">
        <h2>#Countries</h2>
      </div>
      <div className="clearfix"></div>
      <div className="searchCountry">
        <form onSubmit={handleSearch}>
          <div className="form-group">
            <button type="submit">search</button>

            <input type="text" name="country" onChange={handleChange} />
          </div>
        </form>
      </div>
      <div className={loading ? "spinner" : ""}></div>

      <div className="section">
        <div className="countries">
          {countries.map((country) => (
            <Country
              key={country.numericCode}
              flag={country.flag}
              name={country.translations.es}
              capital={country.capital}
              subregion={country.subregion}
              population={country.population}
            />
          ))}
        </div>

        <div className="clearfix"></div>
      </div>
    </React.Fragment>
  );
};
