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

    const toggleSelectHandler = (select, lang) => {
        let newLangs;
        if(select) {
            newLangs = [...filterLanguages];
            newLangs.push(lang);
        } else {
            newLangs = filterLanguages.filter(code => lang !== code);
        }
        setFilterLanguages(newLangs);
    }

    const toggleSelectAllHandler = (selectAll, allLanguages) => {
        selectAll ? setFilterLanguages(allLanguages) : setFilterLanguages([]);
    }

    return (
        <FilterContext.Provider
            value={{
                languages: filterLanguages,
                // addLanguage: addLanguageHandler,
                // removeLanguage: removeLanguageHandler,
                toggleSelectAll: toggleSelectAllHandler,
                toggleSelect: toggleSelectHandler,
                population: filterPopulation,
                currencies: filterCurrencies
            }}>
            {props.children}
        </FilterContext.Provider>
    )
}

export default FilterContextProvider;

