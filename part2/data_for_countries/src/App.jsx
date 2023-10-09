import { useEffect, useState } from "react";
import axios from "axios";
import PopulateCountry from "./components/PopulateCountry";

function App() {
  const [state, setState] = useState({
    initialState: {
      name: null,
      countries: [],
      filteredCountries: [],
    },
  });
  const [country, setCountry] = useState("");
  const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";

  useEffect(() => {
    axios.get(`${baseUrl}`).then((response) => {
      let countriesData = response.data;

      let newState = {
        ...state,
        initialState: {
          ...state.initialState,
          countries: countriesData,
        },
      };

      setState(newState);
    });
  }, []);

  const handleClick = (country) => {
    let filteredCountryList = state.initialState.countries.filter((obj) =>
      obj.name.common.includes(country.name.common)
    );

    let newState = {
      ...state,
      initialState: {
        ...state.initialState,
        filteredCountries: filteredCountryList,
      },
    };

    setState(newState);
  };

  const handleChange = (e) => {
    let value = e.target.value.toLowerCase();
    let filteredCountriesList = state.initialState.countries.filter((obj) =>
      obj.name.common.toLowerCase().includes(value)
    );
    let newState = {
      ...state,
      initialState: {
        ...state.initialState,
        name: value,
        filteredCountries: filteredCountriesList,
      },
    };
    setState(newState);
  };

  const filteredCountryList = state.initialState.filteredCountries.map(
    (country, index) => {
      return (
        <div key={index}>
          <li>{country.name.common}</li>
          <button
            onClick={() => {
              handleClick(country);
            }}
          >
            Show
          </button>
        </div>
      );
    }
  );

  console.log();
  return (
    <div className="container">
      <form>
        <label htmlFor="input">find countries</label>
        <input type="search" id="input" onChange={handleChange} />
      </form>
      <ul>
        {state.initialState.filteredCountries.length === 1 ? (
          <PopulateCountry country={state.initialState.filteredCountries[0]} />
        ) : state.initialState.filteredCountries.length < 9 ? (
          filteredCountryList
        ) : (
          "Too many matches, specify another filter"
        )}
      </ul>
    </div>
  );
}

export default App;
