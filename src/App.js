import React from 'react';
import { useQuery, gql } from '@apollo/client';

import './App.css';

import Cards from './components/Cards/Cards';

function App() {

  const GET_COUNTRIES = gql`
    query GetCountry {
      Country {
        _id
        name
        population
        nativeName
        capital
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

  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="App">
      <header className="App-header">
        <Cards countries={data.Country} />
      </header>
    </div>
  );
}

export default App;
