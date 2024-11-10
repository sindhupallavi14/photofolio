
import picture from "./picture.png";
import arrow from "./left-arrow.png"
import AlbumForm from "./components/AlbumForm.js";
import './App.css';
import { useState } from "react";
import AlbumList from "./components/AlbumList";
import ImageList from "./components/ImageList";
import ImageForm from "./components/ImageForm";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showImageForm,setShowImageForm]=useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [albumList,setAlbumList]=useState([]);
  const [images, setImages] = useState({}); 

  function handleForm() {
    setShowForm((prev) => !prev);
  }

  function handleImageForm() {
    setShowImageForm((prev) => !prev);
  }

  

  function handleAlbumClick(albumName) {
    setSelectedAlbum(albumName);  // Set the selected album
    setShowImageForm(false); 
  }

  function handleBackToAlbums() {
    setSelectedAlbum(null);  // Reset selected album to go back to album list
    setShowImageForm(false); 
  }

  function addAlbum(albumName)
  {
     setAlbumList((prevlist)=>[...prevlist,albumName])
     setImages((prevImages) => ({ ...prevImages, [albumName]: [] }));
  }

  function addImage(imageName, url) {
    setImages((prevImages) => {
      const updatedImages = {
        ...prevImages,
        [selectedAlbum]: [...(prevImages[selectedAlbum] || []), { name: imageName, url }],
      };
      console.log("Updated Images:", updatedImages);
      return updatedImages;
    });
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
          <button className="add-album" onClick={ selectedAlbum? handleImageForm : handleForm}>{selectedAlbum ? "Add Image" : "Add Album"}</button>
        </div>

        <div className="con-2">
          {selectedAlbum ? (
            <>
              <img src={arrow} className="back-btn"  onClick={handleBackToAlbums}/>
              {/* <h2>{selectedAlbum} - Image List</h2> */}
              {showImageForm && < ImageForm addImage={addImage} /> }<br/><br/>
              <ImageList images={images[selectedAlbum] || []} />
            </>
          ) : (
            <>
              {showForm && <AlbumForm addAlbum={addAlbum} />} <br/> <br/>
              <AlbumList albums={albumList} onAlbumClick={handleAlbumClick} /> {/* Example albums */}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
