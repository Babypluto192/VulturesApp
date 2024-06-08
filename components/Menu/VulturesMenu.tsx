"use client"
import React from 'react';
import Link from "next/link";
import {Box} from "@mui/system";
import List from "@mui/material/List";
import {Divider, ListItem, ListItemButton} from "@mui/material";


const VulturesMenu =  (


    <Box sx={{ width: 250 }} role="presentation" >
            <List>
                <ListItem disablePadding>
                    <ListItemButton component={Link} href="/">
                        Home
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton component={Link} href="/music">
                        Music
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton component={Link} href="/news">
                        News
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton component={Link} href="/merch">
                        Merch
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton component={Link} href="/leaks">
                        Leaks
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton component={Link} href="/concerts">
                        Concerts
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton component={Link} href="/admin">
                        Admin
                    </ListItemButton>
                </ListItem>
                <Divider />
            </List>
    </Box>

    );


export default VulturesMenu;