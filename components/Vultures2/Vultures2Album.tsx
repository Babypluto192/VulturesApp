import React from 'react';
import VulturesAlbum from "@/components/AlbumComponent/VulturesAlbum";
import {useGetLeaksVultures2Query} from "@/api/vultures2Api";
import useMakeTracks from "@/hooks/useMakeTracks";


const Vultures2Album = () => {
    const [tracks, isLoading, playlist] = useMakeTracks(useGetLeaksVultures2Query, "/Cover3.png");
    return (

            <VulturesAlbum albumartist="Kanye West & Ty Dolla $ign" albumtitle="Vultures 2" albumtitlemargin={{marginLeft: 140}} albumcover="/Cover3.png" tracks={tracks || []} playlist={playlist} isLoading={isLoading}/>

    );
};

export default Vultures2Album;