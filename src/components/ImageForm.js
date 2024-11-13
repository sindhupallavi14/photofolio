

import React, { useEffect, useRef } from "react";
import defaultimg  from "./default.jpeg";

function checkUrl(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = function() {
            resolve(true); // URL is working
        };
        img.onerror = function() {
            resolve(false); // URL is not working
        };
        img.src = url;
    });
}

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

    async function handleCreate(e) {
        e.preventDefault();
        if (nameref.current && urlref.current) {
            const imageName = nameref.current.value.trim();
            const url = urlref.current.value.trim();
            if (imageName && url) {
                const isvaild=await checkUrl(url);
                const finalurl=isvaild ? url : defaultimg;
                addImage(imageName, finalurl);
                handleClear(e);
            }
        }
       
    }

    return (
        <div className="form">
            <form className="image-form" onSubmit={handleCreate}>
                <h4 >{imgtoedit ? "Update Image":" Add an Image"}</h4>
                <input ref={nameref} placeholder="Image Name" required />
                <input ref={urlref} placeholder="Url" required />
                <button className="clr-btn" type="button" onClick={handleClear}>Clear</button>
                <button className="crt-btn" type="submit">{imgtoedit ? "Update" : "Add"}</button>
            </form>
        </div>
    );
}