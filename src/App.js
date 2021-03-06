import React, {useContext} from 'react';
import { useQuery, gql } from '@apollo/client';

import './App.css';

import { FilterContext } from './context/filter-context';
import Menu from './components/Menu/Menu';
import Cards from './components/Cards/Cards';
import Loading from './components/Messages/Loading/Loading';
import Error from './components/Messages/Error/Error';
import Hamburger from './components/Menu/Hamburger/Hamburger';
import Cross from './components/Menu/Cross/Cross';

function App() {

  const filterContext = useContext(FilterContext);

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

  const languages = useQuery(GET_LANGUAGES);
  const currencies = useQuery(GET_CURRENCIES);

  if (languages.loading || currencies.loading) {
    return (
      <div className="App">
        <header className="App-header">
          <Loading />
        </header>
      </div>
    );
  }
  if (languages.error || currencies.error) {
    return (
      <div className="App">
        <header className="App-header">
          <Error />
        </header>
      </div>
    );
  }

  let icon = <Hamburger />;

  if(filterContext.menuOpen) {
    icon = <Cross />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <Menu languages={languages.data.Language} currencies={currencies.data.Currency} />
        {icon}
        <Cards />
      </header>
    </div>
  );
}

export default App;
