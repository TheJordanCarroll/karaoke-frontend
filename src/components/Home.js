import React from "react";
import SongCard from "./SongCard.js";

function Home({ songs }) {
    return (
        <div className="container-fluid padding">
            <div className="row padding">
                {songs.map((song) => {
                    return (
                        <SongCard
                        key={song.id}
                        song={song}
                        />
                    );
                })}
            </div>
        </div>
    );
}
  
  export default Home;