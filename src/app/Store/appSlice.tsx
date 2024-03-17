import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Photo {
  id: number;
  title: string;
  url: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
}

type Item = Photo | Post;

interface AppState {
  savedItems: Item[];
}

const initialState: AppState = {
  savedItems: [],
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    saveItem(state, action: PayloadAction<Item>) {
      state.savedItems.push(action.payload);
    },
    unsaveItem(state, action: PayloadAction<Item>) {
      state.savedItems = state.savedItems.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { saveItem, unsaveItem } = appSlice.actions;

export default appSlice.reducer;
