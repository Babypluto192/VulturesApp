"use client"
import React from 'react';
import ConcertSection from "@/components/sections/ConcertSection";
import {useGetConcertsQuery} from "@/app/concerts/ConcertApi";
import Concert from "@/interfaces/IConcert";
const Page = () => {
        const {data:Concerts} = useGetConcertsQuery()


    const sortConcertsByDate = (a: Concert, b: Concert) => {
        const dateA = new Date(a.data).getTime();
        const dateB = new Date(b.data).getTime();
        return dateA - dateB;
    };

        if(Concerts) {
            const sortedConcerts = [...Concerts]
            sortedConcerts.sort(sortConcertsByDate)
            return (
                <div>

                    {sortedConcerts.map((el) => (
                        <ConcertSection key={el.id} concert={el} />
                    ))}

                </div>
            );
        }
};

export default Page;