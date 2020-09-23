import React, { useState } from 'react';

export const FilterContext = React.createContext({
    languages: [],
    population: null,
    currencies: []
});

const FilterContextProvider = props => {
    const [languages, setLanguages] = useState([]);
    const [population, setPopulation] = useState(0);
    const [currencies, setCurrencies] = useState([]);

    return (
        <FilterContext.Provider value={{languages: languages, population: population, currencies: currencies}}>
            {props.children}
        </FilterContext.Provider>
    )
}

export default FilterContextProvider;

