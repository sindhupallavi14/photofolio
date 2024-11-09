
import picture from "./picture.png";
import AlbumForm from "./components/AlbumForm.js";
import './App.css';
import { useState } from "react";
import AlbumList from "./components/AlbumList";
import ImageList from "./components/ImageList";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [albumList,setAlbumList]=useState([]);

  function handleForm() {
    setShowForm((prev) => !prev);
  }

  function handleAlbumClick(albumName) {
    setSelectedAlbum(albumName);  // Set the selected album
  }

  function handleBackToAlbums() {
    setSelectedAlbum(null);  // Reset selected album to go back to album list
  }

  function addAlbum(albumName)
  {
     setAlbumList((prevlist)=>[...prevlist,albumName])
  }

  return (
    <div className='main-page'>
      <div className='nav'>
        <img src={picture} className="logo" />
        <h1>Photofolio</h1>
      </div>

      <div className='body'>
        <div className="con-1">
          <h2>YOUR ALBUMS</h2>
          <button className="add-album" onClick={handleForm}>Add Album</button>
        </div>

        <div className="con-2">
          {selectedAlbum ? (
            <>
              <button className="back-btn" onClick={handleBackToAlbums}>Back to Albums</button>
              <h2>{selectedAlbum} - Image List</h2>
              <ImageList /> {/* Render ImageList when an album is selected */}
            </>
          ) : (
            <>
              {showForm && <AlbumForm addAlbum={addAlbum} />}
              <AlbumList albums={albumList} onAlbumClick={handleAlbumClick} /> {/* Example albums */}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
