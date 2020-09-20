import React from 'react';

import classes from './Menu.module.css';

const Menu = props => {
    return (
        <div className={classes.Menu}>
            <div className={classes.Filters}>
                Menu Filters
                <hr />
                <fieldset>
                    <legend>Languages</legend>
                    <div className={classes.Langs}>
                        {
                            props.languages.map(lang => {
                                return (
                                    <div key={lang._id} className={classes.Lang}>
                                        <input id={lang._id} type="checkbox" name={lang.name} value={lang._id} />
                                        <label for={lang._id}>{lang.name}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </fieldset>
                <div>
                </div>
                <hr />
                Population
                <hr />
                Currency
            </div>
        </div>
    )
}

export default Menu;
