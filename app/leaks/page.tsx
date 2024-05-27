import React from 'react';
import classes from "./LeaksStyle.module.scss";
import VulturesHeader from "@/components/header/VulturesHeader";
import VulturesAlbum from "@/components/AlbumComponent/VulturesAlbum";

import dynamic from "next/dynamic";


const VulturesPlayer = dynamic(() => import('@/components/player/VulturesPlayer'), {
    ssr: false,
})
const Page = () => {
    return (
        <div >

            <h3 className={classes.title}> Leaks</h3>
            <VulturesAlbum albumartist="Ty Dolla $ign & Chris Brown" albumcover="/Cover1.png" albumtitle="Collab with Chris Brown" albumtitlemargin={{marginLeft: 48}}/>
            <VulturesAlbum albumartist="Kanye West & Ty Dolla $ign" albumtitle="Bad B**** Playbook 1" albumtitlemargin={{marginLeft: 80}} albumcover="/Cover2.jpg"/>
            <VulturesAlbum albumartist="Kanye West & Ty Dolla $ign" albumtitle="Vultures 2" albumtitlemargin={{marginLeft: 140}} albumcover="/Cover3.png"/>
            <VulturesAlbum albumartist="Kanye West & Ty Dolla $ign" albumtitle="Vultures 3" albumtitlemargin={{marginLeft: 140}} albumcover="/Cover3.webp"/>

            <VulturesPlayer />
        </div>
    );
};

export default Page;