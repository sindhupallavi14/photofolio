
import picture from "./picture.png";
import arrow from "./left-arrow.png"
import AlbumForm from "./components/AlbumForm.js";
import './App.css';
import { useEffect, useState } from "react";
import AlbumList from "./components/AlbumList";
import ImageList from "./components/ImageList";
import ImageForm from "./components/ImageForm";
import { db } from "./firebaseinit";
import { addDoc,collection,deleteDoc,doc,onSnapshot, updateDoc } from "firebase/firestore";
// react toasts
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showImageForm,setShowImageForm]=useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [albumList,setAlbumList]=useState([]);
  const [images, setImages] = useState({}); 
  const [imgtoupd,setImgtoupd]=useState(null);

  function handleEditImage(image)  {
    setImgtoupd(image); 
    setShowImageForm(true); 
  };

  async function updateImage(Imagename,url)
  {
      if(imgtoupd && imgtoupd.id)
      {
         const imgref=doc(db,"images",imgtoupd.id)
         await updateDoc(imgref,{name:Imagename,url:url})
         toast.success("Image Updated successfully ")
         setImgtoupd(null);
         setShowImageForm(false);
      }
  }

   function handleForm() {
    setShowForm((prev) => !prev);
    
  }

  function handleImageForm() {
    setShowImageForm((prev) => !prev);
    setImgtoupd(null);
  }

  function handleAlbumClick(albumName) {
    setSelectedAlbum(albumName);  // Set the selected album
    setShowImageForm(false); 
  }

  function handleBackToAlbums() {
    setSelectedAlbum(null);  // Reset selected album to go back to album list
    setShowImageForm(false); 
  }

  useEffect(()=>
  {
    const unsub=onSnapshot(collection(db,"albums"),(snapshot)=>
      {
          const album=snapshot.docs.map((doc)=>
          {
              return{
                  id:doc.id,
                  ...doc.data()
              }
          })
          setAlbumList(album)
      })
  },[])

  async function addAlbum(albumName)
  {
    //  setAlbumList((prevlist)=>[...prevlist,albumName])
    //  setImages((prevImages) => ({ ...prevImages, [albumName]: [] }));
     await addDoc(collection(db,"albums"),{ name:albumName, })
     toast.success("Album added successfully")
  }
  
  useEffect(()=>
    {
      const unsub=onSnapshot(collection(db,"images"),(snapshot)=>
        {
          const imagesbyalbum={};
            snapshot.docs.forEach((doc)=>
            {
              const data = doc.data();
              const albumName = data.albumName; 

              if(!imagesbyalbum[albumName])
              {
                 imagesbyalbum[albumName]=[];
              }

              imagesbyalbum[albumName].push({
                id:doc.id,
                name:data.name,
                url:data.url,
              })
            })
            setImages(imagesbyalbum)
        })
        return()=>unsub();
    },[])


  async function addImage(imageName, url) {
    // setImages((prevImages) => {
    //   const updatedImages = {
    //     ...prevImages,
    //     [selectedAlbum]: [...(prevImages[selectedAlbum] || []), { name: imageName, url }],
    //   };
    //   console.log("Updated Images:", updatedImages);
    //   return updatedImages;
    // });
    await addDoc(collection(db,"images"),{
      name:imageName,
      url:url,
      albumName:selectedAlbum,
      })
      toast.success("Image Added successfully")
  }

  async function deleteimg(imageidx)
  {
        // setImages((previmgs)=>
        // {
        //   const updatedImages={...previmgs};
        //   updatedImages[selectedAlbum].splice(imageidx,1);
        //   return updatedImages;
        // })
        const imgref=doc(db,"images",imageidx);
        await deleteDoc(imgref);
        toast.success("Image deleted successfully.");
  }
  

  return (
    <>
    <ToastContainer />
    <div className='main-page'>
      <div className='nav'>
        <img src={picture} className="logo" />
        <h1>Photofolio</h1>
      </div>

      <div className='body'>
        <div className="con-1">
          <h2>{selectedAlbum ?`Images from ${selectedAlbum}`: "Your Albums"}</h2>
          <button className="add-album" onClick={ selectedAlbum? handleImageForm : handleForm}>{selectedAlbum ?(imgtoupd ? "Cancel" : "Add Image") : "Add Album"}</button>
        </div>

        <div className="con-2">
          {selectedAlbum ? (
            <>
              <img src={arrow} className="back-btn"  onClick={handleBackToAlbums}/>
              {showImageForm && < ImageForm addImage={imgtoupd ? updateImage:addImage} imgtoedit={imgtoupd} /> }<br/><br/>
              <ImageList    deleteimg={deleteimg} 
                            images={images[selectedAlbum] || []  } 
                            editimage={handleEditImage}
                            />
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
    </>
  );
}

export default App;
