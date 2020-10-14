// Source: https://css-tricks.com/snippets/svg/svg-hamburger-menu/

import React, {useContext} from 'react';

import './Cross.css';
import { FilterContext } from '../../../context/filter-context'


const Cross = props => {

    const filterContext = useContext(FilterContext);

    const toggleMenu = () => {
        filterContext.setMenuOpenStatus(!filterContext.menuOpen)
    }

    return (
        <svg viewBox="0 0 100 80" width="40" height="40" className="cross" onClick={toggleMenu}>
            <rect y="30" width="100" height="20" rx="8"></rect>
            <rect y="30" width="100" height="20" rx="8"></rect>
        </svg>
    )
}

export default Cross;
