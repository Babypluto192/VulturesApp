
import React from 'react';
import classes from "./MusicStyles.module.scss";
import VulturesHeader from "@/components/header/VulturesHeader";
import VulturesAlbum from "@/components/AlbumComponent/VulturesAlbum";
import dynamic from 'next/dynamic'

const VulturesPlayer = dynamic(() => import('@/components/player/VulturesPlayer'), {
    ssr: false,
})
const Music = () => {
    return (
        <div>

            <h1 className={classes.title}> Music</h1>


            <VulturesAlbum albumartist="Kanye West & Ty Dolla $ign" albumtitle="Vultures 1" albumtitlemargin={{marginLeft: 140}} albumcover="/Cover.webp"/>

            <VulturesPlayer />

        </div>
    );
};

export default Music;