"use client";
import React from 'react';
import "./PlayerStyles.scss";
import Player from 'react-material-music-player';

const VulturesPlayer = () => {


    return (
        <div>
            <Player sx={{"bottom": 56}} />
        </div>
    );
};

export default VulturesPlayer;
