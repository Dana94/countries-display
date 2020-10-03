import React, { useContext, useEffect } from 'react';

import classes from './Menu.module.css';
import { FilterContext } from '../../context/filter-context'

const Menu = React.memo(props => {
    // const [population, setPopulation] = useState(props.maxPopulation);

    const filterContext = useContext(FilterContext);

    useEffect(() => {
        filterContext.setLanguages(props.languages.map(lang => lang.iso639_2));
        filterContext.setCurrencies(props.currencies.map(curr => curr.code));
    }, [])

    return (
        <div className={classes.Menu}>
            <div className={classes.Filters}>
                Menu Filters
                <hr />
                <fieldset className={classes.Scroll}>
                    <div className={classes.FilterTitle}>
                        <legend>Languages</legend>
                        <button onClick={event => filterContext.selectAll('language', props.languages.map(lang => lang.iso639_2))}>Select all</button>
                    </div>
                    <div className={classes.List}>
                        {
                            props.languages.map(lang => {
                                return (
                                    <div key={lang._id} className={classes.Lang}>
                                        <input
                                            id={lang._id}
                                            type="checkbox"
                                            name={lang.name}
                                            checked={filterContext.languages.includes(lang.iso639_2)}
                                            onChange={event => filterContext.toggleSelect(event.target.checked, "language", lang.iso639_2)}
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
                    {/* <label htmlFor="population">Population</label> {Math.floor(population)} */}
                    <input
                        type="range"
                        id="population"
                        className={classes.populationRange}
                        name="population"
                        min={props.minPopulation}
                        max={props.maxPopulation}
                        step="any"
                    // onChange={event => setPopulation(event.target.value)}
                    />
                </fieldset>
                <hr />
                <fieldset className={classes.Scroll}>
                    <div className={classes.FilterTitle}>
                        <legend>Currencies</legend>
                        <button onClick={event => filterContext.selectAll("currency", props.currencies.map(curr => curr.code))}>Select all</button>
                    </div>
                    <div className={classes.List}>
                        {
                            props.currencies.map(curr => {
                                // for some reason the API has "null" as a currency :/
                                if (curr.name === "null") {
                                    return null;
                                }
                                return (
                                    <div key={curr._id} className={classes.Lang}>
                                        <input
                                            id={curr._id}
                                            type="checkbox"
                                            name={curr.name}
                                            checked={filterContext.currencies.includes(curr.code)}
                                            onChange={event => filterContext.toggleSelect(event.target.checked, "currency", curr.code)}
                                        />
                                        <label htmlFor={curr._id}>{curr.name}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </fieldset>
            </div>
        </div>
    )
});

export default Menu;
