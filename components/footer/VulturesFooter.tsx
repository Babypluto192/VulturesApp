"use client"
import React from 'react';
import classes from "@/components/footer/footer.module.scss";
import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import MusicIcon from "@/icons/MusicIcon";
import NewsIcon from "@/icons/NewsIcon";
import ConcertIcon from "@/icons/ConcertIcon";
import MerchIcon from "@/icons/MerchIcon";
import LeaksIcon from "@/icons/LeaksIcon";
import { useRouter } from 'next/navigation'


const VulturesFooter = () => {
    const [value, setValue] = React.useState(0);
    const router = useRouter()
    return (
        <footer className={classes.container}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}

            >


                <BottomNavigationAction label="Music" icon={<MusicIcon />} onClick={() => router.push('/music')}/>
                  <BottomNavigationAction label="News" icon={<NewsIcon />} onClick={() => router.push('/news')} />
                <BottomNavigationAction label="Concert" icon={<ConcertIcon/>} onClick={() => router.push('/concerts')} />
                <BottomNavigationAction label="Merch" icon={<MerchIcon />} onClick={() => router.push('/merch')} />
                <BottomNavigationAction label="Leaks" icon={<LeaksIcon />} onClick={() => router.push('/leaks')} />
            </BottomNavigation>





        </footer>
);
};

export default VulturesFooter;