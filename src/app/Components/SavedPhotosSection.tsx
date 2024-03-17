import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { unsaveItem } from '../Store/appSlice';
import PhotoCard from './PhotoCard';

const SavedPhotosSection: React.FC = () => {
  const dispatch = useDispatch();
  const savedItems = useSelector((state: any) => state.app.savedItems);

  const handleUnsave = (photoId: number) => {
    dispatch(unsaveItem({ id: photoId, title: "", url: "" })); 
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center shadow-md">Saved Photos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {savedItems.length === 0 ? (
          <div className="flex items-center justify-center h-40">
            <p className="text-gray-500 text-lg">No saved photos yet 😇.</p>
          </div>
        ) : (
          savedItems.map((photo: any) => (
            <div key={photo.id} className="border border-gray-300 rounded p-4 flex flex-col hover:bg-gray-100 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <PhotoCard photo={photo} />
              <div className="mt-2">
                <button onClick={() => handleUnsave(photo.id)} className="bg-red-500 text-white px-4 py-2 rounded">Unsave</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SavedPhotosSection;
