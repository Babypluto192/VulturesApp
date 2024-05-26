"use client"
import React from 'react';
import "./PlayerStyles.scss"
import Player, {PlayerInterface ,Track} from 'react-material-music-player'


const NewTrack:Track = {
    getSource(): string {
        return "";
    },
    ID: "1",
    coverArt: "/Cover.webp",
    title: "Good(Don't Die)",
    artist: "Kanye West & Ty Dolla $ign",
    source: "/Good.mp3"
}
PlayerInterface.setPlaylist([NewTrack])

const VulturesPlayer = () => {
    return (
        <div>
            <Player />
        </div>
    );
};
export default VulturesPlayer;
