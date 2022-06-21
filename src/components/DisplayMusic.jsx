import React, { useEffect, useState } from "react"

async function DisplayMusic(props){
    const[songs, setSongs]= useState([]);

    useEffect(()=>{
        let musicTable = props.songs.map(songs, index) => {
            return [songs.title, songs.artist, songs.album, songs.genre, songs.releaseDate]
    });
    setSongs(musicTable);
}, [props.songs])
    return(
        <div>
            {props.songs.map((songs, index))}
        </div>
    );
}

export default function DisplayMusic(props){
    const{songs} = props

    useEffect(()=>{
            console.log(props.songs)
    }
    )

}
