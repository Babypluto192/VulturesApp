import React from 'react';
import AlbumList from "@/components/AlbumList/AlbumList";
import Image from "next/image";
import classes from "./VulturesAlbumStyle.module.scss"
const VulturesAlbum = () => {
    return (
        <div>
            <h2 className={classes.title}> Vultures 1 </h2>

            <figure>
                <Image src="/Cover.webp" alt="Vultures 1 cover" width={400} height={400} className={classes.cover}/>
                <figcaption className={classes.caption}> Kanye West & Ty Dolla $ign</figcaption>
            </figure>

            <div className={classes.container}>
            <AlbumList/>
            </div>
        </div>
    );
};

export default VulturesAlbum;