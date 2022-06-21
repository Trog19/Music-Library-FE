import React, { useEffect, useState } from 'react';
import axios from 'axios';



function App() {
  const [songs, setSongs] = useState([]);

  useEffect(()=>{
      GetAllSongs();
  }, [])


  async function GetAllSongs(){
    console.log("Inside GetAllSongs function")
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data);
    console.log("Songs data: ", response.data)
  }

  return (
    <div >
    </div>
  );

//   async function createSong(newSong){
//     //newSong:
//    // {
//     //title: "Troubadour"
//     //album: "Troubadour"
//     //artist: "George Strait"
//     //genre: "Country"
//     //releaseDate: "04-01-2008"
//  //   }
//  let response = await axios.post('http://baseurl/api/music', newSong);
//  if(response.status===201){
//   await GetAllSongs
//     }
//   }


}

export default App;
