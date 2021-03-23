import React, { useState, useEffect } from "react";

function FavoriteSongCard({ fav, onDeleteFavorite, setFavSongs, fav_songs }) {
    const { id, user_id, song_id } = fav;

    function handleDelete() {
        const requestOptions = {
            method: "DELETE",
        };
        fetch(`http://localhost:3000/favorite_songs/${id}`, requestOptions);
        setFavSongs(fav_songs.filter((fav) => fav.id !== id));
    }
    //     {
    //         method: "DELETE",
    //     })
    //         .then((r) => r.json())
    //         .then(() => {
    //             onDeleteFavorite(id);
    //         });
    // }

    return (
        <div className="col-md-4">
            <div className="card">
                <img
                    className="card-img-top"
                    src={fav.song.image}
                />
                <div className="card-body">
                    <h4 className="card-title">{fav.song.name}</h4>
                    {/* <h4 className="card-title">{fav.id}</h4> */}
                    <p className="card-text">
                        Range: {fav.song.lowest_note}-{fav.song.highest_note}
                    </p>
                    <button onClick={handleDelete} className="btn btn-outline-secondary">
                        Delete
                    </button>  
                </div>
            </div>
        </div>
    );
  }
  
  export default FavoriteSongCard;