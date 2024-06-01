"use client"
import React, {useEffect, useState} from 'react';
import classes from "./MusicStyles.module.scss";
import VulturesHeader from "@/components/header/VulturesHeader";
import VulturesAlbum from "@/components/AlbumComponent/VulturesAlbum";
import dynamic from 'next/dynamic'
import {Provider} from "react-redux";
import {store} from "@/app/store";
import {useGetTracksQuery} from "@/app/api";
import {PlayerInterface, Track as PlayerTrack} from "react-material-music-player";

const VulturesPlayer = dynamic(() => import('@/components/player/VulturesPlayer'), {
    ssr: false,
})
const Music = () => {

    const artist:string = "Kanye West & Ty Dolla $ign"



    return (

        <div>

            <h1 className={classes.title}> Music</h1>


            <VulturesAlbum albumartist={artist} albumtitle="Vultures 1" albumtitlemargin={{marginLeft: 140}} albumcover="/Cover.webp"/>



        </div>

    );
};

export default Music;