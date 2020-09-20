import React from 'react';
import { useQuery, gql } from '@apollo/client';

import './App.css';

import Menu from './components/Menu/Menu';
import Cards from './components/Cards/Cards';

function App() {

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
      }
    }
  `;

  const GET_LANGUAGES = gql`
    query GetLanguages {
      Language {
        name
        _id
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

  return (
    <div className="App">
      <header className="App-header">
        <Menu languages={languages.data.Language} currencies={currencies.data.Currency} />
        <Cards countries={countries.data.Country} />
      </header>
    </div>
  );
}

export default App;
