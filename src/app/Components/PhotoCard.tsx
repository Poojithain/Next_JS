import React from 'react';

interface Photo {
  id: number;
  title: string;
  url: string;
}

interface PhotoCardProps {
  photo: Photo;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo }) => {
  return (
    <div className="photo-card">
      <img src={photo.url} alt={photo.title} />
      <h3>{photo.title}</h3>
    </div>
  );
};

export default PhotoCard;
