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
            <div className="modal-title">
                <img
                    src={filterContext.selectedCountry?.flag.svgFile}
                    alt={`${filterContext.selectedCountry?.name}'s Flag`}
                    className="modal-flag"
                />
                <span>

                    {filterContext.selectedCountry?.name}
                </span>
            </div>
            <div>
                Languages:
                {
                    filterContext.selectedCountry?.officialLanguages.map((lang, index) => ` ${lang.name}${index + 1 < filterContext.selectedCountry?.officialLanguages.length ? ',' : ''}`)
                }
            </div>
            <div>
                Currencies:
                {
                    filterContext.selectedCountry?.currencies.map((currency, index) => currency.name === "null" ? null : ` ${currency.name}${index + 1 < filterContext.selectedCountry?.currencies.length ? ',' : ''}`)
                }
            </div>
        </div>
    )
};

export default Modal;
