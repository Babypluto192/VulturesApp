"use client"
import React, { useState, useRef, useEffect } from 'react';
import classes from "./VulturesHeader.module.scss";
import VulturesMenu from "@/components/Menu/VulturesMenu";
import Link from "next/link";

const VulturesHeader = () => {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setShowMenu(false);
        }
    };

    useEffect(() => {
        if (showMenu) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showMenu]);

    return (
        <header>
            {showMenu && (
                <div ref={menuRef}>
                    <VulturesMenu />
                </div>
            )}
            <div className={classes.headercontainer}>
                <Link href="/"> <h1 className={classes.title}>Vultures App</h1></Link>
                <button onClick={() => setShowMenu(!showMenu)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={classes.MenuButton} viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default VulturesHeader;
