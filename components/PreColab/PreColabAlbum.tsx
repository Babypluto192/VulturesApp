"use client"
import React from 'react';
import {useGetLeaksQuery} from "./LeaksApi";

import VulturesAlbum from "@/components/AlbumComponent/VulturesAlbum";
import useMakeTracks from "@/hooks/useMakeTracks";


const PreColabAlbum = () => {
    const [tracks, isLoading, playlist] = useMakeTracks(useGetLeaksQuery, "/Cover1.png");

    return (
        <div>
            <VulturesAlbum albumartist="Ty Dolla $ign & Chris Brown" albumcover="/Cover1.png" albumtitle="Collab with Chris Brown" albumtitlemargin={{marginLeft: 48}} tracks={tracks || []} isLoading={isLoading} playlist={playlist}/>
        </div>
    );
};

export default PreColabAlbum;