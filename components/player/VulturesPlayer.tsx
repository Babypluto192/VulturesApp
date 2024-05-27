"use client";
import React, { useEffect, useState } from 'react';
import "./PlayerStyles.scss";
import Player, { PlayerInterface, Track } from 'react-material-music-player';
import axios from "axios";

interface FileUrl {
    fileName: string;
    fileURL: string;
}

const VulturesPlayer = () => {
    const [status, setStatus] = useState('');
    const [playlist, setPlaylist] = useState<Array<Track>>([]);
    const [fileUrls, setFileUrls] = useState<FileUrl[]>([]);

    const handleDownloadAndUnzip = async () => {
        try {
            setStatus('Downloading...');
            const response = await axios.get<FileUrl[]>("http://localhost:4000/tracks");

            const urls = response.data;


            setFileUrls(urls);

            const newPlaylist: Array<Track> = urls.map(({ fileName, fileURL }) => ({
                getSource() {
                    return "";
                },
                ID: fileName,
                coverArt: "/Cover.webp",
                artist: "Kanye West & Ty Dolla $ign",
                title: fileName,
                source: "http://localhost:4000" + fileURL
            }));
            setTimeout(() => {
            }, 3000);
            setPlaylist(newPlaylist);

            setStatus('Download and unzip completed');
        } catch (error) {
            console.error('Error downloading or unzipping the file:', error);
            setStatus('Error occurred. Please try again.');
        }
    };

    useEffect(() => {
        handleDownloadAndUnzip()
    }, []);

    useEffect(() => {
        PlayerInterface.setPlaylist(playlist);
    }, [playlist]);




    return (
        <div>

            <Player />

        </div>
    );
};

export default VulturesPlayer;
