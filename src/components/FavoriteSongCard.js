import React, { useState, useEffect } from "react";

function FavoriteSongCard({ fav }) {
    return (
        <div className="col-md-4">
            <div className="card">
                <img
                    className="card-img-top"
                    src={fav.song.image}
                />
                <div className="card-body">
                    <h4 className="card-title">{fav.song.name}</h4>
                    <p className="card-text">
                        Range: {fav.song.lowest_note}-{fav.song.highest_note}
                    </p>   
                </div>
            </div>
        </div>
    );
  }
  
  export default FavoriteSongCard;