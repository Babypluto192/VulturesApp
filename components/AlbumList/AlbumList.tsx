import React from 'react';
import classes from "./AlbumListStyle.module.scss";
import "./AlbumListStyle.scss";
const tracks: number[] = [];
for (let i = 0; i < 17; i++) {
    tracks.push(i);
}

const AlbumList: React.FC = () => {
    return (
        <ul>
            {tracks.map((id) => (
                <li key={id} className={classes.listEl}>
                    Placeholder {id}
                <br/>
                    Kanye West & Ty Dolla $ign
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                             className="bi bi-play-fill" viewBox="0 0 16 16">
                            <path
                                d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
                        </svg>
                    </button>
                </li>

            ))}
        </ul>
    );
};

export default AlbumList;
