
// import './App.css';
import React from "react";


import { useState } from "react";
import AlbumList from "./AlbumList";

export default function AlbumForm() {
    const [addList,setAddList]=useState();
    const inputref=React.createRef();

    function handleClear(e) {
        e.preventDefault();
        inputref.current.value="";
    }
    function handleCreate(e) {
        e.preventDefault();
        // onclicking create the albumlist should be added means it displayed
       
    }
    return (
        <div className="form">
            <form className="album-form">
            <h1>Create an Album</h1>
            <input ref={inputref} placeholder="Album Name" required />
                <button className="clr-btn" onClick={handleClear}>Clear</button>
                <button className="crt-btn" onClick={handleCreate}>Create</button>
            </form>
            <AlbumList/>
        </div>
    );
}
