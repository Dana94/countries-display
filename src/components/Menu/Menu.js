import React, { useState, useContext } from 'react';

import classes from './Menu.module.css';
import { FilterContext } from '../../context/filter-context'

const Menu = React.memo(props => {
    const [population, setPopulation] = useState(props.maxPopulation);
    const [currencies, setCurrencies] = useState([]);

    const filterContext = useContext(FilterContext);

    // console.log(filterContext.languages);

    const toggleSelectAll = (selectAll) => {
        if (selectAll) {
            // assign props.languages to filtercontext languages
            filterContext.toggleSelectAll(true, props.languages.map(lang => lang.iso639_2));
        } else {
            // empty filter context list
            filterContext.toggleSelectAll(false);
        }
    }

    return (
        <div className={classes.Menu}>
            <div className={classes.Filters}>
                {/* <div> */}
                Menu Filters
                <hr />
                <fieldset className={classes.Scroll}>
                    <legend>Languages</legend>
                    <input
                        id="select_lang"
                        type="checkbox"
                        name="select_lang"
                        onChange={event => toggleSelectAll(event.target.checked)}
                    />
                    <label htmlFor="select_lang">Select all</label>
                    <div className={classes.Langs}>
                        {
                            props.languages.map(lang => {
                                return (
                                    <div key={lang._id} className={classes.Lang}>
                                        <input
                                            id={lang._id}
                                            type="checkbox"
                                            name={lang.name}
                                            checked={filterContext.languages.includes(lang.iso639_2)}
                                            onChange={event => filterContext.toggleSelect(event.target.checked, lang.iso639_2)}
                                        />
                                        <label htmlFor={lang._id}>{lang.name}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </fieldset>
                <div>
                </div>
                <hr />
                <fieldset className={classes.population}>
                    <label htmlFor="population">Population</label> {Math.floor(population)}
                    <input
                        type="range"
                        id="population"
                        className={classes.populationRange}
                        name="population"
                        min={props.minPopulation}
                        max={props.maxPopulation}
                        step="any"
                        onChange={event => setPopulation(event.target.value)}
                    />
                </fieldset>
                <hr />
                <fieldset className={classes.Scroll}>
                    <legend>Currencies</legend>
                    <div className={classes.Langs}>
                        {
                            props.currencies.map(curr => {
                                return (
                                    <div key={curr._id} className={classes.Lang}>
                                        <input id={curr._id} type="checkbox" name={curr.name} value={curr._id} />
                                        <label htmlFor={curr._id}>{curr.name}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </fieldset>
                {/* </div> */}
            </div>
        </div>
    )
});

export default Menu;
