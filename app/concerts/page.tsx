"use client"
import React from 'react';
import ConcertSection from "@/components/sections/ConcertSection";
import Concert from "@/interfaces/IConcert";
import {useSelector} from "react-redux";
import { selectAllConcertItems} from "@/slices/concertSlice";
import classes from "./ConcertsStyle.module.scss";
const Page = () => {
    const Concerts = useSelector(selectAllConcertItems);


    const sortConcertsByDate = (a: Concert, b: Concert) => {
        const dateA = new Date(a.data).getTime();
        const dateB = new Date(b.data).getTime();
        return dateA - dateB;
    };

        if(Concerts !== undefined) {
            const sortedConcerts = [...Concerts]
            sortedConcerts.sort(sortConcertsByDate)
            return (
                <div className={classes.container}>

                    {sortedConcerts.map((el) => (
                        <ConcertSection key={el.id} concert={el} />
                    ))}

                </div>
            );
        }
};

export default Page;