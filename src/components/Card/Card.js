import React from 'react';

import './Card.css'

const Card = (props) => {

    const _onFocus = () => {
        console.log('on focus')
    }

    const _onClick = () => {
        console.log('clicked')
    }

    return (
        <div className="Card" onFocus={_onFocus} onClick={_onClick} tabIndex="0">
            <img src={props.country.flag.svgFile} alt={`${props.country.name}'s Flag`} className={props.country.name}/>
            <div className="Content">
                <p>{props.country.name}</p>
            </div>
        </div>
    )
}

export default Card;
