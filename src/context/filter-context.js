import React, { useState } from 'react';

export const FilterContext = React.createContext({
    languages: [],
    // allLanguages: true,
    // population: null,
    currencies: []
});

const FilterContextProvider = props => {
    const [filterLanguages, setFilterLanguages] = useState([]);

    const [filterPopulation, setFilterPopulation] = useState(0);
    const [minFilterPopulation, setMinFilterPopulation] = useState(0);
    const [maxFilterPopulation, setMaxFilterPopulation] = useState(0);

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

    const setMinPopulation = min => {
        setMinFilterPopulation(min);
    }

    const setMaxPopulation = min => {
        setMaxFilterPopulation(min);
    }

    return (
        <FilterContext.Provider
            value={{
                selectAll,

                languages: filterLanguages,
                toggleSelect: toggleSelectHandler,
                setLanguages,

                population: filterPopulation,
                minPopulation: minFilterPopulation,
                maxPopulation: maxFilterPopulation,
                setMinPopulation,
                setMaxPopulation,

                setCurrencies,
                currencies: filterCurrencies,

                menuOpen,
                setMenuOpenStatus
            }}>
            {props.children}
        </FilterContext.Provider>
    )
}

export default FilterContextProvider;

