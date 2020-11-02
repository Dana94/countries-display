import React, { useContext } from 'react';

import './Modal.css';
import { FilterContext } from '../../context/filter-context'
// import Cross from '../Menu/Cross/Cross';

const Modal = props => {

    const filterContext = useContext(FilterContext);

    // console.log(filterContext.selectedCountry)
    const closeModal = () => {
        filterContext.setModalOpenStatus(false);
    }

    return (
        <div className="modal">
            {/* <Cross /> */}
            <div className="modal-content">
                <svg viewBox="0 0 100 80" width="20" height="20" className="modal-cross" onClick={closeModal}>
                    <rect y="30" width="100" height="20" rx="8"></rect>
                    <rect y="30" width="100" height="20" rx="8"></rect>
                </svg>

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
                    <span>Languages:</span>
                    {
                        filterContext.selectedCountry?.officialLanguages.map((lang, index) => ` ${lang.name}${index + 1 < filterContext.selectedCountry?.officialLanguages.length ? ',' : ''}`)
                    }
                </div>
                <div>
                    <span>Currencies:</span>
                    {
                        filterContext.selectedCountry?.currencies.map((currency, index) => currency.name === "null" ? null : ` ${currency.name}${index + 1 < filterContext.selectedCountry?.currencies.length ? ',' : ''}`)
                    }
                </div>
            </div>
        </div>
    )
};

export default Modal;
