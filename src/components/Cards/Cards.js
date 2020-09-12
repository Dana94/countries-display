import React from 'react';

import classes from './Cards.module.css'
import Card from '../Card/Card';

const Cards = (props) => {
    return (
        <div className={classes.Cards}>
            {
                props.countries.map(country => <Card country={country} key={country._id}/>)
            }
        </div>
    )
}

export default Cards;
