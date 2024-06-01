"use client";
import React, { useEffect, useState } from 'react';
import "./PlayerStyles.scss";
import Player, { PlayerInterface, Track as PlayerTrack } from 'react-material-music-player';
import { useGetTracksQuery } from '@/app/api';

const VulturesPlayer = () => {


    return (
        <div>
            <Player />
        </div>
    );
};

export default VulturesPlayer;
