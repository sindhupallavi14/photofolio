
// import './App.css';
import React from "react";

import { useState } from "react";

export default function AlbumForm() {
    const []=useState();
    const inputref=React.createRef();
    function handleClear(e) {
        e.preventDefault();
        inputref.current.value="";
        
    }
    function handleCreate(e) {
        e.preventDefault();
    }
    return (
        <div className="form">
            <form className="album-form">
            <h1>Create an Album</h1>
            <input ref={inputref} placeholder="Album Name" required />
                <button className="clr-btn" onClick={handleClear}>Clear</button>
                <button className="crt-btn" onClick={handleCreate}>Create</button>
            </form>
        </div>
    );
}
