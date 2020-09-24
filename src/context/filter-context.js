import React, { useState } from 'react';

export const FilterContext = React.createContext({
    languages: [],
    population: null,
    currencies: []
});

const FilterContextProvider = props => {
    const [filterLanguages, setFilterLanguages] = useState([]);
    const [filterPopulation, setPopulation] = useState(0);
    const [filterCurrencies, setCurrencies] = useState([]);

    return (
        <FilterContext.Provider value={{ languages: filterLanguages, population: filterPopulation, currencies: filterCurrencies }}>
            {props.children}
        </FilterContext.Provider>
    )
}

export default FilterContextProvider;

