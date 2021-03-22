import React, { useState, useEffect } from "react";

function SongCard({ song }) {
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
            </div>
        </div>
    );
  }
  
  export default SongCard;