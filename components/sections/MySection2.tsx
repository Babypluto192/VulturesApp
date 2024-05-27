import React from 'react';
import {IMySection2} from "@/components/sections/IMySection2";
import Image from "next/image";
import PlaceHolder from "@/public/placeholder.png"
import classes from "./MySection.module.scss";
const MySection2 = ( { imageurl1,caption1,description1 }:IMySection2 ) => {
    return (

        <section >
            <div className={classes.container}>
                <figure>
                    <Image className={classes.img1} src={imageurl1} alt={caption1} width={400} height={400}/>
                    <figcaption className={classes.caption}>{caption1}</figcaption>
                    <p>{description1}</p>
                </figure>

            </div>
        </section>

    );
};

export default MySection2