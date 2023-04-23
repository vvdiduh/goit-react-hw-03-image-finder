import React from 'react';
import './ImageGalleryItem.styled.css';

export default function ImageGalleryItems({ arrayImg, onClick }) {
  const renderImg = () => {
    return arrayImg.map(img => (
      <li className="ImageGalleryItem" key={img.id} onClick={onClick}>
        <img
          className="ImageGalleryItem-image"
          src={img.largeImageURL}
          alt={img.tags}
        />
      </li>
    ));
  };

  return <>{renderImg()}</>;
}
