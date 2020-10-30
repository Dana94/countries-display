import React, { useContext } from 'react';

import './Modal.css';
import { FilterContext } from '../../context/filter-context'
// import Cross from '../Menu/Cross/Cross';

const Modal = props => {

    const filterContext = useContext(FilterContext);

    // console.log(filterContext.selectedCountry)
    return (
        <div className="modal">
            {/* <Cross /> */}
            <img
                src={filterContext.selectedCountry?.flag.svgFile}
                alt={`${filterContext.selectedCountry?.name}'s Flag`}
                className="modal-flag"
            />
            {filterContext.selectedCountry?.name}
            <p id="languages">Languages:</p>
            <ul aria-labelledby="languages">
                {
                    filterContext.selectedCountry?.officialLanguages.map(lang => <li key={lang.name}>{lang.name}</li>)
                }
            </ul>
            <p id="currencies">Currencies:</p>
            <ul aria-labelledby="currencies">
                {
                    filterContext.selectedCountry?.currencies.map(currency => <li key={currency.name}>{currency.name}</li>)
                }
            </ul>
        </div>
    )
};

export default Modal;
