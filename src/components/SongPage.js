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
            {/* <div class="jumbotron jumbotron-fluid sp-jumbotron"> */}
            <div class="card song-page">
            <div className="container-fluid padding song-page">
                <div className="row padding song-page">
                    <div className="col-8">
                        <h2>Song Information</h2>
                        {/* <img src={individualSong.artist.image} className="img-fluid" /> */}
                        <div class="row">
                        <div class="col">
                        <p><h6>Song Name:</h6> {individualSong.name}</p>
                        <p><h6>Artist:</h6> {individualSong.artist.name}</p>
                        <p><h6>Artist Gender:</h6> {individualSong.artist_gender}</p>
                        <p><h6>Range:</h6> {individualSong.lowest_note}-{individualSong.highest_note}</p>
                        </div>
                        <div class="col">
                        <p><h6>Genre:</h6> {individualSong.genre.name}</p>
                        <p><h6>Release Year:</h6> {individualSong.year}</p>
                        <p><h6>Tempo:</h6> {individualSong.tempo}tempo</p>
                        <p><h6>Key:</h6> {individualSong.key}</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-4">
                    <img src={individualSong.image} className="img-fluid song-page" />
                    </div>
                </div>
            </div>
            </div>
        </div>
        : null
    );
  }
  
  export default SongPage;