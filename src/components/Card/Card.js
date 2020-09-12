import React from 'react';

import classes from './Card.module.css'

const Card = (props) => {
    return (
        <div className={classes.Card}>
            <img src={props.country.flag.svgFile} alt={`${props.country.name}'s Flag`} />
            <div className={classes.Content}>
                <p>{props.country.name}</p>
                <ul>
                    {
                        props.country.currencies.map(currency => <li key={currency._id}>{currency.name}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Card;