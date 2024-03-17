import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos } from '../../api';
import { saveItem, unsaveItem } from '../Store/appSlice';
import { addPhotos } from '../Store/photosSlice';
import PhotoCard from './PhotoCard';
import Pagination from './Pagination';

interface Photo {
  id: number;
  title: string;
  url: string;
}

const PhotoSection: React.FC = () => {
  const dispatch = useDispatch();
  const savedItems = useSelector((state: any) => state.app.savedItems);
  const allPhotos: Photo[] = useSelector((state: any) => state.photos.photos);

  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 8; // Change to 8 for 8 photos per page
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const photosData = await fetchPhotos(currentPage, photosPerPage, searchQuery);
      dispatch(addPhotos(photosData));
      setLoading(false);
    };
    fetchData();
  }, [currentPage, photosPerPage, searchQuery]);

  // Calculate the index of the first and last photo on the current page
  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  // Slice the array of photos to display only those on the current page
  const photos = allPhotos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  const handleSave = (photo: Photo) => {
    dispatch(saveItem(photo));
  };

  const handleUnsave = (photo: Photo) => {
    dispatch(unsaveItem(photo));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = (query: string) => {
    setCurrentPage(1); 
    setSearchQuery(query);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4  text-center shadow-md">Photos</h2>
      <input type="text" placeholder="Search photos..." onChange={(e) => handleSearch(e.target.value)} className="border border-gray-300 rounded px-4 py-2 mb-4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo: Photo) => (
          <div key={photo.id} className="border border-gray-300 rounded p-4 flex flex-col transition-transform hover:translate-x-2 hover:-translate-x-2 hover:scale-105">
            <PhotoCard photo={photo} />
            <div className="mt-auto">
              <div className="flex justify-center">
                {savedItems.some((item: Photo) => item.id === photo.id) ? (
                  <button onClick={() => handleUnsave(photo)} className="bg-red-500 text-white px-4 py-2 rounded">Unsave</button>
                ) : (
                  <button onClick={() => handleSave(photo)} className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Pagination totalPages={Math.ceil(allPhotos.length / photosPerPage)} currentPage={currentPage} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default PhotoSection;
