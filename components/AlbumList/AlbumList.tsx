"use client"
import React, {useEffect, useState} from 'react';
import classes from "./AlbumListStyle.module.scss";
import "./AlbumListStyle.scss";
import {useGetTracksQuery} from "@/app/api";
import {PlayerInterface, Track as PlayerTrack} from "react-material-music-player";
import VulturesPlayer from "@/components/player/VulturesPlayer";

const AlbumList: React.FC = () => {
    const { data:tracks , error, isLoading } = useGetTracksQuery();
    const [playlist, setPlaylist] = useState<PlayerTrack[]>([]);
    const source = "http://localhost:4000"
    const artist:string = "Kanye West & Ty Dolla $ign"
    useEffect(() => {
        if (tracks) {
            const newPlaylist: PlayerTrack[] = tracks.map((track: { fileName: any; fileURL: any; }) => ({
                getSource() {
                    return "";
                },
                ID: track.fileName,
                coverArt: "/Cover.webp",
                artist: artist,
                title: track.fileName,
                source: source + track.fileURL,
            }));
            setPlaylist(newPlaylist);
        }
    }, [tracks]);


    if(isLoading) return <> <h3>Loading</h3> </>

    return (
        <div>
        <ul>
            { tracks === undefined ? <></> :
                tracks.map((el) => (
                    <li key={el.fileName} className={classes.listEl}>
                        {el.fileName}
                        <br/>
                        Kanye West & Ty Dolla $ign
                        <button onClick={() => {
                            const chosenTrack = playlist.find(track => track.ID === el.fileName);
                            if (chosenTrack) {
                                const chosenIndex = playlist.findIndex(track => track.ID === el.fileName);
                                const beforeChosenTracks = playlist.filter((_, index) => index < chosenIndex);
                                const afterChosenTracks = playlist.filter((_, index) => index > chosenIndex);

                                const reorderedTracks = [chosenTrack,  ...afterChosenTracks, ...beforeChosenTracks];

                                PlayerInterface.play(reorderedTracks);
                            } else {
                                console.error(`Track with ID '${el.fileName}' not found in playlist.`);
                            }
                        }}>


                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                                 className="bi bi-play-fill" viewBox="0 0 16 16">
                                <path
                                    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                            </svg>
                        </button>
                    </li>

                ))}
        </ul>

            <VulturesPlayer/>
        </div>
    );
};

export default AlbumList;
