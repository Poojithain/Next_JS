"use client"
import React from 'react';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import appReducer from './Store/appSlice';
import postsReducer from './Store/postsSlice';
import photosReducer from './Store/photosSlice'; 
import PostSection from './Components/PostSection';
import SavedPhotosSection from './Components/SavedPhotosSection';

const rootReducer = combineReducers({
  app: appReducer,
  posts: postsReducer,
  photos: photosReducer, 
});


const store = configureStore({
  reducer: rootReducer,
});

const PostsPage: React.FC = () => {
  return (
    <div>
      <Provider store={store}>
        <PostSection />
        <SavedPhotosSection/>
      </Provider>
    </div>
  );
};

export default PostsPage;