import edit from "./pencil.png";
import bin from "./trash-bin.png";
import { useState } from "react";

export default function ImageList({images=[],
    deleteimg
})
{
    const [hoveredIndex, setHoveredIndex] = useState(null);
    return(
        <div className="imageList-con">
            {images.map((image,idx)=>
            (
                <div className="image-item" key={idx}
                onMouseEnter={()=>setHoveredIndex(idx)}
                onMouseLeave={()=>setHoveredIndex(null)}
                >
                    {hoveredIndex === idx && (
                        <div className="icons">
                            <img src={edit} className="edit"/>
                            <img src={bin} className="delete" onClick={()=>deleteimg(idx)}/>
                        </div>
                    )}
                    <div className="img-con">
                      <img src={image.url} className="img"/>
                    </div>
                    <h3 className="img-name">{image.name}</h3>
                </div>
            ))}
        </div>
    );
}
 