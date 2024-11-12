
import React from "react";
import photos from "./photos.png";

export default function AlbumList({ albums = [], onAlbumClick }) {
  return (
    <div className="albumlist-con">
      {albums.map((album, index) => (
        <div
          key={index}
          className="album-con"
          onClick={() => onAlbumClick(album.name)} 
        >
          <div className="album-imgcon">
            <img src={photos} className="album-img" alt="Album Cover" />
          </div>
          <h2 className="album-name">{album.name}</h2>
        </div>
      ))}
    </div>
  );
}
