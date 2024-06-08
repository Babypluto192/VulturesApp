"use client"
import React from 'react';
import classes from "./NewsStyle.module.scss";


import VulturesNewsSection from "@/components/sections/VulturesNewsSection";
import {useGetNewsQuery} from "@/app/news/NewsApi";

const Page = () => {
    const {data } = useGetNewsQuery()
    return (
        <div className={classes.font}>


            <h3 className={classes.title}> NEWS </h3>

            {
                data ? data.map((el) => <VulturesNewsSection key={el.id} description1={el.description} imageurl1={el.image} caption1={el.title} id={el.id}/> ) : <></>

            }



        </div>
    );
};

export default Page;