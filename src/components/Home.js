import React, { useState, Link } from "react";
import SongCard from "./SongCard.js";

function Home({ songs, fav_songs, set_fav_songs, song }) {
    const [year, setYear] = useState(null);
    const [tempo, setTempo] = useState(null);
    const [name, setName] = useState(null);
    const [artistName, setArtistName] = useState(null);
    const [lowPitch, setLowPitch] = useState(null);
    const [highPitch, setHighPitch] = useState(null);
    const fullRange = ["A0", "A#0", "B0", "C1", "C#1", "D1", "D#1", "E1", "F1", "F#1", "G1", "G#1", "A1", "A#1", "B1", "C2", "C#2", "D2", "D#2", "E2", "F2", "F#2", "G2", "G#2", "A2", "A#2", "B2", "C3", "C#3", "D3", "D#3", "E3", "F3", "F#3", "G3", "G#3", "A3", "A#3", "B3", "C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4", "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5", "A5", "A#5", "B5", "C6", "C#6", "D6", "D#6", "E6", "F6", "F#6", "G6", "G#6", "A6", "A#6", "B6", "C7", "C#7", "D7", "D#7", "E7", "F7", "F#7", "G7", "G#7", "A7", "A#7", "B7", "C8"]

    function pitchToNote(pitch){
      return fullRange[pitch - 1]
    }

    function noteToPitch(note){
        if(note.includes('b')){
            let shiftedNote = note.replace('b', '')
            return fullRange.indexOf(shiftedNote)
        } else {
        return fullRange.indexOf(note) + 1
        }
    }

    let songsToDisplay = [...songs]
    if(year) {
        songsToDisplay = songsToDisplay.filter(song => {
            return song.year === year
        })
    }
    if(tempo) {
      songsToDisplay = songsToDisplay.filter(song => {
          return song.tempo === tempo
      })
  }
    if(name) {
        songsToDisplay = songsToDisplay.filter(song => {
            return song.name.toLowerCase().includes(name.toLowerCase())
        })
    }
    if(artistName) {
      songsToDisplay = songsToDisplay.filter(song => {
          return song.artist.name.toLowerCase().includes(artistName.toLowerCase())
      })
    }
    if(lowPitch) {
      songsToDisplay = songsToDisplay.filter(song => {
        return song.lowest_pitch >= parseInt(lowPitch)
    })
    }
    if(highPitch) {
      songsToDisplay = songsToDisplay.filter(song => {
        return song.highest_pitch <= parseInt(highPitch)
    })
    }

  return (
    <div className="container-fluid padding">
      <div class="jumbotron jumbotron-fluid jumbo">
        <p class="lead">Find the perfect song for your needs using these filters:</p>
        <label for="songNameInput">Song Name:</label>
        <input class="form-control filter" id="songNameInput" placeholder="" onChange={(e) => {
            const val=e.target.value
            setName(val)
        }}/>
        <label for="artistNameInput">Artist Name:</label>
        <input class="form-control filter" id="artistNameInput" placeholder="" onChange={(e) => {
            const val=e.target.value
            setArtistName(val)
        }}/>
        {/* <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Year
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" onChange={(e) => {
            const val=e.target.value
            setYear(parseInt(val))
          }}>
            <a class="dropdown-item" href="#" value="2020">2020</a>
            <a class="dropdown-item" href="#" value="2019">2019</a>
          </div>
        </div> */}
        <div>
        <label for="releaseYearSelect">Release Year:</label>
        </div>
        <select class="form-control year" id="releaseYearSelect" aria-label="Default select example" onChange={(e) => {
            const val=e.target.value
            setYear(parseInt(val))
        }}>
            <option selected value="">All</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
        </select>
        <div>
        <label for="tempoSelect">Speed:</label>
        </div>
        <select class="form-control year" id="tempoSelect" aria-label="Default select example" onChange={(e) => {
            const val=e.target.value
            setTempo(val)
        }}>
            <option selected value="">All</option>
            <option value="Up">Fast</option>
            <option value="Mid">Medium</option>
            <option value="Down">Slow</option>
        </select>
        <div>
        <label for="lowestNoteInput">My Lowest Note:</label>
        </div>
        <input class="form-control filter" id="lowestNoteInput" onChange={(e) => {
          setLowPitch(noteToPitch(e.target.value))
        }} />
        <label for="highestNoteInput">My Highest Note:</label>
        <input class="form-control filter" id="highestNoteInput" onChange={(e) => {
          setHighPitch(noteToPitch(e.target.value))
        }} />


      </div>
      <div className="row padding">
        {songsToDisplay.map((song) => {
          return <SongCard key={song.id} song={song} favs={fav_songs} set={set_fav_songs} />;
        })}
      </div>
    </div>
  );
}

export default Home;
