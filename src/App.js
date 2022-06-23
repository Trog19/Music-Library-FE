import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayMusic from './components/DisplayMusic';
import CreateSong from './components/CreateSong';
import SearchBar from './components/SearchBar';
import './App.css';



function App() {
  const [songs, setSongs] = useState([]);

  useEffect(()=>{
      GetAllSongs();
  }, [])


  async function GetAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data);
    console.log("Songs data: ", response.data)
  }

    async function PostSong(newSong){
      let response = await axios.post('http://127.0.0.1:8000/api/music/', newSong); 
      if(response.status===201){
        GetAllSongs()
      }
    }

    const songSearch = (searchTerm) =>{
      let results = songs.filter((song) => {
          if(song.title.includes(searchTerm) || song.artist.includes(searchTerm) || song.album.includes(searchTerm) || song.genre.includes(searchTerm) || song.release_date.includes(searchTerm)){
            return true;
          }
        }
      );setSongs(results)

    }


    return(
    <div className='border-box' >
      <header>
      <SearchBar songSearch={songSearch}/>
      </header>
      <div></div>
      <DisplayMusic songs={songs}/>
      <div></div>
      <CreateSong postSong={PostSong}/>
    </div>
  );
  



}

export default App;
