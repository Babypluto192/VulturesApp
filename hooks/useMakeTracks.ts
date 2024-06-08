import { useEffect, useState } from "react";
import { Track as PlayerTrack } from "react-material-music-player";
// @ts-ignore
import { UseQueryHookResult } from "@reduxjs/toolkit/src/query/react/buildHooks";
import { Track } from "@/interfaces/Itrack";
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, QueryDefinition } from "@reduxjs/toolkit/query";

export default function useMakeTracks(
    useGetTracks: () => UseQueryHookResult<QueryDefinition<any, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, "Tracks", Track[], "api">>,
    coverArt: string = "/Cover.png"
) {
    const { data: tracks, isLoading } = useGetTracks();
    const [playlist, setPlaylist] = useState<PlayerTrack[]>([]);
    const source = "http://localhost:4000";

    function findArtist(songName: string): string {
        let artist: string = "Kanye West & Ty Dolla $ign";
        const featIndex = songName.indexOf('feat.');
        if (featIndex !== -1) {
            const partBeforeFeat = songName.slice(featIndex + 5).trim();
            artist = `${artist},${partBeforeFeat}`;
        }
        return artist;
    }

    useEffect(() => {
        if (tracks) {
            const newPlaylist: PlayerTrack[] = tracks.map((track: { fileName: string; fileURL: string }) => ({
                getSource() {
                    return "";
                },
                ID: track.fileName,
                coverArt: coverArt,
                artist: findArtist(track.fileName.replace('.wav', '').replace('.mp3', '')),
                title: track.fileName.replace('.wav', '').replace('.mp3', ''),
                source: `${source}${track.fileURL}`,
            }));
            setPlaylist(newPlaylist);
        }
    }, [tracks, coverArt]);

    return [tracks, isLoading, playlist];
}
