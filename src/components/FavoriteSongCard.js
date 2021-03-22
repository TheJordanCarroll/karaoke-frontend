import React, { useState, useEffect } from "react";

function FavoriteSongCard({ fav }) {
    return (
        <div className="col-md-4">
            <div className="card">
                {/* <img
                    className="card-img-top"
                    src={fav.song.image}
                /> */}
                <div className="card-body">
                    <h4 className="card-title">{fav.song_id}</h4>
                    <p className="card-text">
                        Note: {fav.note}
                    </p>   
                </div>
            </div>
        </div>
    );
  }
  
  export default FavoriteSongCard;