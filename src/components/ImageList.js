import edit from "./pencil.png";
import bin from "./trash-bin.png"

export default function ImageList({images=[]})
{
    return(
        <div className="imageList-con">
            {images.map((image,idx)=>
            (
                <div className="image-item" key={idx}>
                    <img src={edit} className="edit"/>
                    <img src={bin} className="delete"/>
                   <div className="img-con">
                   <img src={image.url} className="img"/>
                    </div>
                    <h3 className="img-name">{image.name}</h3>
                </div>
            ))}
        </div>
    );
}
 