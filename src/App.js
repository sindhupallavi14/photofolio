import picture from "./picture.png";

// import AlbumForm from ".src/components/AlbumForm.js";

import AlbumForm from "./components/AlbumForm.js";



import './App.css';
import { useState } from "react";

function App() {

   const [showForm,setShowForm]=useState(false);
  function handleForm()
  {
     setShowForm(prev=>!prev);
  }
   return(
  
     <div className='main-page'> 
       <div className='nav'>
          <img src={picture} className="logo"/>
          <h1>Photofolio</h1>

       </div>
       <div className='body'>
          <div className="con-1">
            <h2>YOUR ALBUMS</h2>
            <button className="add-album" onClick={handleForm}>Add Album</button>
          </div>
          <div className="con-2">
             {showForm && <AlbumForm />}

          </div>
       </div>
     </div> 
   
   )
}

export default App;
