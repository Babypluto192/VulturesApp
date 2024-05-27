import React from 'react';
import AlbumList from "@/components/AlbumList/AlbumList";
import Image from "next/image";
import classes from "./VulturesAlbumStyle.module.scss"
import {IalbumProps} from "@/components/AlbumComponent/IalbumProps";

const VulturesAlbum = ({albumtitle, albumtitlemargin, albumcover, albumartist}:IalbumProps) => {
    return (
        <div>
            <h2 className={classes.title} style={albumtitlemargin}>{albumtitle}  </h2>

            <figure>
                <Image src={albumcover || "/Cover.webp"} alt={albumtitle + "cover"}  width={400} height={400} className={classes.cover}/>
                <figcaption className={classes.caption}> {albumartist}</figcaption>
            </figure>

            <div className={classes.container}>
            <AlbumList/>
            </div>
        </div>
    );
};

export default VulturesAlbum;