import React, { useState, useEffect} from "react";
import { Switch, Route, Link, BrowserRouter as Router, useParams  } from "react-router-dom";

function SongCard({ song, favs, set }) {
    const { id } = song;

    const [isFavorited, setIsFavorited] = useState(false);
    const current_user_id = 1;

    function toggleFav(e) {
        setIsFavorited(!isFavorited);
        handleSubmit(e);
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/favorite_songs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user_id: current_user_id, song_id: id }),
        })
            .then((r) => r.json())
            .then((data) => {
                const newFav = [...favs, data];
                set(newFav);
            });
        
    }

    return (
        <div className="col-md-4">
            <div className="card">
                <img
                    className="card-img-top"
                    src={song.image}
                />
                <div className="card-body">
                    <h4 class="card-title">
                        <Link song={song} to={`/songs/${id}`}>{song.name}</Link>
                    </h4>
                    <p className="card-text">
                        Range: {song.lowest_note}-{song.highest_note}
                    </p>
                    <p>Artist: {song.artist.name}</p>
                    <p>Genre: {song.genre.name}</p>
                </div>
                {isFavorited ? (
                    <button
                        className="btn btn-outline-secondary"
                        onClick={toggleFav}
                    >
                        ★
                    </button>
                    ) : (
                    <button
                        className="btn btn-outline-secondary"
                        onClick={toggleFav}
                    >
                        ☆
                    </button>
                    )}
            </div>
        </div>
    );
  }
  
  export default SongCard;