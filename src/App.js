import React from 'react';
import { useQuery, gql } from '@apollo/client';

import './App.css';

import Card from './components/Card';

function App() {

  const GET_COUNTRIES = gql`
    query GetCountry {
      Country {
        name
        _id
        flag {
          svgFile
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
        {
          data.Country.map(country => <Card country={country} key={country._id}/>)
        }
      </header>
    </div>
  );
}

export default App;
