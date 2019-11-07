import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v4';
import SongForm from './SongForm';

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'almost home', id: 1 },
    { title: 'memory gospel', id: 2 },
    { title: 'this wild darkness', id: 3 }
  ]);

  useEffect(() => {
    console.log('useEffect hook ran', songs);
  },[songs])

  const addSong = (title) => {
    setSongs([{ title, id: uuid() }, ...songs]);
  }


  return (
    <div className="song-list">
      <ul>
        {songs.map(song => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
      <SongForm addSong={addSong} />
    </div>
  )
}

export default SongList;