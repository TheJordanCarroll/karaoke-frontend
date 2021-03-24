import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
} from "react-router-dom";

function SongPage({ song }) {
    const { id } = useParams();
    const [individualSong, setIndividualSong] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/songs/${id}`)
            .then((r) => r.json())
            .then((song) => setIndividualSong(song));
    }, []);

    // console.log("this is individual song", individualSong.artist.name)
    // console.log("this is song", song)


    return (
        individualSong.artist && individualSong.genre ?
        <div>
            <div className="container-fluid padding">
                <div className="row padding">
                    <div className="col-lg-6">
                        <h2>Song Information</h2>
                        <img src={individualSong.artist.image} className="img-fluid" />
                        <p>Song Name: {individualSong.name}</p>
                        <p>Artist: {individualSong.artist.name}</p>
                        <p>Artist Gender: {individualSong.artist_gender}</p>
                        <p>Range: {individualSong.lowest_note}-{individualSong.highest_note}</p>
                        <p>Genre: {individualSong.genre.name}</p>
                        <p>Release Year: {individualSong.year}</p>
                        <p>Tempo: {individualSong.tempo}tempo</p>
                        <p>Key: {individualSong.key}</p>
                    </div>
                </div>
            </div>
        </div>
        : null
    );
  }
  
  export default SongPage;