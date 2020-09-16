import React from 'react';

import classes from './Card.module.css'

const Card = (props) => {

    return (
        <div className={classes.Card}>
            <img src={props.country.flag.svgFile} alt={`${props.country.name}'s Flag`} />
            <div className={classes.Content}>
                <p>{props.country.name}</p>
            </div>
                <ul className={classes.List}>
                    {
                        props.country.officialLanguages.slice(0, 2).map(lang => <li key={lang.name}>{lang.name}</li>)
                    }
                </ul>
                <ul className={classes.List}>
                    {
                        props.country.currencies
                            .filter(currency => currency.name !== "null")
                            .slice(0, 2) // only give first 2 currencies
                            .map(currency => <li key={currency._id}>{currency.name}</li>)
                    }
                </ul>
        </div>
    )
}

export default Card;
