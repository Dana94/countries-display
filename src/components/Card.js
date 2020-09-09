import React from 'react';

import classes from './Card.module.css'

const Card = (props) => {
    return (
        <div className={classes.Card}>
            <img src="https://restcountries.eu/data/afg.svg" alt="" />
            <div className={classes.Content}>
                Card
            </div>
        </div>
    )
}

export default Card;
