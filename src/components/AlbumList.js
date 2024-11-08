// import './App.css';
import photos from "./photos.png"

export default function AlbumList({albums=[]})
{
    return(
        <>
       

       
       <div className="albumlist-con">
       {albums.map((album, index) => (
                <div key={index} className="album-con">
                    <div className="album-imgcon">
                        <img src={photos} className="album-img" alt="Album Cover" />
                    </div>
                    <h2 className="album-name">{album}</h2>
                </div>
            ))}
       
       </div>
        </>
    )
}