import React from 'react';
import classes from "./MusicStyles.module.scss";
import VulturesHeader from "@/components/header/VulturesHeader";
import VulturesFooter from "@/components/footer/VulturesFooter";
import VulturesPlayer from "@/components/player/VulturesPlayer";
import VulturesAlbum from "@/components/AlbumComponent/VulturesAlbum";
import Image from "next/image";
const Music = () => {
    return (
        <div>
            <VulturesHeader />
            <h1 className={classes.title}> Music</h1>


            <VulturesAlbum/>

            <VulturesPlayer />

        </div>
    );
};

export default Music;