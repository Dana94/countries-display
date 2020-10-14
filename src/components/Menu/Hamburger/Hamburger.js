// Source: https://css-tricks.com/snippets/svg/svg-hamburger-menu/

import React, {useContext} from 'react';

import './Hamburger.css';
import { FilterContext } from '../../../context/filter-context'


const Hamburger = props => {

    const filterContext = useContext(FilterContext);

    const toggleMenu = () => {
        filterContext.setMenuOpenStatus(!filterContext.menuOpen)
    }

    const hamburgerClasses = ["hamburger"];

    if(filterContext.menuOpen) {
        hamburgerClasses.push("close")
    }

    return (
        <svg viewBox="0 0 100 80" width="40" height="40" className={hamburgerClasses.join(" ")} onClick={toggleMenu}>
            <rect width="100" height="20" rx="8"></rect>
            <rect y="30" width="100" height="20" rx="8"></rect>
            <rect y="60" width="100" height="20" rx="8"></rect>
        </svg>
    )
}

export default Hamburger;
