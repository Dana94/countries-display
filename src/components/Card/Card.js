import React, {useContext} from 'react';

import './Card.css'
import { FilterContext } from '../../context/filter-context'

const Card = (props) => {

    const filterContext = useContext(FilterContext);

    const setCountry = () => {
        filterContext.setCountry(props.country);
        filterContext.setModalOpenStatus(true);
    }

    return (
        <div className="Card" onClick={setCountry} tabIndex="0">
            <img src={props.country.flag.svgFile} alt={`${props.country.name}'s Flag`} className={props.country.name}/>
            <div className="Content">
                <p>{props.country.name}</p>
            </div>
        </div>
    )
}

export default Card;
