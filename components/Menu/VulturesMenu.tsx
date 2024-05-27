import React from 'react';
import classes from "./MenuStyle.module.scss";
import Link from "next/link";


const VulturesMenu = () => {
    return (
        <div>
            <ul className={classes.menuContainer}>
                <li> <Link href="/">Home</Link></li>
                <li><Link href="/music">Music</Link></li>
                <li><Link href="/news">News </Link></li>
                <li><Link href="/merch">Merch </Link></li>
                <li><Link href="/leaks">Leaks </Link></li>
                <li><Link href="/concerts">Concerts </Link></li>
                <li>Admin (not available) </li>
            </ul>
        </div>
    );
};

export default VulturesMenu;