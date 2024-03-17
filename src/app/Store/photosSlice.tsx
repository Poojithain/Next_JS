// store/photosSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Photo {
  id: number;
  title: string;
  url: string;
}

interface PhotosState {
  photos: Photo[];
}

const initialState: PhotosState = {
  photos: [],
};

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    addPhotos(state, action: PayloadAction<Photo[]>) {
      state.photos = action.payload;
    },
  },
});

export const { addPhotos } = photosSlice.actions;

export default photosSlice.reducer;
