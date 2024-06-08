"use client"
import React, { useState, useRef, useEffect } from 'react';
import VulturesMenu from "@/components/Menu/VulturesMenu";
import Link from "next/link";
import {Box} from "@mui/system";
import {
    AppBar, Drawer,
    IconButton,
    Toolbar,
    Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {createTheme, ThemeProvider} from "@mui/material/styles";
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
    const theme = createTheme({
        typography: {
            fontFamily: 'MyCustomFont , sans-serif'
        },
        palette: {
            secondary: {
                main: '#3c3c3c'
            }
        }
    })



    return (
        <header>


                    <Drawer open={showMenu}>
                        <div  ref={menuRef}>
                        {VulturesMenu}
                        </div>
                    </Drawer>


            <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }} >
                <AppBar position="static" color="secondary">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => setShowMenu(!showMenu)}
                        >
                            <MenuIcon />
                        </IconButton>
                      <Link href="/" > <Typography variant="h3" component="div" sx={{ flexGrow: 1 }} >
                            Vultures App
                        </Typography></Link>
                    </Toolbar>
                </AppBar>
            </Box>
            </ThemeProvider>


        </header>
    );
};

export default VulturesHeader;
