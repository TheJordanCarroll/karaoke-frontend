import React, { useState, useEffect } from "react";

function FavoriteSongCard({ fav, onDeleteFavorite, setFavSongs, fav_songs, onUpdateFav }) {
    const { id, user_id, song_id, note } = fav;

    const [updatedNote, setUpdatedNote] = useState(note);

    function handleDelete() {
        const requestOptions = {
            method: "DELETE",
        };
        fetch(`http://localhost:3000/favorite_songs/${id}`, requestOptions);
        setFavSongs(fav_songs.filter((fav) => fav.id !== id));
    }

    function handleNoteFormSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:3000/favorite_songs/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ note: updatedNote })
        })
            .then((r) => r.json())
            .then((updatedFav) => {
                onUpdateFav(updatedFav);
            });
    }

    function handleDeleteNote(e) {
        e.preventDefault();
        fetch(`http://localhost:3000/favorite_songs/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ note: null })
        })
            .then((r) => r.json())
            .then((updatedFav) => {
                onUpdateFav(updatedFav);
            });
    }
    function noNote() {
        return (
            <form onSubmit={handleNoteFormSubmit}>
                <textarea
                    class="form-control"
                    type="text"
                    placeholder="Add a note..."
                    value={updatedNote}
                    onChange={(e) => setUpdatedNote(e.target.value)}
                />
                <div>
                <button type="submit" className="btn btn-outline-secondary">Add</button>
                </div>
            </form>
        );
    }

    function existingNote() {
        return (
            <form onSubmit={handleNoteFormSubmit}>
                <p className="card-text">
                        Notes: {note}
                </p>
                <textarea
                    class="form-control"
                    type="text"
                    placeholder="Update your note..."
                    value={updatedNote}
                    onChange={(e) => setUpdatedNote(e.target.value)}
                />
                <div>
                <button type="submit" className="btn btn-outline-secondary">Update</button>
                <button type="submit" onClick={handleDeleteNote} className="btn btn-outline-secondary">Delete Note</button>
                </div>
            </form>
        );
    }
    let noteSection;
    if (note == null) {
        noteSection = noNote();
    } else {
        noteSection = existingNote();
    }

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
                    {noteSection}
                    <button onClick={handleDelete} className="btn btn-outline-secondary">
                        Delete Favorite Song
                    </button>  
                </div>
            </div>
        </div>
    );
  }
  
  export default FavoriteSongCard;