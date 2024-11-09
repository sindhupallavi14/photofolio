
import React from "react";
import { useRef } from "react";
import ImageList from "./ImageList";

export default function ImageForm({addImage}) {
    
    const nameref=useRef();
    const urlref=useRef()

    function handleClear(e) {
        e.preventDefault();
        nameref.current.value="";
        urlref.current.value="";
    }
    function handleCreate(e) {
        e.preventDefault();
        const ImageName= nameref.current.value.trim();
        const url = urlref.current.value.trim();
        if(ImageName && url)
        {
            addImage(ImageName)
            handleClear(e);
        }

    }
    return (
        <div className="form">
            <form className="image-form">
            <h4>Add an Image</h4>
            <input ref={nameref} placeholder="Image Name" required />
            <input ref={nameref} placeholder="Url" required />
                <button className="clr-btn" onClick={handleClear}>Clear</button>
                <button className="crt-btn" onClick={handleCreate}>Add</button>
            </form>
        </div>
    );
}
