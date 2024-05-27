import React from 'react';
import classes from "./NewsStyle.module.scss";
import VulturesHeader from "@/components/header/VulturesHeader";

import VulturesNewsSection from "@/components/sections/VulturesNewsSection";
import VulturesFooter from "@/components/footer/VulturesFooter";
const Page = () => {
    return (
        <div >


            <h3 className={classes.title}> NEWS </h3>

            <VulturesNewsSection description1="Kanye west have seen today in ..." imageurl1="/placeholder.png" caption1="Kanye News 1"/>
            <VulturesNewsSection description1="Kanye west have seen today in ..." imageurl1="/placeholder.png" caption1="Kanye News 2"/>


        </div>
    );
};

export default Page;