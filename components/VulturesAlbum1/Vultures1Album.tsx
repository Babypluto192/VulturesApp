import React from 'react';
import useMakeTracks from "@/hooks/useMakeTracks";
import {useGetTracksQuery} from "./Vultures1Api";
import VulturesAlbum from "@/components/AlbumComponent/VulturesAlbum";

const Vultures1Album = () => {
    const [tracks, isLoading, playlist] = useMakeTracks(useGetTracksQuery, "/Cover.png");

    if(isLoading) return <h3>Loading...</h3>

    return (
        <div>
            <VulturesAlbum albumartist="Kanye West & Ty Dolla $ign" albumtitle="Vultures 1" albumtitlemargin={{marginLeft: 140}} albumcover="/Cover.webp" playlist={playlist} tracks={tracks || []} isLoading={isLoading}/>
        </div>
    );
};

export default Vultures1Album;