import React, { useState, useEffect } from "react";
import {
  Switch,
  Route,
  Link,
  BrowserRouter as Router,
  useParams,
} from "react-router-dom";

function SongCard({ song, favs, set, songs, set_songs }) {
  const { id } = song;

  const [isFavorited, setIsFavorited] = useState(false);
  const current_user_id = 1;

  // function toggleFav(e) {
  //     // setIsFavorited(!isFavorited);
  //     // handleSubmit(e);
  //     fetch(`http://localhost:3000/songs/${id}`, {
  //         method: "PATCH",
  //         headers: {
  //             "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ favorited: !isFavorited })
  //     })
  //         .then((r) => r.json())
  //         .then((data) => {
  //             setIsFavorited(data.favorited);
  //             console.log("clicked song", data)
  //         });
  //     e.preventDefault();
  //     fetch("http://localhost:3000/favorite_songs", {
  //         method: "POST",
  //         headers: {
  //             "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ user_id: current_user_id, song_id: id }),
  //     })
  //         .then((r) => r.json())
  //         .then((data) => {
  //             const newFav = [...favs, data];
  //             set(newFav);
  //         });
  // }
  function toggleFav(e) {
    setIsFavorited(!isFavorited);
    handleSubmit(e);
    handleFavorited(e);
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

  // function handleChange(e) {
  //     setProjectData({
  //         ...projectData,
  //         [e.target.name]: e.target.value
  //     })
  function handleFavorited(e) {
    // setIsFavorited(!isFavorited)
    e.preventDefault();
    fetch(`http://localhost:3000/songs/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ favorited: true }),
    })
      .then((r) => r.json())
      .then((updatedSong) => {
        // set_songs(songs.filter((y) => y.id !== x.id) );
        // set_songs({...songs, [e.favorited]: true })
        // set_songs({
        //     ...data,
        //     favorited: data.favorited
        // })
        // console.log(data)
        onUpdateSong(updatedSong);
      });
  }

  function onUpdateSong(updatedSong) {
    // console.log(updatedClient.client)
    const updatedSongArray = songs.map((song) => {
      if (song.id === updatedSong.id) {
        return updatedSong;
      } else {
        return song;
      }
    });
    set_songs(updatedSongArray);
  }

  // function handleSubmit(e) {
  //     e.preventDefault();
  //     fetch("http://localhost:3000/favorite_songs", {
  //         method: "POST",
  //         headers: {
  //             "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ user_id: current_user_id, song_id: id }),
  //     })
  //         .then((r) => r.json())
  //         .then((data) => {
  //             const newFav = [...favs, data];
  //             set(newFav);
  //         });
  // }

  return (
    <a
      href="#"
      class="list-group-item list-group-item-action flex-column align-items-start song-card ul-item"
    >
    {/* <div class="row padding card-row"> */}
    {/* <div class="col-lg-2 lucky"> */}
    <div class="row">
    <div class="col-2 lucky">
    <img
        className="li-img"
        src={song.image}
    />
    </div>
    {/* <div class="col-lg-10 lucky"> */}
    <div class="col-10 lucky">
      <div class="d-flex w-100 justify-content-between">
        {/* <img
                    className="card-img-top"
                    src={song.image}
                /> */}
        <h5 class="mb-1">
          <Link song={song} to={`/songs/${id}`}>
            {song.name}
          </Link>
        </h5>
        <small class="text-muted">
          {/* {song.favorited == true || isFavorited ? (
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
                    )}  */}
          Range: {song.lowest_note}-{song.highest_note}
        </small>
      </div>
      <p class="mb-1">Artist: {song.artist.name}</p>
      <small class="text-muted">
        Genre: {song.genre.name}
        <span className="favorite-button">
          {song.favorited == true || isFavorited ? (
            <button className="btn btn-outline-secondary" onClick={toggleFav}>
              ★
            </button>
          ) : (
            <button className="btn btn-outline-secondary" onClick={toggleFav}>
              ☆
            </button>
          )}
        </span>
      </small>
      {/* if one of the favs has a fav.song.id that equals that individual song.id, then the first button */}
      {/* {song.favorited == true || isFavorited ? (
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
                    )} */}
    </div>
    </div>
    </a>
  );
}

export default SongCard;
