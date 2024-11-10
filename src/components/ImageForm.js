
// import React from "react";
// import { useRef } from "react";
// export default function ImageForm({addImage}) {
    
//     const nameref=useRef();
//     const urlref=useRef();

//     function handleClear(e) {
//         e.preventDefault();
//         nameref.current.value="";
//         urlref.current.value="";
//     }
//     function handleCreate(e) {
//         e.preventDefault();
//         const ImageName= nameref.current.value;
//         const url = urlref.current.value;
//         if(ImageName && url)
//         {
//             addImage(ImageName,url);
//             handleClear(e);
//         }
//     }
//     return (
//         <div className="form">
//             <form className="image-form" onSubmit={handleCreate}>
//             <h4>Add an Image</h4>
//             <input ref={nameref} placeholder="Image Name" required />
//             <input ref={urlref} placeholder="Url" required />
//                 <button className="clr-btn" type="button" onClick={handleClear}>Clear</button>
//                 <button className="crt-btn" type="submit">Add</button>
//             </form>
            
//         </div>
        
//     );
// }


import React, { useRef } from "react";
export default function ImageForm({ addImage }) {
    const nameref = useRef(null);
    const urlref = useRef(null);

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
                <button className="crt-btn" type="submit">Add</button>
            </form>
        </div>
    );
}