// Source: https://css-tricks.com/snippets/svg/svg-hamburger-menu/

import React from 'react';

import './Hamburger.css';

const Hamburger = props => {

    // open

    // close
    return (
        <svg viewBox="0 0 100 80" width="40" height="40" className="hamburger">
            <rect width="100" height="20" rx="8"></rect>
            <rect y="30" width="100" height="20" rx="8"></rect>
            <rect y="60" width="100" height="20" rx="8"></rect>
        </svg>
    )
}

export default Hamburger;
