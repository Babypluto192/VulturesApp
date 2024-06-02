import React from 'react';
import VulturesAlbum from "@/components/AlbumComponent/VulturesAlbum";
import {useGetLeaksBadBookQuery} from "./BadPlayBookApi";

import useMakeTracks from "@/hooks/useMakeTracks";

const BadPlaybook = () => {
    const [tracks, isLoading, playlist] = useMakeTracks(useGetLeaksBadBookQuery, "/Cover2.jpg");

    return (

            <VulturesAlbum albumartist="Kanye West & Ty Dolla $ign" albumtitle="Bad B**** Playbook 1" albumtitlemargin={{marginLeft: 80}} albumcover="/Cover2.jpg" playlist={playlist} tracks={tracks || []} isLoading={isLoading} />

    );
};

export default BadPlaybook;