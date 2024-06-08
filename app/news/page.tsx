"use client"
import React from 'react';
import classes from "./NewsStyle.module.scss";
import VulturesNewsSection from "@/components/sections/VulturesNewsSection";
import {useSelector} from "react-redux";
import {selectAllNewsItems} from "@/slices/newsSlice";

const Page = () => {
    const data = useSelector(selectAllNewsItems);
    return (
        <div>
            <h3 className={classes.title}> NEWS </h3>
            <div className={classes.font}>


                {
                    data ? data.map((el) => <VulturesNewsSection key={el.id} description1={el.description}
                                                                 imageurl1={el.image} caption1={el.title}
                                                                 id={el.id}/>) : <></>

                }


            </div>

        </div>
    );
};

export default Page;