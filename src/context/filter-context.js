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
    const [menuOpen, setMenuOpen] = useState(false);


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

    const selectAll = (listType, allItems) => {
        listType === "language" ? setFilterLanguages(allItems) : setFilterCurrencies(allItems);
    }

    const setLanguages = langs => {
        setFilterLanguages(langs);
    }

    const setCurrencies = langs => {
        setFilterCurrencies(langs);
    }

    const setMenuOpenStatus = status => {
        setMenuOpen(status);
    }

    return (
        <FilterContext.Provider
            value={{
                languages: filterLanguages,
                selectAll,
                toggleSelect: toggleSelectHandler,
                setLanguages,
                setCurrencies,
                // population: filterPopulation,
                currencies: filterCurrencies,
                menuOpen,
                setMenuOpenStatus
            }}>
            {props.children}
        </FilterContext.Provider>
    )
}

export default FilterContextProvider;

