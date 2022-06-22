import { useState } from "react";

const CreateSong = (props) => {

    const[title, setTitle] = useState("")
    const[artist, setArtist] = useState("")
    const[album, setAlbum] = useState("")
    const[genre, setGenre] = useState("")
    const[release_date, setRelease_Date] = useState("")

    function handleSubmit(event){
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            genre: genre,
            release_date: release_date,
            likes: 0
        };
        console.log(newSong)
        props.postSong(newSong)
    }

    return (
        <form onSubmit= {handleSubmit}>
            <div>
                <lable>Song</lable>
                <input type='text' value={title} onChange={(event) => setTitle(event.target.value)}/>
                <lable>Artist</lable>
                <input type='text' value={artist} onChange={(event) => setArtist(event.target.value)}/>
                <lable>Album</lable>
                <input type='text' value={album} onChange={(event) => setAlbum(event.target.value)}/>
                <lable>Genre</lable>
                <input type='text' value={genre} onChange={(event) => setGenre(event.target.value)}/>
                <lable>Release Date</lable>
                <input type='date' value={release_date} onChange={(event) => setRelease_Date(event.target.value)}/>
                <button type='submit'>Add Song</button>
            </div>
        </form>
      );
}
 
export default CreateSong;