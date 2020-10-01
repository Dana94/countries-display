import React, { useState } from 'react';

export const FilterContext = React.createContext({
    languages: [],
    // allLanguages: true,
    // population: null,
    currencies: []
});

const FilterContextProvider = props => {
    const [filterLanguages, setFilterLanguages] = useState([]);
    // const [filterPopulation, setPopulation] = useState(0);
    const [filterCurrencies, setFilterCurrencies] = useState([]);
    const [selectAllLanguages, setSelectAllLanguages] = useState(true);
    const [selectAllCurrencies, setSelectAllCurrencies] = useState(true);


    const toggleSelectHandler = (select, listType, item) => {
        let newList;
        if (select) {
            newList = listType === "language" ? [...filterLanguages] : [...filterCurrencies];
            newList.push(item);
            // if last item makes all the list selected, should "select all" be checked?
        } else {
            setSelectAllLanguages(false);
            newList = listType === "language" ? filterLanguages.filter(code => item !== code) : filterCurrencies.filter(code => item !== code);
        }
        listType === "language" ? setFilterLanguages(newList) : setFilterCurrencies(newList);
    }

    const toggleSelectAllHandler = (selectAll, listType, allItems) => {
        if (selectAll) {
            listType === "language" ? setSelectAllLanguages(true) : setSelectAllCurrencies(true);
            listType === "language" ? setFilterLanguages(allItems) : setFilterCurrencies(allItems);
        }
        else {
            listType === "language" ? setSelectAllLanguages(false) : setSelectAllCurrencies(false);
            listType === "language" ? setFilterLanguages([]) : setFilterCurrencies([]);
        }
    }

    const setLanguages = langs => {
        setFilterLanguages(langs);
    }

    const setCurrencies = langs => {
        setFilterCurrencies(langs);
    }

    return (
        <FilterContext.Provider
            value={{
                languages: filterLanguages,
                selectAllLanguages,
                toggleSelectAll: toggleSelectAllHandler,
                toggleSelect: toggleSelectHandler,
                setLanguages,
                setCurrencies,
                // population: filterPopulation,
                currencies: filterCurrencies,
                selectAllCurrencies
            }}>
            {props.children}
        </FilterContext.Provider>
    )
}

export default FilterContextProvider;

