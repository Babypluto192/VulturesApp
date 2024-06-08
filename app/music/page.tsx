"use client"
import React from 'react';
import classes from "./MusicStyles.module.scss";
import Vultures1Album from "@/components/VulturesAlbum1/Vultures1Album";



const Page = () => {



    return (

        <div>

            <h1 className={classes.title}> Music</h1>


            <Vultures1Album />



        </div>

    );
};

export default Page;