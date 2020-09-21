import React from 'react';

import classes from './Menu.module.css';

const Menu = props => {
    return (
        <div className={classes.Menu}>
            <div className={classes.Filters}>
                {/* <div> */}
                    Menu Filters
                <hr />
                    <fieldset className={classes.Scroll}>
                        <legend>Languages</legend>
                        <div className={classes.Langs}>
                            {
                                props.languages.map(lang => {
                                    return (
                                        <div key={lang._id} className={classes.Lang}>
                                            <input id={lang._id} type="checkbox" name={lang.name} value={lang._id} />
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
                        <label htmlFor="population">Population</label>
                        <input type="range" id="population" className={classes.populationRange} name="population" min="0" max="11" list="tickmarks" />
                        {/* <datalist id="tickmarks">
                            <option value="0" label="0%"></option>
                            <option value="10"></option>
                            <option value="20"></option>
                            <option value="30"></option>
                            <option value="40"></option>
                            <option value="50" label="50%"></option>
                            <option value="60"></option>
                            <option value="70"></option>
                            <option value="80"></option>
                            <option value="90"></option>
                            <option value="100" label="100%"></option>
                        </datalist> */}
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
}

export default Menu;
