"use client"
import React from 'react';
import {useGetNewsQuery} from "@/app/news/NewsApi";
import News from "@/interfaces/INews";
import Image from "next/image";
import classes from "./NewsDetail.module.scss";

const Page = ({params} : { params: { id: number }}) => {
    const {data, isLoading } = useGetNewsQuery()
    let news:News = {
        title: '',
        description: '',
        image: ''
    }
    if(!isLoading) {

        if (data) {
            for (let i = 0; i < data.length; i++) {
                if (params.id == i) {
                    news = data[i]
                }
            }
        }
    }

    return (
        <div lang="ru" className={classes.container}>
            <Image src={"http://localhost:4000" + news.image} alt={news.title + 'image'} width="500" height="500"  className={classes.image}/>
            <h3 className={classes.caption}>
                {news.title}
            </h3>
            <p className={classes.description}> {news.description}</p>

        </div>
    );
};

export default Page;