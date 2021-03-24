import React from "react";
import FavoriteSongCard from "./FavoriteSongCard.js";

function FavoriteSongs({ fav_songs, setFavSongs, onUpdateFav }) {

    // function handleDeleteFavorite(id) {
    //     const updatedFavoritesArray = fav_songs.filter(
    //         (fav) => fav.id !== id
    //     );
    // }
    // const favSongCards = fav_songs
    // .map((fav) => (
    //     <FavoriteSongCard
    //     key={fav.id}
    //     fav={fav}
    //     onDeleteFavorite={handleDeleteFavorite}
    //     />
    // ));

    return (
        <div className="container-fluid padding">
            <div className="row padding">
                {/* {fav_songs.map((fav) => {
                    return (
                        <FavoriteSongCard
                        key={fav.id}
                        fav={fav}
                        />
                    );
                })} */}
                {fav_songs.map((fav) => {
                    return (
                        <FavoriteSongCard
                        key={fav.id}
                        fav={fav}
                        // onDeleteFavorite={handleDeleteFavorite}
                        setFavSongs={setFavSongs}
                        fav_songs={fav_songs}
                        onUpdateFav={onUpdateFav}
                        />
                    );
                })}
            </div>
        </div>
    );
}
  
  export default FavoriteSongs;