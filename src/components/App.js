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

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/songs")
      .then((r) => r.json())
      .then((songs) => {
        setSongs(songs);
      });
  }, []);

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/home">
          <Home songs={songs}/>
        </Route>
        <Route exact path="/favorite_songs">
          <FavoriteSongs />
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
          <SongPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
  
  export default App;