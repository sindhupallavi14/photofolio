
// import './App.css';
import React from "react";


import { useRef } from "react";
import AlbumList from "./AlbumList";

export default function AlbumForm({addAlbum}) {
    
    const inputref=useRef();

    function handleClear(e) {
        e.preventDefault();
        inputref.current.value="";
    }


    function handleCreate(e) {
        e.preventDefault();
        const albumname= inputref.current.value.trim();
        if(albumname)
        {
            addAlbum(albumname)
            inputref.current.value="";
        }

    }


    return (
        <div className="form">
            <form className="album-form">
            <h1>Create an Album</h1>
            <input ref={inputref} placeholder="Album Name" required />
                <button className="clr-btn" onClick={handleClear}>Clear</button>
                <button className="crt-btn" onClick={handleCreate}>Create</button>
            </form>
            
            <AlbumList />
            
        </div>
    );
}
