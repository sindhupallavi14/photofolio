

import React, { useEffect, useRef } from "react";
export default function ImageForm({ addImage ,imgtoedit}) {
    const nameref = useRef(null);
    const urlref = useRef(null);

    useEffect(()=>{
        if(imgtoedit)
        {
            nameref.current.value =imgtoedit.name;
            urlref.current.value = imgtoedit.url;
        }
    },[imgtoedit])

    function handleClear(e) {
        e.preventDefault();
        if (nameref.current && urlref.current) {
            nameref.current.value = "";
            urlref.current.value = "";
        }
    }

    function handleCreate(e) {
        e.preventDefault();
        if (nameref.current && urlref.current) {
            const imageName = nameref.current.value.trim();
            const url = urlref.current.value.trim();
            if (imageName && url) {
                addImage(imageName, url);
                handleClear(e);
            }
        }
       
    }

    return (
        <div className="form">
            <form className="image-form" onSubmit={handleCreate}>
                <h4>Add an Image</h4>
                <input ref={nameref} placeholder="Image Name" required />
                <input ref={urlref} placeholder="Url" required />
                <button className="clr-btn" type="button" onClick={handleClear}>Clear</button>
                <button className="crt-btn" type="submit">{imgtoedit ? "Update" : "Add"}</button>
            </form>
        </div>
    );
}