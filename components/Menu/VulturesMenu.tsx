import React from 'react';
import classes from "./MenuStyle.module.scss";


const VulturesMenu = () => {
    return (
        <div>
            <ul className={classes.menuContainer}>
                <li> <a href="/">Home</a></li>
                <li><a href="/music">Music</a></li>
                <li><a href="/news">News </a></li>
                <li><a href="/merch">Merch </a></li>
                <li><a href="/leaks">Leaks </a></li>
                <li><a href="/conerts">Concerts </a></li>
                <li>Admin (not available) </li>
            </ul>
        </div>
    );
};

export default VulturesMenu;