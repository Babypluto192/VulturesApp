import React from 'react';
import { IMySection } from "@/interfaces/IMySection";
import Image from "next/image";
import classes from "./MySection.module.scss";

const MySection = ({ title, imageurl1, imageurl2, caption2, caption1 }: IMySection) => {
    return (
        <section className={classes.section}>
            <h3 lang="en" className={classes.title}>{title}</h3>
            <div className={classes.container}>
                <figure className={classes.figure}>
                    <Image className={classes.img} src={imageurl1} alt={caption1} width={400} height={400} priority={true} />
                    <figcaption className={classes.caption}>{caption1}</figcaption>
                </figure>
                <figure className={classes.figure}>
                    <Image className={classes.img} src={imageurl2} alt={caption2} width={400} height={400} priority={true}/>
                    <figcaption className={classes.caption}>{caption2}</figcaption>
                </figure>
            </div>
        </section>
    );
};

export default MySection;
