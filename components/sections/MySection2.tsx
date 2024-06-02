import React from 'react';
import {IMySection2} from "@/interfaces/IMySection2";
import Image from "next/image";

import classes from "./MySection2.module.scss";
import Link from "next/link";
const MySection2 = ( { imageurl1,caption1,description1, id }:IMySection2 ) => {
    return (

        <section >
            <div className={classes.container2}>
                <figure>
                    <Image className={classes.img1} src={imageurl1} alt={caption1} width={400} height={400}/>
                    <figcaption className={classes.caption}>{caption1}</figcaption>
                    <p className={classes.description}>{description1}</p>
                    <Link href={"/news/" + id} className={classes.button}> Смотреть подробно</Link>
                </figure>

            </div>
        </section>

    );
};

export default MySection2