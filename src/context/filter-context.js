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
            // setSelectAllLanguages(true);
            setSelectAllLanguages(true) //need currency one
            listType === "language" ? setFilterLanguages(allItems) : setFilterCurrencies(allItems);
        }
        else {
            // setSelectAllLanguages(true);
            setSelectAllLanguages(false) //need currency one
            listType === "language" ? setFilterLanguages([]) : setFilterCurrencies([]);
        }
    }

    const setLanguages = langs => {
        setFilterLanguages(langs)
    }

    return (
        <FilterContext.Provider
            value={{
                languages: filterLanguages,
                // setSelectAllLangs: setSelectAllLangs,
                selectAllLanguages: selectAllLanguages,
                toggleSelectAll: toggleSelectAllHandler,
                toggleSelect: toggleSelectHandler,
                setLanguages: setLanguages,
                // population: filterPopulation,
                currencies: filterCurrencies,
            }}>
            {props.children}
        </FilterContext.Provider>
    )
}

export default FilterContextProvider;

