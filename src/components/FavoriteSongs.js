import React from "react";
import FavoriteSongCard from "./FavoriteSongCard.js";

function FavoriteSongs({ favs }) {
    return (
        <div className="container-fluid padding">
            <div className="row padding">
                {favs.map((fav) => {
                    return (
                        <FavoriteSongCard
                        key={fav.id}
                        fav={fav}
                        />
                    );
                })}
            </div>
        </div>
    );
}
  
  export default FavoriteSongs;