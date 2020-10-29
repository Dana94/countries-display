import React, {useContext} from 'react';

import './Modal.css';
import { FilterContext } from '../../context/filter-context'
// import Cross from '../Menu/Cross/Cross';

const Modal = props => {

    const filterContext = useContext(FilterContext);

    console.log(filterContext.selectedCountry)
    return (
        <div className="modal">
            {/* <Cross /> */}
            <img src={filterContext.selectedCountry?.flag.svgFile} alt={`${filterContext.selectedCountry?.name}'s Flag`}/>
            {filterContext.selectedCountry?.name}
        </div>
    )
};

export default Modal;
