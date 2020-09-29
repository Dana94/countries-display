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

    const addLanguageHandler = (lang) => {
        const newLangs = [...filterLanguages];
        newLangs.push(lang);
        setFilterLanguages(newLangs);
    }

    const removeLanguageHandler = (lang) => {
        const newLangs = filterLanguages.filter(code => lang !== code);
        setFilterLanguages(newLangs);
    }
    const toggleSelectAllHandler = (selectAll, allLanguages) => {
        selectAll ? setFilterLanguages(allLanguages) : setFilterLanguages([]);
    }

    return (
        <FilterContext.Provider
            value={{
                languages: filterLanguages,
                addLanguage: addLanguageHandler,
                removeLanguage: removeLanguageHandler,
                toggleSelectAll: toggleSelectAllHandler,
                population: filterPopulation,
                currencies: filterCurrencies
            }}>
            {props.children}
        </FilterContext.Provider>
    )
}

export default FilterContextProvider;

