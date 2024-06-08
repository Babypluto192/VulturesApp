import React from 'react';
import classes from "@/components/sections/MySection.module.scss";
import Image from "next/image";

const VulturesMerchSection = ({title, imageurl1}: {title: string, imageurl1: string}) => {
    return (

            <section >
                <div className={classes.container}>
                    <figure>
                        <Image className={classes.img1} src={"http://localhost:4000" + imageurl1} alt={title + "image"} width={400} height={400}/>
                        <figcaption className={classes.caption}>{title}</figcaption>
                    </figure>
                </div>
            </section>
    );
};

export default VulturesMerchSection;