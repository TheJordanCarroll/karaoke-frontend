import React, { useState, useEffect } from "react";

function SongCard({ song, isFav, addFav }) {
    const{song_id} = song
    const [isFavorited, setIsFavorited] = useState(isFav);
    const createFavorite = () => {
        const newFav = {
            user_id: 1, song_id, note: ""
        }
        fetch("http://localhost:3000/favorite_songs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFav),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
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
                    <h4 className="card-title">{song.name}</h4>
                    <p className="card-text">
                        Range: {song.lowest_note}-{song.highest_note}
                    </p>   
                </div>
                <div
                        // href="#"
                        className="btn btn-outline-secondary"
                        onClick={() => {
                            setIsFavorited(!isFavorited)
                            createFavorite()
                        }}
                        // className="emoji-button favorite active"
                    >
                        {isFavorited ? "★" : "☆"}
                    </div>
                {/* {isFavorited ? (
                    <div
                        // href="#"
                        className="btn btn-outline-secondary"
                        onClick={() => setIsFavorited(false)}
                        // className="emoji-button favorite active"
                    >
                        ★
                    </div>
                    ) : (
                    <div
                        // href="#"
                        className="btn btn-outline-secondary"
                        onClick={() => setIsFavorited(true)}
                        // className="emoji-button favorite"
                    >
                        ☆
                    </div>
                    )} */}
            </div>
        </div>
    );
  }
  
  export default SongCard;