import React, { useState } from "react";
import SongCard from "./SongCard.js";

function Home({ addFav, userFavs, songs, userId }) {
    const [year, setYear] = useState(null);
    const [name, setName] = useState(null);
    const userFavIds = userFavs.map(f => f.song_id)

    let songsToDisplay = [...songs]
    if(year) {
        songsToDisplay = songsToDisplay.filter(song => {
            return song.year === year
        })
    }
    if(name) {
        songsToDisplay = songsToDisplay.filter(song => {
            return song.name.toLowerCase().includes(name.toLowerCase())
        })
    }
  return (
    <div className="container-fluid padding">
      <div class="jumbotron jumbotron-fluid">
        <input placeholder="Name" onChange={(e) => {
            const val=e.target.value
            setName(val)
        }}/>
        <select onChange={(e) => {
            const val=e.target.value
            console.log(val)
            setYear(parseInt(val))
        }}>
            <option value="">Year</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
        </select>
      </div>
      <div className="row padding">
        {songsToDisplay.map((song) => {
            const isFav = userFavIds.includes(song.id)
          return <SongCard addFav={addFav} key={song.id} song={song} isFav={isFav} />;
        })}
      </div>
    </div>
  );
}

export default Home;
