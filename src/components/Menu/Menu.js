import React, { useState, useContext } from 'react';

import classes from './Menu.module.css';
import {FilterContext} from '../../context/filter-context'

const Menu = React.memo(props => {
    const [population, setPopulation] = useState(props.maxPopulation);
    const [currencies, setCurrencies] = useState([]);

    const filterContext = useContext(FilterContext);

    console.log(filterContext.languages);

    const addLangHandler = (langId) => {
        filterContext.addLanguage(langId);
    }

    const removeLangHandler = (langId) => {
        filterContext.removeLanguage(langId);
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
                        onChange={event => {
                            if (event.target.checked) {
                                console.log('select all')
                            } else {
                                console.log('remove all')
                            }
                        }}
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
                                            onChange={event => {
                                                if (event.target.checked) {
                                                    addLangHandler(lang.iso639_2)
                                                } else {
                                                    removeLangHandler(lang.iso639_2)
                                                }
                                            }}
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
