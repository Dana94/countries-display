import React, { useState } from 'react';

export const FilterContext = React.createContext({
    languages: [],
    addLanguage: () => {},
    population: null,
    currencies: []
});

const FilterContextProvider = props => {
    const [filterLanguages, setFilterLanguages] = useState([]);
    const [filterPopulation, setPopulation] = useState(0);
    const [filterCurrencies, setCurrencies] = useState([]);

    const addLanguageHandler = (lang) => {
        const newLangs = [...filterLanguages];
        newLangs.push(lang);
        setFilterLanguages(newLangs);
    }

    return (
        <FilterContext.Provider
            value={{
                languages: filterLanguages,
                addLanguage: addLanguageHandler,
                population: filterPopulation,
                currencies: filterCurrencies
            }}>
            {props.children}
        </FilterContext.Provider>
    )
}

export default FilterContextProvider;

