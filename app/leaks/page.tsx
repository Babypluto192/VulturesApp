"use client"
import React from 'react';
import classes from "./LeaksStyle.module.scss";
import VulturesAlbum from "@/components/AlbumComponent/VulturesAlbum";
import PreColabAlbum from "@/components/PreColab/PreColabAlbum";
import BadPlaybook from "@/components/BBPB1/BadPlaybook";
import Vultures2Album from "@/components/Vultures2/Vultures2Album";
import Vultures1Album from "@/components/VulturesAlbum1/Vultures1Album";


const Page = () => {

    return (
        <div >

            <h3 className={classes.title}> Leaks</h3>

            <PreColabAlbum />
            <BadPlaybook />
            <Vultures2Album />
            <VulturesAlbum albumartist="Kanye West & Ty Dolla $ign" albumtitle="Vultures 3" albumtitlemargin={{marginLeft: 140}} albumcover="/Cover3.webp" tracks={[]} playlist={[]} isLoading={false}/>

        </div>
    );
};

export default Page;