import React, {useContext} from 'react';
import { useQuery, gql } from '@apollo/client';

import './App.css';

import {FilterContext} from './context/filter-context';
import Menu from './components/Menu/Menu';
import Cards from './components/Cards/Cards';

function App() {

  const filterContext = useContext(FilterContext);

  // population filter (ex: population_gt)
  // currency filter (ex: filter: {currencies_in: {code_in: ["DZD", "ARS"]}})
  // language filter (ex: officialLanguages_in: {iso639_2_in: ["ara"]})

  const GET_COUNTRIES = gql`
    query GetCountry {
      Country {
        _id
        name
        flag {
          svgFile
        }
        officialLanguages {
          name
        }
        currencies {
          name
          _id
        }
        population
      }
    }
  `;

  const GET_LANGUAGES = gql`
    query GetLanguages {
      Language {
        name
        _id
        iso639_2
        countries {
          _id
        }
      }
    }
  `;

  const GET_CURRENCIES = gql`
    query GetCurrencies {
      Currency{
        _id
        code
        name
        countries {
          _id
        }
      }
    }
  `;


  const countries = useQuery(GET_COUNTRIES);
  const languages = useQuery(GET_LANGUAGES);
  const currencies = useQuery(GET_CURRENCIES);

  if (countries.loading || languages.loading || currencies.loading) return <p>Loading...</p>;
  if (countries.error || languages.error || currencies.error) return <p>Error :(</p>;


  let maxPopulation = 0;
  let minPopulation = 0;

  countries.data.Country.forEach(country => {
    if (minPopulation === 0) {
      minPopulation = country.population
    }
    if (country.population > maxPopulation) {
      maxPopulation = country.population;
    }
    else if (country.population < minPopulation) {
      minPopulation = country.population;
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        {/* {filterContext.population} */}
        <Menu languages={languages.data.Language} currencies={currencies.data.Currency} maxPopulation={maxPopulation} minPopulation={minPopulation}
        selectLanguages={event => event.target.value} />
        <Cards countries={countries.data.Country} />
      </header>
    </div>
  );
}

export default App;
