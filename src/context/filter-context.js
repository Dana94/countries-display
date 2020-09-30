import React, { useState } from 'react';

export const FilterContext = React.createContext({
    languages: [],
    population: null,
    currencies: []
});

const FilterContextProvider = props => {
    const [filterLanguages, setFilterLanguages] = useState([]);
    const [filterPopulation, setPopulation] = useState(0);
    const [filterCurrencies, setFilterCurrencies] = useState([]);
    const [selectAllLanguages, setSelectAllLanguages] = useState(true);

    const toggleSelectHandler = (select, listType, item) => {
        let newList;
        if (select) {
            newList = listType === "language" ? [...filterLanguages] : [...filterCurrencies];
            newList.push(item);
        } else {
            newList = listType === "language" ? filterLanguages.filter(code => item !== code) : filterCurrencies.filter(code => item !== code);
        }
        listType === "language" ? setFilterLanguages(newList) : setFilterCurrencies(newList);
    }

    const toggleSelectAllHandler = (selectAll, listType, allItems) => {
        if (selectAll) {
            // setSelectAllLanguages(true);
            listType === "language" ? setFilterLanguages(allItems) : setFilterCurrencies(allItems);
        }
        else {
            // setSelectAllLanguages(true);
            listType === "language" ? setFilterLanguages([]) : setFilterCurrencies([]);
        }
    }

    return (
        <FilterContext.Provider
            value={{
                languages: filterLanguages,
                toggleSelectAll: toggleSelectAllHandler,
                toggleSelect: toggleSelectHandler,
                population: filterPopulation,
                currencies: filterCurrencies,
                selectAllLanguages: selectAllLanguages
            }}>
            {props.children}
        </FilterContext.Provider>
    )
}

export default FilterContextProvider;

