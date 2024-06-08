"use client"
import React from 'react';
import classes from "./AlbumListStyle.module.scss"
import {PlayerInterface, Track as PlayerTrack} from "react-material-music-player";
import {Track} from "@/interfaces/Itrack";
import List from "@mui/material/List";
import {Avatar, Divider, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {createTheme, ThemeProvider} from "@mui/material/styles";

const AlbumList = ({tracks, isLoading,playlist }: {tracks: Track[], isLoading: boolean, playlist: PlayerTrack[]}) => {
    const theme = createTheme({
        typography: {
            fontFamily: 'MyCustomFont , sans-serif'
        },
        palette: {
            secondary: {
                main: '#3c3c3c'
            }
        }
    })
    if(isLoading) return <> <h3>Loading</h3> </>
    return (
        <div className={classes.container}>
            { tracks === undefined ? <></> :
                tracks.map((el) => (
                    <ThemeProvider theme={theme} key={el.fileName}>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }} key={el.fileName} >
            <ListItem alignItems="flex-start" key={el.fileName}>
                <ListItemAvatar>
                    <Avatar alt={el.fileName}
                            src={playlist.find(track => track.ID === el.fileName)?.coverArt || "/Cover.png"}/>
                </ListItemAvatar>
                <ListItemText
                    primary= {<React.Fragment>
                        <Typography
                            sx={{display: 'inline'}}
                            component="span"
                            variant="h5"
                        >
                            {(el.fileName).replace('.mp3', '').replace('.wav', '')}
                        </Typography>

                    </React.Fragment>

                    }
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{display: 'inline'}}
                                component="span"
                                variant="body1"
                                color="text.primary"
                            >
                                {playlist.find(track => track.ID === el.fileName)?.artist}
                            </Typography>

                        </React.Fragment>
                    }
                />
                <Button variant="outlined" onClick={() => {

                    const chosenTrack = playlist.find(track => track.ID === el.fileName);
                    if (chosenTrack) {
                        const chosenIndex = playlist.findIndex(track => track.ID === el.fileName);
                        const beforeChosenTracks = playlist.filter((_, index) => index < chosenIndex);
                        const afterChosenTracks = playlist.filter((_, index) => index > chosenIndex);

                        const reorderedTracks = [chosenTrack, ...afterChosenTracks, ...beforeChosenTracks];

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
                </Button>
            </ListItem>
            <Divider variant="inset" component="li"/>

        </List>
                    </ThemeProvider>
                ))}
        </div>

    );
};

export default AlbumList;
