import {Track} from "./Itrack";
import {Track as PlayerTrack} from "react-material-music-player"
export interface IalbumProps {
    albumtitle: string,
    albumtitlemargin: React.CSSProperties,
    albumcover: string,
    albumartist: string,
    tracks : Track[]
    isLoading: boolean,
    playlist: PlayerTrack[]
}