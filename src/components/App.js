import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import FavoriteSongs from "./FavoriteSongs";
import Record from "./Record";
import FindKaraoke from "./FindKaraoke";
import Practice from "./Practice";
import Login from "./Login";
import Header from "./Header";
import Footer from "./Footer";
import SongPage from "./SongPage"
import PitchPage from "./PitchPage"
import LandingPage from "./LandingPage"


function App({ song }) {
  const [songs, setSongs] = useState([]);
  const [favSongs, setFavSongs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/songs")
      .then((r) => r.json())
      .then((songs) => {
        setSongs(songs);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/favorite_songs")
      .then((r) => r.json())
      .then((favSongs) => {
        setFavSongs(favSongs);
      });
  }, []);

  function handleUpdateFav(updatedFav) {
    const updatedFavsArray = favSongs.map((fav) => {
      if(fav.id === updatedFav.id) {
        return updatedFav;
      } else {
        return fav;
      }
    });
      setFavSongs(updatedFavsArray);
  }

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/home">
          <Home fav_songs={favSongs} set_fav_songs={setFavSongs} songs={songs} set_songs={setSongs}/>
        </Route>
        <Route exact path="/favorite_songs">
          <FavoriteSongs onUpdateFav={handleUpdateFav} fav_songs={favSongs} setFavSongs={setFavSongs} />
        </Route>
        <Route exact path="/record">
          <Record />
        </Route>
        <Route exact path="/find_karaoke">
          <FindKaraoke />
        </Route>
        <Route exact path="/practice">
          <Practice />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/songs/:id">
          <SongPage song={song}/>
        </Route>
        <Route exact path="/pitchpage">
          <PitchPage />
        </Route>
        <Route exact path="/landingpage">
          <LandingPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
  
  export default App;