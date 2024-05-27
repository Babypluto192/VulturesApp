import React from 'react';
import {IMySection} from "@/components/sections/IMySection";
import Image from "next/image";
import PlaceHolder from "@/public/placeholder.png"
import classes from "./MySection.module.scss";
const MySection = ( {title, imageurl1, imageurl2, caption2, caption1}:IMySection ) => {
    return (

            <section >
                <h3 className={classes.title}> {title}</h3>
                <div className={classes.container}>
                    <figure>
                        <Image className={classes.img1} src={imageurl1} alt={caption1} width={400} height={400}/>
                        <figcaption className={classes.caption}>{caption1}</figcaption>
                    </figure>
                    <figure>
                        <Image className={classes.img2} src={imageurl2} alt={caption2} width={400} height={400}/>
                        <figcaption className={classes.caption}>{caption2}</figcaption>
                    </figure>
                </div>
            </section>

    );
};

export default MySection;