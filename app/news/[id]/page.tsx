"use client"
import React from 'react';
import News from "@/interfaces/INews";
import Image from "next/image";
import classes from "./NewsDetail.module.scss";
import {useSelector} from "react-redux";
import {selectAllNewsItems} from "@/slices/newsSlice";

const Page = ({params} : { params: { id: number }}) => {
    const data = useSelector(selectAllNewsItems);
    let news:News = {
        id: 0,
        title: '',
        description: '',
        image: ''
    }


        if (data) {
            for (let i = 0; i < data.length; i++) {
                if (params.id == data[i].id) {
                    news = data[i]
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