import React from 'react';
import Image from "next/image";
import classes from "./VulturesAlbumStyle.module.scss"
import {IalbumProps} from "@/interfaces/IalbumProps";
import dynamic from "next/dynamic";
const AlbumList = dynamic(() => import('@/components/AlbumList/AlbumList'), {
    ssr: false,
})
const VulturesAlbum = ({albumtitle, albumtitlemargin, albumcover, albumartist, tracks, isLoading, playlist}:IalbumProps) => {
    return (

        <div>
            <h2 className={classes.title} style={albumtitlemargin}>{albumtitle}  </h2>

            <figure>
                <Image src={albumcover || "/Cover.png"} alt={albumtitle + "cover"}  width={400} height={400} className={classes.cover}/>
                <figcaption className={classes.caption}> {albumartist}</figcaption>
            </figure>

            <div className={classes.container}>
            <AlbumList tracks={tracks} isLoading={isLoading} playlist={playlist}/>
            </div>
        </div>

    );
};

export default VulturesAlbum;