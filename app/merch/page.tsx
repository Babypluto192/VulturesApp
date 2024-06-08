"use client"
import React from 'react';
import classes from "./MerchStyle.module.scss";
import VulturesMerchSection from "@/components/sections/VulturesMerchSection";
import {useSelector} from "react-redux";
import {selectAllMerchItems} from "@/slices/merchSlice";


const Page = () => {
    const Merch = useSelector(selectAllMerchItems);
    return (
        <div className={classes.container}>
            { Merch ? Merch.map((el) => {
                return <div key={Number(el.id)}> <a href="https://yeezy.com" ><VulturesMerchSection  title={el.title.toString()} imageurl1={el.image.toString()}/></a></div>
            }) : <></> }

        </div>
    );
};

export default Page;